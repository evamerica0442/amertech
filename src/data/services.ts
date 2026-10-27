import type { IconName } from '../components/ui/icons';

export interface Service {
  slug: string;
  path: string;
  name: string;
  short: string;
  intro: string;
  icon: IconName;
}

/** The four core managed/security services (main business). */
export const services: Service[] = [
  {
    slug: 'managed-it-support',
    path: '/services/managed-it-support/',
    name: 'Managed IT & Helpdesk',
    short: 'Fixed-price day-to-day IT support and helpdesk for your team.',
    intro:
      'Your computers, email, network and day-to-day tech problems looked after on one fixed monthly fee — with a named engineer you can ring or WhatsApp.',
    icon: 'headset',
  },
  {
    slug: 'microsoft-365-intune',
    path: '/services/microsoft-365-intune/',
    name: 'Microsoft 365 & Intune',
    short: 'Clean, secure Microsoft 365 tenants, managed devices and licensing guidance.',
    intro:
      'Tenant set-up and clean-up, email migrations, Intune device management and Entra ID (Microsoft’s sign-in and access system) done by someone who administers it at scale.',
    icon: 'cloud',
  },
  {
    slug: 'security-popia-ready-it',
    path: '/services/security-popia-ready-it/',
    name: 'Security & POPIA-ready IT',
    short: 'MFA, patching, backups and access reviews — secure by default.',
    intro:
      'The IT controls that support your POPIA obligations: multi-factor authentication, patching, backups, endpoint protection, access reviews and a breach-response runbook.',
    icon: 'shield',
  },
  {
    slug: 'windows-server-2016-exit',
    path: '/services/windows-server-2016-exit/',
    name: 'Windows Server 2016 Exit',
    short: 'A fixed-fee plan to move off Server 2016 before support ends.',
    intro:
      'Extended support for Windows Server 2016 ends 12 January 2027. We assess, plan and help you migrate — or buy time safely with Extended Security Updates through Azure Arc.',
    icon: 'server',
  },
];

export const serviceBySlug = (slug: string): Service =>
  services.find((s) => s.slug === slug) ?? services[0];
