/**
 * Managed IT tiers. Feature lists only — pricing fields exist but are
 * hidden by default (flags.showManagedPrices = false) because the numbers
 * are assumptions still being validated. Default CTA: "Get a fixed quote".
 */
export interface ManagedPackage {
  slug: string;
  name: string;
  tagline: string;
  features: string[];
  /** Monthly price in ZAR. Hidden until showManagedPrices is true. */
  monthlyPrice?: number;
  /** Setup/onboarding price. Hidden with the same flag. */
  setupPrice?: number;
  recommended?: boolean;
}

export const managedPackages: ManagedPackage[] = [
  {
    slug: 'essential',
    name: 'Essential',
    tagline: 'The basics, done properly, for a small team.',
    features: [
      'Remote helpdesk for your computers, email and network',
      'Microsoft 365 administration (users, licences, groups)',
      'Patch management for Windows and key applications',
      'Endpoint protection and firewall basics',
      'Backups with periodic restore tests',
      'Quarterly plain-language report',
      'WhatsApp and email support, named engineer',
    ],
  },
  {
    slug: 'secure',
    name: 'Secure',
    recommended: true,
    tagline: 'Everything in Essential, plus the security controls that matter.',
    features: [
      'Everything in Essential',
      'MFA enforced on every user, conditional access',
      'Intune device management (laptops, phones, tablets)',
      'Admin account clean-up and access reviews',
      'Phishing-awareness guidance for your team',
      'Password and secret management policy',
      'Breach-response runbook for your business',
      'Monthly report and review call',
    ],
  },
  {
    slug: 'secure-compliance',
    name: 'Secure + Compliance',
    tagline: 'For practices that handle sensitive personal information.',
    features: [
      'Everything in Secure',
      'POPIA-ready IT controls documented for your attorney',
      'Formal access-review cycle with sign-off',
      'Data-retention and disposal schedule support',
      'Annual security review with a partner attorney',
      'Priority response and change windows',
      'Board-ready one-page risk summary',
    ],
  },
];
