import { services } from './services';
import { areas } from './areas';
import { resources } from './resources';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children: NavItem[];
}

export const servicesNav: NavGroup = {
  label: 'Services',
  children: services.map((s) => ({ label: s.name, href: s.path, description: s.short })),
};

export const areasNav: NavGroup = {
  label: 'Areas',
  href: '/areas/',
  children: areas.map((a) => ({ label: a.navLabel, href: a.path })),
};

/** Primary header navigation (excluding the "Get a Health Check" button). */
export const mainNav: (NavItem | NavGroup)[] = [
  servicesNav,
  { label: 'Websites', href: '/websites/' },
  { label: 'IT & Security Health Check', href: '/health-check/' },
  areasNav,
  { label: 'For MSPs', href: '/msp-partners/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const isGroup = (item: NavItem | NavGroup): item is NavGroup =>
  'children' in item && Array.isArray(item.children);

/** Footer link columns. */
export const footerColumns: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Services',
    items: [
      ...services.map((s) => ({ label: s.name, href: s.path })),
      { label: 'IT & Security Health Check', href: '/health-check/' },
    ],
  },
  {
    heading: 'Websites',
    items: [
      { label: 'Website packages', href: '/websites/' },
      { label: 'Industries we support', href: '/industries/' },
    ],
  },
  {
    heading: 'Areas',
    items: [{ label: 'All areas', href: '/areas/' }, ...areas.map((a) => ({ label: a.navLabel, href: a.path }))],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'All guides', href: '/resources/' },
      ...resources.map((r) => ({ label: r.title, href: r.path })),
      { label: 'For MSPs (white-label)', href: '/msp-partners/' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About ATS', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/legal/privacy/' },
      { label: 'Terms of Service', href: '/legal/terms/' },
      { label: 'Cookie notice', href: '/legal/cookies/' },
      { label: 'PAIA manual', href: '/legal/paia/' },
    ],
  },
];
