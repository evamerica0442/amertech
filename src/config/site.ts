/**
 * ATS site-wide configuration.
 * The ONLY place contact details, the site URL and feature toggles are set.
 * Components must read from here — never hard-code values.
 */

/** Public site URL. Change here (and in astro.config.mjs) when moving to a .co.za domain. */
export const SITE_URL = 'https://www.atswcape.co.uk';

export const site = {
  name: 'America Technology Services',
  shortName: 'ATS',
  /**
   * Logo tagline. The supplied logo art still reads "Technology Tailored to Your
   * Business" with the old Websites/CRM/POS/Cloud positioning — replaced for the
   * new managed-IT focus. [CONFIRM final tagline wording]
   */
  tagline: 'Managed IT, Microsoft 365 & security — done properly',
  description:
    'Secure, POPIA-ready Microsoft 365 and IT support for owner-run South African businesses, delivered by one accountable senior engineer at a fixed monthly price.',

  email: 'hello@atswcape.co.uk',
  whatsappNumber: '+27 62 742 0304',
  whatsappUrl: 'https://wa.me/27627420304',
  /** tel: href for click-to-call. [CONFIRM — only the WhatsApp number is verified] */
  phoneTel: 'tel:+27627420304',

  /** [CONFIRM business hours] */
  hours: 'Monday - Friday 8:00am til 17:00',
  /** Registered address placeholder. [CONFIRM registered address in Grabouw] */
  addressLocality: 'Grabouw, Western Cape',
  addressCountry: 'ZA',
  address: 'Grabouw, Western Cape, South Africa',

  /** On-site visits: by arrangement in the Western Cape. No radius or fee promised. [CONFIRM] */
  onsiteNote: 'On-site visits by arrangement in the Western Cape. [CONFIRM]',

  legalName: 'America Technology Services (Pty) Ltd',
  cipc: '[CONFIRM CIPC registration number]',
  vat: '[CONFIRM VAT status]',
  infoOfficer: 'Elmar Vernon America',

  /** Social links — leave empty until real profiles exist (no invented links). */
  social: [] as { name: string; url: string }[],

  /**
   * Contact-form endpoint. Same-origin path works on the cPanel host.
   * When the static site is served from Cloudflare Pages, point this at the
   * cPanel-hosted handler, e.g. 'https://api.atswcape.co.uk/contact.php'.
   */
  formEndpoint: '/api/contact.php',
} as const;

export const flags = {
  /** Managed tier prices are assumptions until validated — keep hidden. */
  showManagedPrices: false,
  /** Launch offer ("first 5 clients") — switch off without touching components. */
  showLaunchOffer: true,
  /** No analytics at launch (POPIA + speed). Self-hosted, privacy-friendly only. */
  analyticsEnabled: false,
  /** Health Check price — hidden until confirmed; page shows "Fixed-price, from R[CONFIRM]". */
  showHealthCheckPrice: false,
  healthCheckPriceLabel: 'Fixed-price, from R[CONFIRM]',
} as const;

/** Windows Server 2016 extended-support deadline — time-sensitive hook. VERIFY before publishing. */
export const server2016 = {
  endDate: '12 January 2027',
  isoDate: '2027-01-12',
  pagePath: '/services/windows-server-2016-exit/',
} as const;
