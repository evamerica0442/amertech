export interface AreaConcern {
  heading: string;
  body: string;
}

export interface Area {
  slug: string;
  path: string;
  /** Short label used in nav/footer link lists. */
  navLabel: string;
  /** Page H1. */
  name: string;
  title: string;
  description: string;
  homeBase: boolean;
  intro: string;
  businessTypes: string[];
  concerns: AreaConcern[];
  serviceMix: string;
  websitesNote?: string;
}

/**
 * Area pages are generated from this data + one template.
 * All local-fact paragraphs are flagged [REVIEW: local facts] and listed in TODO.md.
 */
export const areas: Area[] = [
  {
    slug: 'grabouw-elgin-valley',
    path: '/areas/grabouw-elgin-valley/',
    navLabel: 'Grabouw & Elgin Valley',
    name: 'Grabouw & the Elgin Valley',
    title: 'IT support, Microsoft 365 & websites in Grabouw and the Elgin Valley',
    description:
      'Managed IT, Microsoft 365 and security support for Grabouw and Elgin Valley businesses — fruit and wine estates, farms, trades and professional practices. Remote-first, with a named engineer and fixed pricing.',
    homeBase: true,
    intro:
      'ATS is based in Grabouw, at the heart of the Elgin Valley. We work with fruit and wine estates, packing and processing operations, farms, trades and professional practices across the valley — supporting the businesses that keep this region running, in season and out of it.',
    businessTypes: [
      'Fruit and wine estates, packing and cold-storage operations',
      'Farms and agricultural supply businesses',
      'Accountants, attorneys and insurance brokers',
      'Medical, dental and veterinary practices',
      'Guest houses, restaurants and tasting-room hospitality',
      'Trades, retail and home-based professional services',
    ],
    concerns: [
      {
        heading: 'Seasonal staff on estates',
        body: 'Harvest and pack-season workers come and go, but the accounts, mailboxes and device access they leave behind often stay. We handle joiner/leaver access properly: Entra ID (Microsoft’s sign-in system) accounts created with the right licences, MFA enforced, and access revoked the day someone leaves — never a week later.',
      },
      {
        heading: 'Load-shedding and connectivity',
        body: 'Invoices, email and cloud systems have to survive stage 6. We size inverter and UPS coverage for your actual gear, put laptops and phones on Microsoft 365 and OneDrive so work is never trapped on one desktop, and make sure your backup schedule does not collide with generator changeover windows.',
      },
      {
        heading: 'Farm and estate Wi-Fi dead zones',
        body: 'Pack sheds, cold rooms and outbuildings rarely get decent signal. We design business Wi-Fi and point-to-point links that cover the places work actually happens, with guest access separated from your office network.',
      },
      {
        heading: 'POPIA-ready controls without a jargon wall',
        body: 'Estates and practices handle personal information about staff, tenants and customers. We set the IT side of that up properly — access reviews, MFA, encryption, backups and an audit trail — and put it in a one-page report your accountant or attorney can read. POPIA compliance itself still needs legal advice; we make the IT controls one less thing to worry about.',
      },
    ],
    serviceMix:
      'Most Grabouw and Elgin Valley clients combine fixed-price managed IT with Microsoft 365 administration and a Security & POPIA-ready IT review. Seasonal estates often add Intune device management for phones and tablets that move between pack sheds and offices.',
    websitesNote:
      'We also build and host simple, affordable websites for Grabouw and Elgin Valley businesses — from R350/month with the setup fee waived on a 12-month plan during our launch offer. See our website packages.',
  },
  {
    slug: 'stellenbosch',
    path: '/areas/stellenbosch/',
    navLabel: 'Stellenbosch',
    name: 'Stellenbosch',
    title: 'Managed IT & Microsoft 365 support for Stellenbosch businesses',
    description:
      'Fixed-price IT support, Microsoft 365 and security for Stellenbosch wine estates, professional firms and hospitality businesses — remote-first, with a named senior engineer.',
    homeBase: false,
    intro:
      'Stellenbosch businesses run a unusual mix: heritage wine estates with farm offices scattered across hectares, professional firms serving the winelands, and a hospitality scene that trades seven days a week. All of it depends on email, bookings and Wi-Fi that simply work.',
    businessTypes: [
      'Wine estates, cellars and tasting rooms',
      'Law firms, accountants and financial-services boutiques',
      'Boutique hotels, guest houses and restaurants',
      'Architects, design studios and agencies',
      'Private schools and early-childhood centres',
      'Tech startups and remote-working professionals',
    ],
    concerns: [
      {
        heading: 'Multi-site estates with farm offices',
        body: 'A cellar, a tasting room and a farm office three kilometres apart should not need three separate networks. We consolidate them under one Entra ID tenant with Intune-managed devices, so staff sign in once, files live in OneDrive/SharePoint and access is revoked centrally when someone moves on.',
      },
      {
        heading: 'Hospitality Wi-Fi that visitors judge you on',
        body: 'Guests rate Stellenbosch stays on Wi-Fi. We set up separate guest networks with captive-portal-style isolation, business-grade access points, and monitoring that tells you the router in the bar is down before your guests do.',
      },
      {
        heading: 'Professional firms and POPIA',
        body: 'Attorney and accounting practices hold client files that demand tight access control. We lock down document libraries with sensitivity-based access, MFA for every account, audit trails and tested backups — the IT-controls side of POPIA, documented in plain language. Legal advice on POPIA itself comes from your attorney.',
      },
      {
        heading: 'Old servers on old estates',
        body: 'A surprising number of winelands offices still run Windows Server 2016 for file shares and legacy wine-trade software. Extended support ends 12 January 2027 — our Exit Assessment tells you honestly whether to upgrade, move to Microsoft 365 file services, or buy time with Azure Arc ESU.',
      },
    ],
    serviceMix:
      'Stellenbosch clients typically take the Secure managed-IT tier with Microsoft 365 administration, plus a Security & POPIA-ready IT review for professional-firm clients. Hospitality venues often start with a network and Wi-Fi overhaul.',
  },
  {
    slug: 'somerset-west',
    path: '/areas/somerset-west/',
    navLabel: 'Somerset West',
    name: 'Somerset West',
    title: 'IT support & Microsoft 365 for Somerset West businesses',
    description:
      'Fixed-price managed IT, Microsoft 365 and security support for Somerset West medical and dental practices, professional firms and estate businesses. Remote-first with a named engineer.',
    homeBase: false,
    intro:
      'Somerset West is the southern-suburbs hub for professional and medical practices, home offices and estate-based businesses. Their IT needs are consistent: reliable email, secure patient and client records, and someone accountable who answers when something breaks.',
    businessTypes: [
      'Medical, dental and allied-health practices',
      'Attorneys, accountants and fiduciary practices',
      'Sectional-title body corporates and managing agents',
      'Retail, restaurants and professional centres',
      'Home-office professionals and small consultancies',
      'Property and estate-management agencies',
    ],
    concerns: [
      {
        heading: 'Practice records and access control',
        body: 'Medical and dental practices hold the most sensitive personal information in the area. We enforce MFA on every account, restrict practice-management system access to role and device, encrypt laptops with BitLocker and keep tested backups — so a stolen front-desk PC is an inconvenience, not a breach.',
      },
      {
        heading: 'Email that must never bounce',
        body: 'For legal and medical practices, missed email is missed revenue and risk. We monitor Microsoft 365 message flow, keep SPF, DKIM and DMARC aligned so your domain is not spoofed, and make sure referrals and instructions land in the right inbox.',
      },
      {
        heading: 'Body corporates and managing agents',
        body: 'Trustees change every AGM, and the email address and bank login should not leave with them. We set up neutral, company-owned Microsoft 365 accounts with shared mailboxes and proper MFA, so schemes are not held hostage to one trustee’s Gmail.',
      },
      {
        heading: 'Load-shedding-proof admin',
        body: 'Rooms must book, invoices must go out and phones must ring through stage 6. We put desks on laptops or VoIP with call flow to mobile, size UPS coverage for routers and servers, and move file shares to OneDrive so a power cut never strands the day’s work.',
      },
    ],
    serviceMix:
      'Somerset West work centres on managed IT with strong security baselines: MFA everywhere, endpoint protection, patching and backups, plus Microsoft 365 tenant administration. Practices add quarterly access reviews for POPIA-ready controls.',
  },
  {
    slug: 'paarl',
    path: '/areas/paarl/',
    navLabel: 'Paarl',
    name: 'Paarl',
    title: 'Managed IT, Microsoft 365 & support for Paarl businesses',
    description:
      'Fixed-price IT support and Microsoft 365 administration for Paarl farms, wine estates, trades and professional practices — remote-first, with a named senior engineer.',
    homeBase: false,
    intro:
      'Paarl’s economy runs on farms, wine estates, light industry and a dense network of trades and professional services. These businesses often outgrew their original IT years ago: one shared password, an ageing file server and email that belongs to whoever set it up.',
    businessTypes: [
      'Citrus and table-grape farms, packing and cold storage',
      'Wine cellars, estates and bulk-wine traders',
      'Light industrial, engineering and building-supply businesses',
      'Accountants, attorneys and insurance brokers',
      'Medical, dental and veterinary practices',
      'Hospitality, retail and farming-input suppliers',
    ],
    concerns: [
      {
        heading: 'Legacy file servers and Server 2016',
        body: 'Paarl still has many small server rooms running Windows Server 2016 for shared drives and legacy farm or wine-trade software. With extended support ending 12 January 2027, our fixed-fee Exit Assessment maps the realistic options — upgrade, move to Microsoft 365 file services, or Extended Security Updates via Azure Arc as a bridge.',
      },
      {
        heading: 'Shared logins and ex-employee accounts',
        body: 'The classic farm-office problem: one login for the packhouse PC, five people using it, and three former employees who still technically can get in. We move everyone to named Entra ID accounts with MFA, Intune-manage the devices and close the gaps audit by audit.',
      },
      {
        heading: 'Connectivity at outposts',
        body: 'Gatehouses, pumps and remote blocks need dependable connectivity for cameras, sensors and stock control. We design point-to-point Wi-Fi and LTE/5G failover links sized to the distance and the terrain, with alerting when a link drops.',
      },
      {
        heading: 'Seasonal workers, again',
        body: 'Harvest brings dozens of short-term contracts. We set up lightweight accounts with exactly the access each role needs, licence them in Microsoft 365 without over-buying, and switch everything off on the last day — which is also good POPIA practice.',
      },
    ],
    serviceMix:
      'Paarl clients commonly pair managed IT with a Windows Server 2016 exit plan and Microsoft 365 clean-up (email, Teams, SharePoint replacing the old file server). Trades and professional firms take Essential or Secure tiers.',
  },
  {
    slug: 'franschhoek',
    path: '/areas/franschhoek/',
    navLabel: 'Franschhoek',
    name: 'Franschhoek',
    title: 'IT support & websites for Franschhoek hospitality and estate businesses',
    description:
      'Fixed-price managed IT, Microsoft 365 and website support for Franschhoek restaurants, guest houses, wine estates and galleries — remote-first with a named engineer.',
    homeBase: false,
    intro:
      'Franschhoek trades on experience: restaurants, guest houses, wine estates and galleries where a booking system that is down on a Friday night is lost revenue. The businesses we support here are hospitality-led, brand-conscious and often run by hands-on owners without an IT person.',
    businessTypes: [
      'Restaurants, wine-pairing venues and tasting rooms',
      'Guest houses, boutique hotels and self-catering estates',
      'Wine estates and cellars with visitor programmes',
      'Galleries, craft markets and event venues',
      'Wedding and function venues',
      'Small retail and farm-stall operators',
    ],
    concerns: [
      {
        heading: 'Booking and POS systems that cannot go dark',
        body: 'Reservations, menus and payments depend on stable Wi-Fi and a router that does not choke when the dining room is full. We design business-grade Wi-Fi with separate VLANs for POS, staff and guests, LTE failover for the venue-critical systems, and monitoring that alerts us before your guests notice.',
      },
      {
        heading: 'Staff turnover and shared accounts',
        body: 'Hospitality churns staff constantly. Shared logins for booking platforms and social media are a security and POPIA problem waiting to happen. We move venues to named Microsoft 365 accounts with MFA, role-based access and instant revocation when a season ends.',
      },
      {
        heading: 'A brand that must look good online',
        body: 'Franschhoek sells an image. Our local-business website packages give venues a mobile-friendly site with a booking or enquiry system, Google Maps, click-to-call and a WhatsApp button — hosted and backed up for us, so you never think about the server.',
      },
      {
        heading: 'Load-shedding during service',
        body: 'When power flips, the POS, router and booking phone must stay up. We size small UPS/inverter setups for exactly those devices and put everything on the cloud so a power cut does not become a lost night.',
      },
    ],
    serviceMix:
      'Franschhoek work skews hospitality: managed IT with network/POS resilience, plus website packages with booking or enquiry systems for venues. Many start with a Health Check before peak season.',
  },
  {
    slug: 'cape-town-northern-suburbs',
    path: '/areas/cape-town-northern-suburbs/',
    navLabel: 'Cape Town northern suburbs',
    name: 'Cape Town northern suburbs',
    title: 'Managed IT & Microsoft 365 support for Durbanville, Bellville and Brackenfell businesses',
    description:
      'Fixed-price IT support, Microsoft 365 and security for businesses in Durbanville, Bellville, Brackenfell and the Cape Town northern suburbs — remote-first, with a named senior engineer.',
    homeBase: false,
    intro:
      'The northern suburbs — Durbanville, Bellville, Brackenfell, Kraaifontein and the surrounding business parks — are where many South African SMEs and professional practices actually sit. They want enterprise-grade Microsoft 365 and security without an enterprise support contract, and a supplier who answers the phone.',
    businessTypes: [
      'Business-park professional services (accounting, legal, insurance, broking)',
      'Medical and dental practices and clinics',
      'Property agencies and managing agents',
      'Light industrial, logistics and wholesale operations',
      'Schools, tuition centres and early-childhood providers',
      'Retail, food and service businesses in centre nodes',
    ],
    concerns: [
      {
        heading: 'Business-park practices with no IT person',
        body: 'Ten to thirty-staff firms usually have no internal IT at all — the office manager fixes the printer. We act as your outsourced IT department under a fixed monthly fee: helpdesk, patching, backups, Microsoft 365 administration and a quarterly plain-language report.',
      },
      {
        heading: 'M365 licences bought wrong',
        body: 'Most tenants in business parks over-pay: E3 licences where Business Standard does the job, orphaned mailboxes of staff who left two years ago, duplicate Teams and Skype licences. We do a licence review and usually cut spend while improving security.',
      },
      {
        heading: 'Phishing aimed at finance and reception',
        body: 'Invoice-redirect fraud starts with a phishing email to whoever opens the inbox first. We enforce MFA and conditional access, filter aggressively, run short phishing-awareness sessions and put a written breach-response runbook on the wall so nobody improvises during an incident.',
      },
      {
        heading: 'Agencies and schools with distributed people',
        body: 'Property agents live on their phones; schools need staff, learner and parent communication that is both usable and POPIA-safe. Intune-managed devices, conditional access and shared-but-governed Microsoft 365 groups keep everyone productive without data leaking out of the organisation.',
      },
    ],
    serviceMix:
      'Northern-suburbs clients mostly take full managed IT (Essential to Secure + Compliance tiers), Microsoft 365 tenant clean-ups and Security & POPIA-ready IT reviews. White-label MSP partnerships also operate here.',
  },
];

export const areaBySlug = (slug: string): Area =>
  areas.find((a) => a.slug === slug) ?? areas[0];
