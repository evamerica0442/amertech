# ATS site — TODO, placeholders & pre-launch checks

Every `[CONFIRM]`, `[REVIEW]`, `[TESTIMONIAL]`, `[PHOTO]` and `<!-- VERIFY -->`
marker in the codebase, grouped by page. **Nothing here should go live until it
is resolved or removed.**

> ⚖️ **Legal pages must be reviewed by an attorney before launch.** The Privacy
> Policy, Terms of Service, Cookie notice and PAIA manual are drafts only and
> are not legal advice.

---

## Global / config (`src/config/site.ts`)

- [ ] `[CONFIRM]` **Business hours** — currently `[CONFIRM business hours]`, shown in the top utility bar and on Contact.
- [ ] `[CONFIRM]` **Registered address in Grabouw** — footer + JSON-LD `streetAddress`.
- [ ] `[CONFIRM]` **Legal name** (e.g. "America Technology Services (Pty) Ltd").
- [ ] `[CONFIRM]` **CIPC registration number**.
- [ ] `[CONFIRM]` **VAT status**.
- [ ] `[CONFIRM]` **Information Officer name** (POPIA).
- [ ] `[CONFIRM]` **On-site visit arrangements** in the Western Cape — no radius or fee is promised; confirm wording.
- [ ] `[CONFIRM]` **Phone number for click-to-call** — `tel:` currently reuses the WhatsApp line `+27 62 742 0304`; confirm a voice number.
- [ ] `[CONFIRM]` **Tagline wording** — logo art still says "Technology Tailored to Your Business"; header uses "Managed IT, Microsoft 365 & security — done properly".
- [ ] `[REVIEW]` **`SITE_URL`** is `https://www.atswcape.co.uk` in `src/config/site.ts` **and** `astro.config.mjs` **and** `public/robots.txt`. Update all three when moving to a `.co.za` domain.
- [ ] `[DECIDE]` **Analytics** — `flags.analyticsEnabled` is `false`; no trackers load. If wanted, self-host a privacy-friendly tool (e.g. Plausible/Umami) and point `public/js/analytics.js` at it.
- [ ] `[DECIDE]` **Afrikaans version** — site is English-only at launch; content is data-driven so a locale could be added later.

## Brand assets

- [ ] `[REVIEW]` Have a **transparent / white-background logo** made for invoices and contracts. The supplied logo is a navy square; header/favicon/OG are cropped from it (`scripts/build-assets.mjs`).
- [ ] `[REVIEW]` The supplied logo still shows the old **Websites · CRM · POS · Cloud** icon row. It is cropped out of the header/favicon, but the source art should be reissued for the new positioning.
- [ ] `[REVIEW]` `public/brand/ats-website-packages.jpg` (old pricing sheet) is kept for reference only — not used on any page.

## Home (`/`)

- [ ] `[TESTIMONIAL: add real client quote]` — trust section placeholder.
- [ ] `[CONFIRM]` Health Check CTA price text follows `flags.healthCheckPriceLabel`.

## Managed IT & Helpdesk (`/services/managed-it-support/`)

- [ ] `[CONFIRM]` **Response approach / hours** — no invented SLA numbers; page says "confirmed in your agreement".
- [ ] `[CONFIRM]` Managed tier pricing (hidden via `showManagedPrices: false`).

## Microsoft 365 & Intune (`/services/microsoft-365-intune/`)

- [ ] `[CONFIRM]` **Licensing route** — page does **not** claim CSP status.
- [ ] `[REVIEW]` Do not add a "Microsoft Partner" badge — not authorised.

## Security & POPIA-ready IT (`/services/security-popia-ready-it/`)

- [ ] `[REVIEW]` POPIA wording — always "POPIA-ready IT controls", never "makes you compliant"; attorney note present. Confirm the "annual review with a partner attorney" claim is real.

## Windows Server 2016 Exit (`/services/windows-server-2016-exit/`) + banner

