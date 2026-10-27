<?php
/**
 * ATS contact-form handler — cPanel-compatible, no database, no third-party service.
 *
 * Features: server-side validation, honeypot, IP rate limiting, POPIA consent
 * check, CORS for the Cloudflare Pages front-end, and a "mock" transport so the
 * form works locally without a mail server.
 *
 * Reads secrets/settings from config.php (gitignored). See config.example.php.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/config.php';
if (!is_readable($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Form is not configured yet.']);
    exit;
}
$cfg = require $configPath;

/** Emit a JSON response and stop. */
function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Sanitise a scalar input: trim and strip control chars (blocks header injection). */
function clean(?string $v): string
{
    $v = trim((string) $v);
    return preg_replace('/[\x00-\x1F\x7F]/u', '', $v) ?? '';
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = $cfg['allowed_origins'] ?? [];

// --- CORS (preflight + actual) ---------------------------------------------
if ($origin !== '' && in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 600');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(['ok' => false, 'error' => 'Method not allowed.'], 405);
}

// --- Honeypot: silently accept (pretend success) if the hidden field is set --
if (clean($_POST['company_website'] ?? '') !== '') {
    respond(['ok' => true, 'message' => 'Thanks — your message has been sent.']);
}

// --- Rate limiting by IP (file-based) ---------------------------------------
$dataDir = $cfg['data_dir'] ?? __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0700, true);
}
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$limit = $cfg['rate_limit'] ?? ['max' => 5, 'window' => 900];
$bucket = $dataDir . '/rl_' . preg_replace('/[^A-Za-z0-9_.-]/', '_', $ip);
$now = time();
$hits = [];
if (is_readable($bucket)) {
    foreach (explode(',', (string) @file_get_contents($bucket)) as $t) {
        if ($t !== '' && (int) $t > $now - (int) $limit['window']) {
            $hits[] = (int) $t;
        }
    }
}
if (count($hits) >= (int) $limit['max']) {
    respond(['ok' => false, 'error' => 'Too many messages right now. Please try again in a little while, or WhatsApp us.'], 429);
}
$hits[] = $now;
@file_put_contents($bucket, implode(',', $hits));

// --- Validation --------------------------------------------------------------
$name     = clean($_POST['name'] ?? '');
$email    = clean($_POST['email'] ?? '');
$phone    = clean($_POST['phone'] ?? '');
$business = clean($_POST['business'] ?? '');
$message  = clean($_POST['message'] ?? '');
$source   = clean($_POST['source'] ?? 'general');
$consent  = isset($_POST['consent']) && $_POST['consent'] !== 'off' && $_POST['consent'] !== '';

$errors = [];
if (mb_strlen($name) < 2)                          $errors['name']    = 'Please enter your name.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))    $errors['email']   = 'Please enter a valid email address.';
if (mb_strlen($message) < 10)                      $errors['message'] = 'Please tell us a little more (at least 10 characters).';
if (!$consent)                                     $errors['consent'] = 'Please accept the privacy consent so we can reply.';
if (mb_strlen($message) > 5000)                    $errors['message'] = 'That message is too long.';

if ($errors) {
    respond(['ok' => false, 'error' => 'Please check the highlighted fields.', 'fields' => $errors], 422);
}

// --- Build the email (headers sanitised) -------------------------------------
$subject = sprintf('[ATS %s] %s', $source, $business !== '' ? $business : $name);
$body = implode("\n", [
    'Name: '     . $name,
    'Email: '    . $email,
    'Phone: '    . ($phone ?: '—'),
    'Business: ' . ($business ?: '—'),
    'Source: '   . $source,
    'IP: '       . $ip,
    '',
    'Message:',
    $message,
]);

// Never let a submitted value inject headers.
if (preg_match("/[\r\n]/", $email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['ok' => false, 'error' => 'Invalid email address.'], 422);
}

$to = $cfg['to_email'];
$from = $cfg['from_email'];
$headers = [
    'From: ' . sprintf('%s <%s>', $cfg['to_name'] ?? 'ATS Website', $from),
    'Reply-To: ' . sprintf('%s <%s>', $name, $email),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: ATS-contact-form',
];

if (($cfg['transport'] ?? 'mock') === 'mock') {
    // Local/dev: append to a log instead of sending.
    $log = $dataDir . '/mock_mail.log';
    $entry = sprintf(
        "==== %s ====\nTo: %s\nSubject: %s\n%s\n\n%s\n\n",
        date('c'),
        $to,
        $subject,
        implode("\n", $headers),
        $body
    );
    @file_put_contents($log, $entry, FILE_APPEND | LOCK_EX);
    respond(['ok' => true, 'message' => 'Thanks — your message has been sent. We will reply on business days. (mock transport: logged to data/mock_mail.log)']);
}

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    respond(['ok' => false, 'error' => 'Sorry, the message could not be sent. Please WhatsApp or email us directly.'], 500);
}

respond(['ok' => true, 'message' => 'Thanks — your message has been sent. We will reply on business days.']);
