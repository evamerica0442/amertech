export interface WebsitePackage {
  slug: 'starter' | 'business' | 'growth';
  name: string;
  popular: boolean;
  monthlyFee: number;
  setupFee: number;
  pages: string;
  monthlyEdits: number;
  deliveryDays: number;
  /** Feature rows shown in the comparison table. `true`/`false` render tick/dash. */
  features: { label: string; value: string | boolean }[];
  blurb: string;
}

export const currency = (rand: number): string =>
  'R' + rand.toLocaleString('en-ZA');

/** Shared across all packages (rendered once, not per column). */
export const includedInAll: string[] = [
  'Mobile-friendly design',
  'Your own .co.za domain',
  'Hosting and SSL (secure padlock)',
  'Contact form with click-to-call and a WhatsApp button',
  'Facebook and social links',
  'Google Maps and business hours',
];

/** Business and Growth only. */
export const businessAndGrowthExtras: string[] = [
  'Photo gallery',
  'Basic Google search setup (SEO)',
  'Professional email (name@yourbusiness.co.za)',
];

/** Growth only. */
export const growthExtras: string[] = [
  'Online booking or enquiry system',
  'Customer list / simple CRM',
];

export const whatMonthlyCovers: string[] = [
  'Hosting, security updates and backups',
  'Support by email or WhatsApp',
  'Content changes up to your monthly edit limit',
  'Your site stays online during load-shedding (cloud hosted)',
  'Domain renewal included in the monthly fee',
];

export const terms: string[] = [
  'First month upfront, then monthly by EFT.',
  '12-month minimum term, then cancel with 30 days’ notice.',
  'Early exit: the normal setup fee becomes payable if you cancel within 12 months.',
  'Two rounds of changes before launch.',
  `Extra page ${currency(600)} · extra edit ${currency(250)} · logo design from ${currency(1000)}.`,
  'You own your content and your domain.',
  'Prices exclude VAT where applicable and are valid for 30 days from the date of a quote.',
];

export interface AddOn {
  name: string;
  price: string;
}

export const addOns: AddOn[] = [
  { name: 'Google Business Profile setup', price: currency(800) },
  { name: 'POS system setup', price: 'Quoted separately' },
  { name: 'Cloud migration and backup', price: 'Quoted separately' },
];

export const launchOffer = {
  headline: 'Launch offer: first 5 clients',
  body: `Setup fee waived (${currency(0)}) on a 12-month plan, in exchange for a short testimonial.`,
};

export const websitePackages: WebsitePackage[] = [
  {
    slug: 'starter',
    name: 'Starter',
    popular: false,
    monthlyFee: 350,
    setupFee: 1500,
    pages: '1 page',
    monthlyEdits: 1,
    deliveryDays: 5,
    blurb: 'A single, sharp page for a one-service business that needs to be found and called.',
    features: [
      { label: 'Pages', value: '1 page' },
      { label: 'Monthly edits included', value: '1' },
      { label: 'Delivery time', value: '5 days' },
      { label: 'Photo gallery', value: false },
      { label: 'Basic Google search setup (SEO)', value: false },
      { label: 'Professional email (name@yourbusiness.co.za)', value: false },
      { label: 'Online booking or enquiry system', value: false },
      { label: 'Customer list / simple CRM', value: false },
    ],
  },
  {
    slug: 'business',
    name: 'Business',
    popular: true,
    monthlyFee: 550,
    setupFee: 3500,
    pages: 'Up to 5',
    monthlyEdits: 2,
    deliveryDays: 7,
    blurb: 'The right size for most local businesses: several pages, a gallery and your own email address.',
    features: [
      { label: 'Pages', value: 'Up to 5' },
      { label: 'Monthly edits included', value: '2' },
      { label: 'Delivery time', value: '7 days' },
      { label: 'Photo gallery', value: true },
      { label: 'Basic Google search setup (SEO)', value: true },
      { label: 'Professional email (name@yourbusiness.co.za)', value: true },
      { label: 'Online booking or enquiry system', value: false },
      { label: 'Customer list / simple CRM', value: false },
    ],
  },
  {
    slug: 'growth',
    name: 'Growth',
    popular: false,
    monthlyFee: 850,
    setupFee: 5500,
    pages: 'Up to 8',
    monthlyEdits: 4,
    deliveryDays: 10,
    blurb: 'For businesses that want bookings and customer records working alongside the website.',
    features: [
      { label: 'Pages', value: 'Up to 8' },
      { label: 'Monthly edits included', value: '4' },
      { label: 'Delivery time', value: '10 days' },
      { label: 'Photo gallery', value: true },
      { label: 'Basic Google search setup (SEO)', value: true },
      { label: 'Professional email (name@yourbusiness.co.za)', value: true },
      { label: 'Online booking or enquiry system', value: true },
      { label: 'Customer list / simple CRM', value: true },
    ],
  },
];
