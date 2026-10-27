export interface Faq {
  q: string;
  a: string;
}

/** FAQs keyed by page. Rendered with <details>/<summary> and FAQPage JSON-LD. */
export const faqs: Record<string, Faq[]> = {
  home: [
    {
      q: 'Do you only work with businesses in Grabouw?',
      a: 'No. We are fully remote and serve clients anywhere in South Africa. Grabouw is home base, and we do on-site visits by arrangement in the Western Cape.',
    },
    {
      q: 'What does "named engineer" actually mean?',
      a: 'You deal with one senior person — the founder, with 18+ years in IT — not a call queue or a rotating helpdesk. That is the whole point of a small, accountable supplier.',
    },
    {
      q: 'How does pricing work?',
      a: 'Fixed monthly price for managed IT, agreed before we start. No hourly surprises. Website packages start at R350/month. We will quote a fixed price for one-off work after the Health Check.',
    },
    {
      q: 'Are you a Microsoft Partner?',
      a: 'We are not claiming partner or CSP status here. We hold AWS and Azure technical certifications and work within your existing licensing. Ask us about your licensing route and we will be straight with you.',
    },
    {
      q: 'Can you help with POPIA?',
      a: 'We handle the IT-controls side of POPIA — MFA, access reviews, backups, encryption, audit trails — and document them for you. POPIA compliance is broader than IT and legal advice must come from an attorney.',
    },
  ],
  'managed-it': [
    {
      q: 'What is included in managed IT?',
      a: 'Remote helpdesk for computers, email and network; Microsoft 365 administration; patching; endpoint protection; backups with restore tests; and a plain-language report. Higher tiers add MFA/conditional access, Intune, access reviews and a breach-response runbook.',
    },
    {
      q: 'How fast will you respond?',
      a: 'We do not publish a response-time guarantee we have not tested against our own delivery. Response approach and hours are confirmed with you in the agreement. [CONFIRM response approach and hours]',
    },
    {
      q: 'Do I have to move all my systems to the cloud?',
      a: 'No. We support hybrid setups. Many clients keep a line-of-business server and move email, files and identity to Microsoft 365. We recommend what fits, not what is trendy.',
    },
    {
      q: 'What size business is this for?',
      a: 'Owner-run businesses, roughly 2–50 staff, with no internal IT person. If you are much larger or have a full IT team, we may not be the right fit.',
    },
    {
      q: 'Can I cancel?',
      a: 'Managed agreements run on a fixed term with 30 days’ notice to cancel after that. We would rather earn the renewal than trap you.',
    },
  ],
  'm365': [
    {
      q: 'Can you move our email from an old host?',
      a: 'Yes. Migrations from cPanel/POP email, Google Workspace and older Exchange are core work. We plan mail flow so nothing bounces during the switch, and clean up orphaned mailboxes afterwards.',
    },
    {
      q: 'What is Intune and do I need it?',
      a: 'Intune is Microsoft’s device-management tool. You need it if staff use laptops or phones for work and you want to enforce encryption, lock access when someone leaves and wipe a lost device without wiping personal data. For a few desktops in one office, you may not.',
    },
    {
      q: 'Will you tell us if we are over-paying for licences?',
      a: 'Usually yes, and it is often the quickest win. We review what you have against what you use — Business Standard versus E3, orphaned accounts, duplicate tools — and right-size it.',
    },
    {
      q: 'What is Entra ID?',
      a: 'Entra ID is Microsoft’s identity and access system (it used to be called Azure AD). It is where user accounts, MFA and conditional access live. Getting it right is the foundation of a secure Microsoft 365 tenant.',
    },
    {
      q: 'Are you a Microsoft CSP?',
      a: 'We are not claiming CSP status. We work within your existing licensing relationship or advise on a route. [CONFIRM licensing route]',
    },
  ],
  'security': [
    {
      q: 'Does working with you make us POPIA compliant?',
      a: 'No, and anyone who promises that is overselling. POPIA is broader than IT. We implement and document the IT controls that support your compliance; legal advice comes from an attorney.',
    },
    {
      q: 'What is MFA and why insist on it?',
      a: 'Multi-factor authentication means a password plus a second check on your phone. It is the single most effective control against account takeover, because a stolen password alone is no longer enough.',
    },
    {
      q: 'What happens if we are breached?',
      a: 'You get a written runbook before it happens: who calls whom, what to isolate, how to preserve evidence, and when to notify the Information Regulator and affected people. We help execute it, we do not improvise during an incident.',
    },
    {
      q: 'Do you do penetration testing?',
      a: 'Not as a headline offer. We do configuration reviews, access reviews and a one-page risk summary. If you need a formal pen test we will say so and can work alongside a specialist.',
    },
  ],
  'server2016': [
    {
      q: 'What actually happens on 12 January 2027?',
      a: 'Microsoft extended support for Windows Server 2016 ends. After that there are no free security updates, so the server becomes progressively riskier to run, especially if it is reachable from the internet.',
    },
    {
      q: 'Can we just buy Extended Security Updates?',
      a: 'ESU through Azure Arc can buy time, but it is a stopgap, not a plan. It suits a migration you are scheduling realistically, not a server you intend to run indefinitely without patching.',
    },
    {
      q: 'Do we have to upgrade to Server 2025?',
      a: 'Not always. Many file shares and applications are better replaced by Microsoft 365 (SharePoint/OneDrive) or a supported cloud instance than by a new on-prem server. The Exit Assessment tells you which option is honest for your software.',
    },
    {
      q: 'Our software only runs on Server 2016. Now what?',
      a: 'Then we isolate it: no internet exposure, hardened configuration, tested offline backups and a documented compensating control set, with a real plan for when the vendor catches up or does not.',
    },
  ],
  'health-check': [
    {
      q: 'What is a Health Check?',
      a: 'A fixed-price review of your current setup: Microsoft 365 secure score, MFA gaps, admin accounts, backups, patch status and device management. You get a one-page risk summary and a prioritised list of what to fix.',
    },
    {
      q: 'How long does it take?',
      a: 'Usually a few days from access to report, scheduled around your business. It is remote; we do not need to touch your servers physically.',
    },
    {
      q: 'Is there an obligation to continue?',
      a: 'No. The report is yours to keep. Most clients continue because the report makes the next steps obvious, not because we pressure them.',
    },
    {
      q: 'How much does it cost?',
      a: 'Fixed-price, from R[CONFIRM]. We confirm the price before any work starts. [CONFIRM Health Check price]',
    },
  ],
  websites: [
    {
      q: 'Who owns the website and the domain?',
      a: 'You do. Your content and your .co.za domain are yours. If you ever move on, you take them with you.',
    },
    {
      q: 'How does the launch offer work?',
      a: 'During the launch offer, the first 5 clients get the setup fee waived (R0) on a 12-month plan in exchange for a short testimonial. After that, normal setup fees apply.',
    },
    {
      q: 'What if I need more edits than my package allows?',
      a: `Extra edits are R250 each and extra pages R600, so you can top up without changing package. Most small businesses stay within their monthly allowance.`,
    },
    {
      q: 'Will my site work during load-shedding?',
      a: 'Yes. Your site is cloud hosted, so it stays online when your office has no power. Visitors never see an outage.',
    },
    {
      q: 'Do you do e-commerce?',
      a: 'The Growth package supports online booking or an enquiry system and a simple customer list. Full online stores with payment gateways are quoted separately — ask us before assuming.',
    },
  ],
  msp: [
    {
      q: 'Are you a competing MSP?',
      a: 'No. We work white-label under your brand as an escalation bench. Your clients never see our name unless you want them to.',
    },
    {
      q: 'Which tools do you work in?',
      a: 'We work inside your own PSA — for example ConnectWise — and your documentation and ticketing standards. We adapt to your stack rather than pushing ours.',
    },
    {
      q: 'What are your time-zone hours?',
      a: 'We are based in South Africa (SAST, UTC+2), which overlaps well with US mornings/early afternoons, UK business hours and Australian early mornings. [CONFIRM hours]',
    },
    {
      q: 'How do we start?',
      a: 'A free 5-hour pilot on real tickets, under a mutual NDA and a clear SLA. Low risk, and you judge the work before committing.',
    },
  ],
  areas: [
    {
      q: 'Do you work with businesses outside these towns?',
      a: 'Yes — we are remote-first and serve clients anywhere in South Africa. These area pages exist because we know these regions well, not because we limit ourselves to them.',
    },
    {
      q: 'Will you come on-site?',
      a: 'On-site visits are by arrangement in the Western Cape. Most work is done remotely. [CONFIRM on-site arrangements]',
    },
  ],
  contact: [
    {
      q: 'How quickly will you reply?',
      a: 'We reply to WhatsApp and email on business days. [CONFIRM business hours] For anything urgent, WhatsApp is fastest.',
    },
    {
      q: 'What should I include in my message?',
      a: 'Roughly how many staff, what your current setup is (Microsoft 365? on-prem server? nothing?), and the problem that prompted you to reach out. That is enough for a first reply.',
    },
  ],
  about: [
    {
      q: 'Why "America Technology Services"?',
      a: 'It is the trading name the business was founded under. [CONFIRM naming story if you want it published] We are a South African company based in Grabouw, Western Cape.',
    },
    {
      q: 'Is a one-person company enough for our needs?',
      a: 'For owner-run businesses of roughly 2–50 staff, a senior engineer who does the work himself is often better than a large firm that assigns you a junior. If you need 24/7 on-site cover, we are honest that we are not the right fit.',
    },
  ],
};
