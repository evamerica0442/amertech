<?php
/**
 * ATS contact-form configuration — TEMPLATE.
 *
 * Copy this file to `config.php` (in the same folder) and fill in real values.
 * `config.php` is gitignored and must NOT be committed.
 */

return [
    // Where enquiry emails are sent.
    'to_email'   => 'hello@atswcape.co.uk',
    'to_name'    => 'ATS Enquiries',

    // "From" address for outbound mail. Use an address on your own mail domain
    // so the host will actually relay it (many cPanel hosts reject foreign Froms).
    'from_email' => 'website@atswcape.co.uk',

    // Transport:
    //   'mail' -> use PHP mail() (needs a working mail server on the host)
    //   'mock' -> do not send; append the message to mock_mail.log (local testing)
    'transport'  => 'mock',

    // Origins allowed to POST here (Cloudflare Pages + production domain).
    // Use the exact scheme + host, no trailing slash.
    'allowed_origins' => [
        'https://www.atswcape.co.uk',
        'https://atswcape.co.uk',
        // 'https://ats-site.pages.dev', // add your Cloudflare Pages URL
    ],

    // Simple file-based rate limiting.
    'rate_limit' => [
        'max'    => 5,    // requests...
        'window' => 900,  // ...per this many seconds (15 min), per IP.
    ],

    // Where the rate-limit counters and mock mail are stored (must be writable).
    'data_dir'   => __DIR__ . '/data',
];
