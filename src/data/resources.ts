export interface ResourceSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface Resource {
  slug: string;
  path: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  intro: string;
  sections: ResourceSection[];
  cta: string;
}

/**
 * Two launch guides, written in full as first drafts.
 * Both are marked [REVIEW BEFORE PUBLISHING] and listed in TODO.md.
 */
export const resources: Resource[] = [
  {
    slug: 'five-cyber-basics',
    path: '/resources/five-cyber-basics/',
    title: 'Five cyber basics for a 20-person business',
    description:
      'Five practical controls that stop the overwhelming majority of attacks on small South African businesses — no jargon, no fear-mongering, and nothing you need a department to run.',
    date: '2026-10-27',
    readMinutes: 7,
    intro:
      'You do not need a security operations centre to be a hard target. Most attacks on small businesses are opportunistic and stop at the first competent wall. These five basics are the wall. [REVIEW BEFORE PUBLISHING]',
    sections: [
      {
        heading: '1. Multi-factor authentication on every account',
        body: [
          'MFA means that after the password you also approve a prompt on your phone. It is the single most effective control available to a small business, because a stolen password alone is no longer enough to get in.',
          'The usual excuse is that staff find it annoying. In practice, Microsoft Authenticator takes two seconds a day per person. The alternative — a fraudster sitting in your finance email for three weeks while you are none the wiser — is far more annoying.',
        ],
        bullets: [
          'Enforce MFA on all users, not just management.',
          'Do not allow SMS as the only method where an app is possible.',
          'Lock down the few global-admin accounts hardest.',
        ],
      },
      {
        heading: '2. Clean up who is an administrator',
        body: [
          'In most tenants we review, far more people hold admin rights than need them, and several belong to staff who left years ago. Every extra admin account is a second front door into your whole system.',
          'Give people the access their job needs and nothing more. When someone leaves, their account should be disabled the same day — not "when we get to it".',
        ],
        bullets: [
          'List every global admin and justify each one.',
          'Disable (do not just delete) leaver accounts, keeping the mailbox for 30 days.',
          'Use shared, company-owned accounts for roles, never a personal Gmail.',
        ],
      },
      {
        heading: '3. Backups you have actually restored',
        body: [
          'A backup you have never restored is a hope, not a plan. Ransomware and accidental deletion are both real; the difference between a bad week and a business-ending event is whether you have a recent, tested, offline copy.',
          'Follow the 3-2-1 idea: three copies, two media types, one off-site or immutable. Then test a restore at least a couple of times a year and write down how long it took.',
        ],
        bullets: [
          'Include the things people forget: mailboxes, SharePoint, the line-of-business database.',
          'Keep at least one copy the attacker cannot reach from the network.',
          'Time a real restore so you know your recovery window.',
        ],
      },
      {
        heading: '4. Patch the boring things',
        body: [
          'Most breaches still walk through unpatched software that had a fix available for months. Windows, browsers, and anything internet-facing should update automatically on a schedule that suits your trading hours.',
          'This is the least glamorous basic on the list and one of the highest-return. If you run an on-prem server, patching it is part of the job — and if it is Windows Server 2016, remember that free security updates end 12 January 2027.',
        ],
        bullets: [
          'Turn on automatic updates for Windows and browsers.',
          'Patch network gear and any remote-access software first.',
          'Plan the Server 2016 exit now, not in December 2026.',
        ],
      },
      {
        heading: '5. A written plan for the bad day',
        body: [
          'When something goes wrong, people freeze or improvise. A one-page runbook — who to call, what to isolate, when to notify the Information Regulator and affected people — turns a panic into a process.',
          'This is the IT-controls side of POPIA. It does not make you compliant on its own; POPIA is broader than IT and legal advice must come from an attorney. But it means you are not writing your response while the incident is still running.',
        ],
        bullets: [
          'Name one person to make the call and one backup.',
          'Keep your engineer’s number on paper, not only in the PC.',
          'Note the Information Regulator’s reporting expectations with your attorney.',
        ],
      },
    ],
    cta:
      'Want these checked properly? The IT & Security Health Review looks at your Microsoft 365 secure score, MFA gaps, admin accounts, backups and patch status, and gives you a one-page risk summary.',
  },
  {
    slug: 'windows-server-2016-before-2027',
    path: '/resources/windows-server-2016-before-2027/',
    title: 'What to do before 12 January 2027 if you run Windows Server 2016',
    description:
      'A practical timeline for owner-run businesses still running Windows Server 2016: what the support end-date really means, your four options, and what to do this quarter.',
    date: '2026-10-27',
    readMinutes: 8,
    intro:
      'Microsoft’s extended support for Windows Server 2016 ends on 12 January 2027. After that, no more free security updates. If you still have one in the office, this is the honest version of what to do about it. [REVIEW BEFORE PUBLISHING] <!-- VERIFY before publishing -->',
    sections: [
      {
        heading: 'What "end of support" actually means',
        body: [
          'Your server does not stop working on 13 January 2027. It keeps running exactly as it did. What stops is security patching. Every new vulnerability found after that date stays open on your machine forever.',
          'That matters most if the server is reachable from the internet — remote desktop, an old line-of-business web portal, a VPN endpoint. An unsupported, internet-facing server is the single most common way small businesses get owned.',
        ],
      },
      {
        heading: 'Find out whether you even have one',
        body: [
          'Plenty of businesses do not know. Look in the cupboard under the stairs or the corner of the office: a tall box with a fan, running all day, is usually a server. Check what Windows version it runs (Settings, or right-click This PC). If it says Server 2012/2016, or it is a Small Business Server, you have work to do.',
          'Also ask: what would break if it went offline for a day? That answer shapes your options more than the version number does.',
        ],
      },
      {
        heading: 'Your four options',
        body: [
          'There are only four honest paths. Most businesses land on one of the first two; the third is a bridge, not a destination; the fourth is for genuinely stuck legacy software.',
        ],
        bullets: [
          'Upgrade in place or side-by-side to Windows Server 2025 — same role, newer OS, more cost and a migration window.',
          'Replace the server’s job with Microsoft 365 — SharePoint/OneDrive for files, Teams for collaboration — often the cheapest long-term answer for file shares.',
          'Buy time with Extended Security Updates through Azure Arc — a stopgap while you migrate, not a permanent fix.',
          'Isolate a legacy server that cannot be upgraded — no internet exposure, hardened, offline backups, documented compensating controls, and a real plan for when the vendor never catches up.',
        ],
      },
      {
        heading: 'A realistic timeline',
        body: [
          'Migrations slip. The businesses that get into trouble are the ones that start in November 2026 and hope to cut over in a weekend. A file-share move sounds simple until you find the accounting package that needs a mapped drive and the scanner that only talks to the old server.',
        ],
        bullets: [
          'This quarter: get an Exit Assessment — an inventory of what the server actually does and who depends on it.',
          'Then: pick the option and schedule it with your trading calendar (avoid your busy season).',
          'Before the date: stand up the new service, migrate a pilot group, test restores.',
          'After the date: decommission or harden the old server; do not leave it running "just in case".',
        ],
      },
      {
        heading: 'What ESU through Azure Arc does and does not buy you',
        body: [
          'Extended Security Updates delivered via Azure Arc keep security patches flowing to Server 2016 after the cut-off, for a fee, for a limited window. It is a legitimate bridge if you have a migration scheduled and need the road to stay open.',
          'It is not a reason to defer the decision indefinitely. An ESU-patched but otherwise ageing server still has the same hardware risk, the same support-model risk and a fixed end date of its own.',
        ],
      },
    ],
    cta:
      'The Windows Server 2016 Exit page explains the fixed-fee Exit Assessment and how we schedule migrations honestly. If your server is internet-facing, start now.',
  },
];

export const resourceBySlug = (slug: string): Resource =>
  resources.find((r) => r.slug === slug) ?? resources[0];