- [ ] `<!-- VERIFY before publishing -->` **Deadline 12 January 2027** and the ESU-via-Azure-Arc framing. Confirm against Microsoft's lifecycle page before launch.
- [ ] `[CONFIRM]` **Exit Assessment fixed fee**.

## IT & Security Health Check (`/health-check/`)

- [ ] `[CONFIRM]` **Price** — shows "Fixed-price, from R[CONFIRM]" until `showHealthCheckPrice` is true and a number is set.

## Websites (`/websites/`)

- [ ] `[REVIEW]` Prices are current live pricing (section 9). Confirm before any change: Starter R350 / Business R550 / Growth R850; setup R1,500 / R3,500 / R5,500.
- [ ] `[CONFIRM]` **Launch offer** — `showLaunchOffer: true` drives the banner + struck setup fees. Switch to `false` after the first 5 clients.
- [ ] `[TESTIMONIAL: add real client quote]` — placeholder on the page.

## For MSPs (`/msp-partners/`)

- [ ] `[CONFIRM]` **Time-zone overlap hours** — page states SAST (UTC+2) with `[CONFIRM hours]`.
- [ ] `[REVIEW]` "Free 5-hour pilot", mutual NDA, SLA and PSA (ConnectWise) claims — confirm each is offered.

## Areas (`/areas/` + 6 town pages)

- [ ] `[REVIEW: local facts]` — **every** area paragraph is generated from `src/data/areas.ts` and contains local claims (business types, estate seasonal-staff patterns, load-shedding, farm connectivity, etc.). Verify each town's content with local knowledge before publishing so pages are not thin doorways.
  - [ ] Grabouw & Elgin Valley
  - [ ] Stellenbosch
  - [ ] Somerset West
  - [ ] Paarl
  - [ ] Franschhoek
  - [ ] Cape Town northern suburbs (Durbanville, Bellville, Brackenfell)

## Industries (`/industries/`)

- [ ] `[REVIEW: local facts]` — the "top three IT problems" per industry are reasonable but unverified; confirm they match real client situations.

## Resources (`/resources/` + 2 guides)

- [ ] `[REVIEW BEFORE PUBLISHING]` — **"Five cyber basics for a 20-person business"**.
- [ ] `[REVIEW BEFORE PUBLISHING]` + `<!-- VERIFY -->` — **"What to do before 12 January 2027 if you run Windows Server 2016"** (deadline + ESU claims).

## About (`/about/`)

- [ ] `[PHOTO: add founder photo]` — placeholder in place.
- [ ] `[CONFIRM]` Naming story for "America Technology Services" (FAQ references it as a placeholder).
- [ ] `[REVIEW]` Founder bio uses only section-2 facts (18+ yrs, M365/Entra/Intune, Windows Server/AD, endpoint lifecycle, MSP delivery; AWS SAA, AWS Cloud Practitioner, Azure Applied Skills; Afrikaans + English).

## Contact (`/contact/`)

- [ ] `[CONFIRM]` Business hours (shared with global).
- [ ] `[SETUP]` Deploy `public/api/contact.php` + a real `config.php` (gitignored) on the cPanel host; set `site.formEndpoint` to that URL when the static site is on Cloudflare Pages. Configure `ALLOWED_ORIGINS` for CORS.

## Legal (`/legal/*`)

- [ ] ⚖️ **Attorney review required** for all four pages before launch.
- [ ] `[CONFIRM]` Information Officer, registered address, operator details in Privacy Policy.
- [ ] `[REVIEW]` PAIA manual is a placeholder pending a real submission to the Information Regulator.

## Content integrity (whole site)

- [ ] No invented testimonials, client names, case studies, statistics, awards, partner badges, response-time guarantees, uptime figures or certifications beyond those in section 2. Search for `TESTIMONIAL` and confirm none were filled with fake data.
- [ ] No third-party runtime requests (fonts, CDN, analytics, QR service) — verify in the browser Network tab on the built site.
