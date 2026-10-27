# America Technology Services (ATS) — marketing website

A fast, accessible, SEO-friendly static marketing site for **America Technology Services**, a
remote-first IT company based in Grabouw, Western Cape, South Africa.

The site leads with **managed IT, Microsoft 365 and security-led support** for owner-run South
African businesses, plus **white-label IT support for overseas MSPs**. Local website packages are
kept as a secondary offer.

Built with **Astro (static output) + Tailwind CSS v4 + TypeScript**. Ships with **zero runtime
JavaScript on content pages** (only a tiny script for the mobile menu and the dismissible notice),
**no third-party fonts, trackers, CDNs or analytics**, and a **cPanel-compatible PHP contact form**.

---

## 1. Requirements

- **Node.js 20.19+ or 22+** (Astro 5 requirement). The build was verified on Node 24.
- **PHP 8.0+** only on the *host* for the contact form — you do **not** need PHP to build or preview
  the site locally.
- A modern browser for local preview.

## 2. Install

```bash
npm install
```

> Note: `@tailwindcss/vite` currently resolves peer deps awkwardly with Astro 5. If a fresh install
> fails, run: `npm install --legacy-peer-deps`.

## 3. Commands

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload at `http://localhost:4321`.    |
| `npm run build`   | Produce the static site in `dist/`.                                 |
| `npm run preview` | Serve the built `dist/` locally.                                    |
| `npm run check`   | Type-check all `.astro` + `.ts` files (Astro + TypeScript).         |

For a true production-fidelity preview (no dev-server injection), serve the folder directly:

```bash
npm run build && (cd dist && python3 -m http.server 4322)
# open http://localhost:4322/
```

## 4. Project structure

```
ATS/
├─ astro.config.mjs          # site URL, sitemap, Tailwind (Vite plugin)
├─ src/
│  ├─ config/site.ts         # ★ SINGLE SOURCE OF TRUTH: name, URL, contacts, flags
│  ├─ data/                  # ★ all editable content as typed data files
│  │  ├─ websitePackages.ts  # R350 / R550 / R850 packages + terms + add-ons
│  │  ├─ managedPackages.ts  # Essential / Secure / Secure + Compliance (features only)
│  │  ├─ services.ts         # the four service pages
│  │  ├─ areas.ts            # 6 towns (generated via one template)
│  │  ├─ industries.ts       # 7 industries with top IT problems + fit
│  │  ├─ faqs.ts             # FAQs keyed per page
│  │  ├─ navigation.ts       # header + footer link structure
│  │  └─ resources.ts        # two launch guides (full drafts, marked [REVIEW BEFORE PUBLISHING])
│  ├─ styles/global.css      # Tailwind theme tokens (palette, Inter, focus, motion)
│  ├─ components/            # reusable UI (Button, Card, Section, Faq, CtaBand, …)
│  ├─ layouts/               # BaseLayout, LegalLayout
│  ├─ pages/                 # all routes (see site map below)
│  └─ lib/url.ts             # canonical URL helper
├─ public/
│  ├─ brand/                 # logo, header crop, favicon, apple-touch, og-cover
│  ├─ fonts/                 # self-hosted Inter (variable, latin subset)
│  └─ api/                   # contact-form PHP (contact.php, config.example.php, data/)
├─ scripts/build-assets.mjs  # regenerates brand crops from public/brand/ats-logo.webp
├─ dist/                     # ← build output you upload to the host (generated)
└─ TODO.md                   # ★ every placeholder, [CONFIRM], [REVIEW], verify-before-publish item
```

## 5. How to edit content (no component changes needed)

Almost everything you will want to change lives in `src/config/site.ts` and `src/data/*.ts`.

### 5.1 Business details, contacts, the site URL

Edit `src/config/site.ts`:

- `SITE_URL` — the canonical domain used for `og:url`, canonical tags, JSON-LD and `sitemap`.
  **It is referenced in three places** that must be kept in sync (see TODO.md):
  1. `src/config/site.ts` → `SITE_URL`
  2. `astro.config.mjs` → `site:`
  3. `public/robots.txt` → the `Sitemap:` line
  When you move from `.co.uk` to a `.co.za` domain, change all three.
- `email`, `whatsappNumber`, `whatsappUrl`, `phoneTel`, `hours`, and the legal placeholders
  (`legalName`, `cipc`, `vat`, `address`, `infoOfficer`). Everything that renders a contact detail
  reads from here — there are no hard-coded phone numbers or emails in components.

### 5.2 Prices and packages

- **Website packages** (live, current pricing): `src/data/websitePackages.ts`. Monthly fee, setup
  fee, page counts, edits, delivery time, the "what the monthly fee covers" list, terms and add-ons.
- **Managed tiers** (features only — pricing is intentionally hidden): `src/data/managedPackages.ts`.
  A `monthlyPrice` field exists per tier but is not rendered while `showManagedPrices` is false.

### 5.3 Switch a feature on/off (flags)

In `src/config/site.ts` → `flags`:

```ts
flags: {
  showManagedPrices: false,   // true = render managed tier prices from managedPackages.ts
  showLaunchOffer: true,      // true = show "Launch offer: first 5 clients" banner + struck setup fees
  analyticsEnabled: false,    // true = inject the (self-hosted) analytics snippet placeholder
  showHealthCheckPrice: false,// true = render a health-check price (and use healthCheckPriceLabel)
  healthCheckPriceLabel: 'Fixed-price, from R[CONFIRM]',
}
```

**To end the website launch offer** (after five clients) set `showLaunchOffer: false` — the banner and
the struck-through setup fees disappear site-wide without touching any component or page.

