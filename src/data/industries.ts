import type { IconName } from '../components/ui/icons';

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  intro: string;
  /** Exactly three IT problems, per the brief. */
  problems: { title: string; body: string }[];
  fit: string;
}

export const industries: Industry[] = [
  {
    slug: 'wine-estates-agri',
    name: 'Wine estates & agri-business',
    icon: 'grape',
    intro:
      'Estates run on seasonal labour, scattered buildings and systems that were set up years ago and never revisited.',
    problems: [
      {
        title: 'Shared logins and accounts that never close',
        body: 'One login for the farm office, five people using it, and former seasonal workers who can still get in. We move everyone to named Entra ID accounts with MFA and revoke access on the last day.',
      },
      {
        title: 'Pack-shed and outbuilding connectivity',
        body: 'Cameras, stock control and weighbridge systems need reliable links across long distances. We design point-to-point Wi-Fi and LTE failover with alerting when a link drops.',
      },
      {
        title: 'Load-shedding taking the office offline',
        body: 'Invoices and email must survive stage 6. We size UPS/inverter coverage for your actual gear and move files to OneDrive so work is never trapped on one desktop.',
      },
    ],
    fit: 'Secure managed IT + Microsoft 365 administration, with Intune for devices that move between sheds and offices, and a Security & POPIA-ready IT review.',
  },
  {
    slug: 'accounting-practices',
    name: 'Accounting practices',
    icon: 'calculator',
    intro:
      'You hold years of client financial data. Your clients expect it to be safe, and your professional body expects it documented.',
    problems: [
      {
        title: 'Client folders open to everyone',
        body: 'Shared drives where every staffer sees every client. We restructure SharePoint/OneDrive with role-based access and audit trails.',
      },
      {
        title: 'Invoice-redirect fraud',
        body: 'A spoofed email asking to change banking details. We enforce MFA, align SPF/DKIM/DMARC and put a written verification step in place.',
      },
      {
        title: 'Tax-season outages',
        body: 'The one time you cannot afford downtime. We monitor, patch on your schedule and keep tested backups off-site.',
      },
    ],
    fit: 'Secure + Compliance tier: MFA, access reviews, documented POPIA-ready IT controls and a breach-response runbook your professional indemnity insurer will understand.',
  },
  {
    slug: 'law-firms',
    name: 'Law firms',
    icon: 'scale',
    intro:
      'Privileged documents, strict confidentiality and billable hours lost to flaky technology.',
    problems: [
      {
        title: 'Email and document security',
        body: 'Matter files attached to email and left in shared inboxes. We move to governed SharePoint/OneDrive with sensitivity access and MFA on every account.',
      },
      {
        title: 'Departing staff taking clients',
        body: 'A partner leaves and the mailbox goes with them. Company-owned Microsoft 365 accounts, neutral aliases and proper offboarding keep the firm’s data.',
      },
      {
        title: 'Legacy servers',
        body: 'Old file servers and practice-management systems on Windows Server 2016. Our Exit Assessment plans the move before extended support ends 12 January 2027.',
      },
    ],
    fit: 'Secure + Compliance tier plus a Windows Server 2016 Exit Assessment. Access reviews documented for your POPIA officer — legal advice stays with your attorney.',
  },
  {
    slug: 'medical-dental',
    name: 'Medical & dental practices',
    icon: 'stethoscope',
    intro:
      'Patient records are the most sensitive personal information most practices will ever hold.',
    problems: [
      {
        title: 'Front-desk accounts with weak passwords',
        body: 'The reception PC everyone logs into. Named accounts, MFA and BitLocker-encrypted laptops make a stolen machine an inconvenience, not a breach.',
      },
      {
        title: 'Practice-management system access',
        body: 'Unlimited access to patient records for staff who do not need it. We apply least-privilege access and quarterly reviews.',
      },
      {
        title: 'No tested backups',
        body: 'Ransomware targets practices. We run backups, test restores and keep an offline copy, plus a written breach-response plan.',
      },
    ],
    fit: 'Secure + Compliance tier with POPIA-ready IT controls documented for your compliance officer, plus a Health Check before any patient-data incident becomes a reportable breach.',
  },
  {
    slug: 'estate-agents',
    name: 'Estate agents',
    icon: 'home',
    intro:
      'Agents live on their phones and depend on the office system for mandates, contracts and payables.',
    problems: [
      {
        title: 'Personal phones holding business data',
        body: 'Client details on unmanaged handsets. Intune enrolment separates work data from personal use and lets you wipe the work profile, not the phone.',
      },
      {
        title: 'Mandates and contracts in email',
        body: 'Signed documents scattered across inboxes. We consolidate to governed SharePoint libraries with proper retention.',
      },
      {
        title: 'The agent who leaves',
        body: 'Taking the WhatsApp group and the mailbox with them. Company-owned accounts and shared mailboxes keep the agency’s data in the agency.',
      },
    ],
    fit: 'Secure tier with Intune device management, plus a website package with an enquiry/booking system for listings and a simple CRM on Growth.',
  },
  {
    slug: 'schools',
    name: 'Schools',
    icon: 'graduation',
    intro:
      'Staff, learner and parent communication has to be usable every day and POPIA-safe every minute.',
    problems: [
      {
        title: 'Learner and staff data spread across tools',
        body: 'Registers in spreadsheets, results in email, photos on shared drives. We structure Microsoft 365 groups and access so each role sees only what it needs.',
      },
      {
        title: 'Device chaos',
        body: 'Chromebooks, labs, admin laptops and BYOD phones with no consistent management. Intune and Entra ID bring them under one policy.',
      },
      {
        title: 'Phishing aimed at admin and bursar',
        body: 'Fee-invoice fraud is common. MFA, filtering, awareness sessions and a written incident plan close the obvious doors.',
      },
    ],
    fit: 'Essential or Secure managed IT with Microsoft 365 tenant administration, plus a Security & POPIA-ready IT review documented for the governing body.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: 'hotel',
    intro:
      'Restaurants, guest houses and venues trade seven days a week — a booking system that is down is lost revenue.',
    problems: [
      {
        title: 'Wi-Fi that guests judge you on',
        body: 'A full dining room kills a domestic router. Business-grade access points, separate POS/guest networks and monitoring before guests notice.',
      },
      {
        title: 'POS and bookings going dark on load-shedding',
        body: 'We size small UPS setups for exactly the devices that must stay up and put everything on cloud so a power cut is not a lost night.',
      },
      {
        title: 'Staff turnover and shared accounts',
        body: 'Seasonal churn means shared logins for booking and social platforms. Named Microsoft 365 accounts with MFA and instant revocation fix it.',
      },
    ],
    fit: 'Essential or Secure managed IT with network/POS resilience, plus a website package with an online booking or enquiry system (Growth).',
  },
];
