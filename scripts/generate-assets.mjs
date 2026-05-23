// Generate PNG raster assets from SVG and brand sources for favicons and
// Open Graph image. Run with: node scripts/generate-assets.mjs
//
// Favicons are now generated from a square-cropped version of the brand
// PNG so they reflect the actual brand mark (panel + flame) rather than
// the earlier simple SVG. The brand wordmark is dropped from favicon
// sizes (it would be illegible at 16/32 px) and only the visual mark
// remains.
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

// Build a clean square favicon source from a hand-crafted SVG of the
// brand mark (panel + flame). The brand PNG is a wide horizontal logo
// with the wordmark; that would be illegible at 16/32 px favicon sizes.
// The SVG below is tuned to render the mark clearly at the smallest
// favicon sizes while staying consistent with the brand colours.
async function buildFaviconSource() {
  const markSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#FFFFFF"/>
  <g>
    <!-- Solar panel in slight perspective -->
    <path d="M10,22 L54,22 L50,46 L14,46 Z" fill="#1F4E5F" stroke="#0F2832" stroke-width="0.8" stroke-linejoin="round"/>
    <line x1="21" y1="22" x2="19" y2="46" stroke="#0F2832" stroke-width="0.5" opacity="0.55"/>
    <line x1="32" y1="22" x2="30" y2="46" stroke="#0F2832" stroke-width="0.5" opacity="0.55"/>
    <line x1="43" y1="22" x2="41" y2="46" stroke="#0F2832" stroke-width="0.5" opacity="0.55"/>
    <line x1="12" y1="30" x2="52" y2="30" stroke="#0F2832" stroke-width="0.5" opacity="0.55"/>
    <line x1="13" y1="38" x2="51" y2="38" stroke="#0F2832" stroke-width="0.5" opacity="0.55"/>
    <!-- Subtle top highlight -->
    <path d="M10,22 L54,22 L53,24 L11,24 Z" fill="#2A6878" opacity="0.5"/>
  </g>
  <!-- Orange flame, top-right of panel -->
  <g>
    <path d="M45,20 C49,12 56,10 57,16 C58,22 53,26 47,26 C44,25 42,22 45,20 Z" fill="#E37E32"/>
    <path d="M48,17 C51,13 55,15 53,19 C51,23 47,23 48,17 Z" fill="#F5C518" opacity="0.85"/>
  </g>
</svg>`;
  return Buffer.from(markSvg);
}

async function svgToPng(svgBuf, size, outPath) {
  const png = await sharp(svgBuf).resize(size, size, { fit: 'contain' }).png().toBuffer();
  await writeFile(outPath, png);
  return outPath;
}

async function generateFavicons() {
  const markSvg = await buildFaviconSource();

  // Also overwrite the favicon.svg in /public/ with this synchronised source
  await writeFile(resolve(publicDir, 'favicon.svg'), markSvg);

  // PNG raster sizes
  await svgToPng(markSvg, 16, resolve(publicDir, 'favicon-16.png'));
  await svgToPng(markSvg, 32, resolve(publicDir, 'favicon-32.png'));
  await svgToPng(markSvg, 180, resolve(publicDir, 'apple-touch-icon.png'));
  await svgToPng(markSvg, 192, resolve(publicDir, 'icon-192.png'));
  await svgToPng(markSvg, 512, resolve(publicDir, 'icon-512.png'));

  // favicon.ico (PNG-in-ICO, 32x32). Browsers accept PNG content with .ico extension.
  const ico = await sharp(markSvg).resize(32, 32, { fit: 'contain' }).png().toBuffer();
  await writeFile(resolve(publicDir, 'favicon.ico'), ico);

  console.log('  favicons generated (favicon.svg, favicon-16/32.png, favicon.ico, apple-touch-icon.png, icon-192/512.png)');
}

async function generateWebManifest() {
  const manifest = {
    name: 'Precifarm',
    short_name: 'Precifarm',
    description: 'Reliable solar energy storage built to scale with your future energy needs.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#FFFFFF',
    theme_color: '#1F4E5F',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
    lang: 'en-KE',
    dir: 'ltr',
    orientation: 'portrait-primary',
  };
  await writeFile(resolve(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('  site.webmanifest generated');
}

async function generateOgImage() {
  // 1200x630 OG image: navy-dark background, orange accent strip, brand logo mark + tagline.
  const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F2832"/>
      <stop offset="100%" stop-color="#1F4E5F"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Orange accent strip (matches logo flame) -->
  <rect x="0" y="0" width="20" height="630" fill="#E37E32"/>

  <!-- Decorative solar-panel mark mirroring the brand logo, large in upper-right -->
  <g transform="translate(820, 90)" opacity="0.95">
    <path d="M20,20 L280,20 L260,150 L40,150 Z" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2" stroke-linejoin="round"/>
    <line x1="72" y1="20" x2="64" y2="150" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <line x1="124" y1="20" x2="113" y2="150" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <line x1="176" y1="20" x2="162" y2="150" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <line x1="228" y1="20" x2="211" y2="150" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <line x1="35" y1="63" x2="265" y2="63" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <line x1="42" y1="106" x2="258" y2="106" stroke="#1F4E5F" stroke-width="1" opacity="0.5"/>
    <path d="M250,18 C262,4 280,0 284,12 C286,22 278,30 260,32 C252,30 246,24 250,18 Z" fill="#E37E32"/>
    <path d="M260,14 C268,8 275,10 273,15 C271,22 260,22 260,14 Z" fill="#F5C518" opacity="0.85"/>
  </g>

  <!-- PRECIFARM wordmark -->
  <text x="80" y="245" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-2">PRECIFARM</text>

  <!-- Renewable Energy tagline (italic, as in the logo) -->
  <text x="80" y="285" font-family="Helvetica, Arial, sans-serif" font-size="28" font-style="italic" font-weight="400" fill="rgba(255,255,255,0.85)" letter-spacing="1">Renewable Energy</text>

  <!-- Headline -->
  <text x="80" y="385" font-family="Helvetica, Arial, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF" letter-spacing="-1">Solar energy storage built to scale</text>
  <text x="80" y="435" font-family="Helvetica, Arial, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF" letter-spacing="-1">with your future energy needs.</text>

  <!-- Subhead -->
  <text x="80" y="495" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.75)">EPRA-licensed EPC and O&amp;M contractor. Built for Kenya.</text>

  <!-- Bottom strip with proof points -->
  <g transform="translate(80, 555)">
    <rect width="14" height="14" rx="7" fill="#E37E32"/>
    <text x="26" y="12" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">Installed in 1 to 3 days</text>

    <g transform="translate(330, 0)">
      <rect width="14" height="14" rx="7" fill="#E37E32"/>
      <text x="26" y="12" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">Five-year service</text>
    </g>

    <g transform="translate(620, 0)">
      <rect width="14" height="14" rx="7" fill="#E37E32"/>
      <text x="26" y="12" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">EPRA-licensed</text>
    </g>
  </g>
</svg>`;

  const buf = await sharp(Buffer.from(ogSvg)).png().toBuffer();
  await writeFile(resolve(publicDir, 'og-default.png'), buf);
  console.log('  og-default.png generated');
}

async function main() {
  console.log('Generating brand assets...');
  await generateFavicons();
  await generateWebManifest();
  await generateOgImage();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
