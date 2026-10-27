// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Single source of truth for the public site URL — see src/config/site.ts.
// Change SITE_URL there when the domain moves (e.g. to a .co.za domain).
const SITE_URL = 'https://www.atswcape.co.uk';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