**To publish the Health Check price**: set `showHealthCheckPrice: true` and put the real price text in
`healthCheckPriceLabel`. Until then the page shows the "Fixed-price, from R[CONFIRM]" placeholder, so a
price is never shown before you confirm it.

### 5.4 Areas, industries, FAQs, resources

- Add or edit a town: append an object to the array in `src/data/areas.ts`. A page is generated
  automatically at `/areas/<slug>/` from a single template — no new files needed.
- FAQs: `src/data/faqs.ts`, keyed by page id. The FAQ JSON-LD is generated from the same data.
- Guides: `src/data/resources.ts`.

## 6. Brand images (favicon, header, OG image)

All derived images are generated from one source: `public/brand/ats-logo.webp`.
They are already built and committed, so you normally do not need to run this.
If the logo changes, regenerate them:

```bash
node scripts/build-assets.mjs
```

This recreates `public/brand/ats-header.webp`, `public/favicon.png`,
`public/brand/apple-touch-icon.png` and `public/brand/og-cover.png`.

> **TODO note:** commission a transparent/white-background logo version for invoices and contracts.

## 7. The contact form

The front-end is `src/components/ContactForm.astro` (posts with `fetch`, shows success/error states,
includes a hidden honeypot field and a mandatory POPIA consent checkbox that links to the Privacy
Policy). Every form also offers the WhatsApp link as an alternative.

The back-end is a single PHP file: **`public/api/contact.php`**. It does:

- server-side validation,
- honeypot rejection,
- per-IP file-based rate limiting,
- POPIA consent enforcement,
- CORS for the Cloudflare Pages origin,
- email via PHP `mail()` **or** a `mock` transport for local testing (writes to
  `public/api/data/mock_mail.log`). No database, no third-party form service.

### 7.1 Configure (real settings are never committed)

1. Copy `public/api/config.example.php` → `public/api/config.php`.
2. Fill in `to_email`, `from_email`, `transport`, `allowed_origins`, `rate_limit`.
   `config.php` is **gitignored** — commit only `config.example.php`.
3. `transport: "mail"` sends real email; `transport: "mock"` just logs (use mock locally / in CI).
4. Make `public/api/data/` writable by PHP (the rate limiter and mock log live there).

> **Honest status:** this PHP handler could **not** be executed live in the build environment
> (PHP was not installed and no passwordless sudo was available). Its JSON contract and the entire
> client form UX were verified end-to-end against a temporary stub server — success and error states
> render correctly. **Test the real `mail()` path on your host before launch.**

## 8. Site map (26 routes + 404)

Home, four service pages, the Health Check lead page, Websites, an MSP page, an Areas index plus six
town pages, Industries, a Resources index plus two guides, About, Contact, four legal pages
(Privacy, Terms, Cookies, PAIA), and a 404. URLs use trailing slashes consistently.

## 9. Quality targets — how to re-run them

The build is currently clean and audits pass on mobile:

```bash
npm run check     # 0 errors / 0 warnings / 0 hints
npm run build     # 26 pages, no errors/warnings
```

- **Lighthouse (mobile)** — Home 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO;
  the service pages and every other archetype score 96–100 / 100 / 100 / 100. (Accessibility is
  axe-core under the hood.)
- **Responsive** — verified with no horizontal overflow at 360, 768 and 1280px across all 25 URL
  routes.
- **Privacy** — zero external runtime requests (only user-clicked `wa.me` links go off-domain).

To re-run locally:

```bash
npm run build && (cd dist && python3 -m http.server 4322)
# then Lighthouse (Chrome DevTools or CLI) against http://localhost:4322/
```

## 10. Deploy

### 10.1 cPanel (recommended — it runs the PHP form)

1. `npm run build`.
2. Upload the **contents** of `dist/` into your web root (usually `public_html/`).
3. Because the PHP handler sits at `public/api/`, after the build it lands at
   `public_html/api/contact.php`. Make sure `public_html/api/data/` is writable by PHP.
4. Copy `public/api/config.example.php` to `public_html/api/config.php` on the server and set real
   values (see §7.1). Never expose `config.php` contents.
5. The site is fully static otherwise — `.htaccess` rewrites are **not** required because every page
   is a real `…/index.html`.

### 10.2 Cloudflare Pages (static front-end) + PHP on cPanel (form)

If you host the static site on Cloudflare Pages but keep email on cPanel:

1. Build settings — Framework: **Astro**; Build command `npm run build`; Output directory `dist`.
2. The Pages host has no PHP, so point the form at your cPanel server: set `site.formEndpoint` in
   `src/config/site.ts` to the **absolute** cPanel URL (e.g. `https://www.atswcape.co.uk/api/contact.php`)
   and add the Pages origin (`https://<project>.pages.dev`) to `allowed_origins` in the cPanel
   `config.php` so CORS accepts it.

> Per the brief, **do not** deploy, change DNS, buy domains, create accounts or push to a remote
> repository without explicit approval. The steps above are instructions, not actions taken.

## 11. Before launch — read TODO.md

`TODO.md` lists every placeholder and assumption grouped by page: all `[CONFIRM]` items (business
hours, legal name, CIPC, VAT, registered address, Information Officer, Health Check price, managed
pricing, licensing route, response times, MSP hours), `[REVIEW: local facts]` area copy,
`[REVIEW BEFORE PUBLISHING]` guides and resource drafts, `[TESTIMONIAL]` / `[PHOTO]` slots, the
`<!-- VERIFY before publishing -->` Windows Server 2027 date, and the note that **all legal pages must
be reviewed by an attorney before launch**. Nothing has been invented: there are no fabricated
testimonials, clients, statistics, awards, partner badges or certifications.
