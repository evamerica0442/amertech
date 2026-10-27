import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public/brand/ats-logo.webp');
const out = (f) => join(root, 'public/brand', f);

// Source is a 1092x1092 navy sheet: ATS swoosh + "AMERICA TECHNOLOGY SERVICES"
// + tagline occupy the top; the old Websites/CRM/POS/Cloud icon row sits below.
// We crop the mark+wordmark for the header and the mark alone for the favicon,
// so the retired icon row never appears on the new site.

// 1. Header logo: mark + wordmark + tagline strip (no icon row).
await sharp(src)
  .extract({ left: 40, top: 120, width: 1012, height: 470 })
  .webp({ quality: 90 })
  .toFile(out('ats-header.webp'));

// 2. Full ATS swoosh crop (all three letters) for favicon / apple-touch / OG.
const mark = sharp(src).extract({ left: 70, top: 130, width: 960, height: 400 });

await mark.clone().resize(64, 64, { fit: 'contain', background: '#050D1F' }).png().toFile(join(root, 'public/favicon.png'));
await mark.clone().resize(180, 180, { fit: 'contain', background: '#050D1F' }).png().toFile(out('apple-touch-icon.png'));

// 3. Social preview: mark centred on navy, 1200x630.
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: '#050D1F' },
})
  .composite([{ input: await mark.clone().resize(560, 336, { fit: 'contain', background: '#050D1F' }).png().toBuffer(), gravity: 'center' }])
  .flatten({ background: '#050D1F' })
  .png()
  .toFile(out('og-cover.png'));

console.log('brand assets written');
