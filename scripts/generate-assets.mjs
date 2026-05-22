// Generate PNG raster assets from SVG sources for favicons and Open Graph image.
// Run with: node scripts/generate-assets.mjs
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');

async function svgToPng(svgBuf, size, outPath) {
  const png = await sharp(svgBuf).resize(size, size, { fit: 'contain' }).png().toBuffer();
  await writeFile(outPath, png);
  return outPath;
}

async function generateFavicons() {
  const svg = await readFile(resolve(publicDir, 'favicon.svg'));

  // apple-touch-icon (180x180)
  await svgToPng(svg, 180, resolve(publicDir, 'apple-touch-icon.png'));

  // favicon.ico fallback (32x32 PNG renamed). Browsers accept PNG-in-ICO.
  const ico = await sharp(svg).resize(32, 32, { fit: 'contain' }).png().toBuffer();
  await writeFile(resolve(publicDir, 'favicon.ico'), ico);

  // android/PWA-friendly sizes
  await svgToPng(svg, 192, resolve(publicDir, 'icon-192.png'));
  await svgToPng(svg, 512, resolve(publicDir, 'icon-512.png'));

  console.log('  favicons generated');
}

async function generateOgImage() {
  // 1200x630 OG image: navy-dark background, amber accent strip, brand wordmark + tagline.
  const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F2832"/>
      <stop offset="100%" stop-color="#1F4E5F"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Amber accent strip -->
  <rect x="0" y="0" width="20" height="630" fill="#C99800"/>

  <!-- Subtle solar-panel grid background pattern -->
  <g opacity="0.08" stroke="#F5C518" stroke-width="1.5" fill="none">
    <rect x="780" y="80" width="320" height="180" rx="4"/>
    <line x1="860" y1="80" x2="860" y2="260"/>
    <line x1="940" y1="80" x2="940" y2="260"/>
    <line x1="1020" y1="80" x2="1020" y2="260"/>
    <line x1="780" y1="170" x2="1100" y2="170"/>
  </g>

  <!-- Logo mark -->
  <g transform="translate(80, 220)">
    <rect width="22" height="22" rx="3" fill="#C99800"/>
  </g>

  <!-- Wordmark -->
  <text x="120" y="245" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="700" fill="#FFFFFF" letter-spacing="2">PRECIFARM</text>

  <!-- Tagline -->
  <text x="80" y="335" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#FFFFFF" letter-spacing="-1">Solar built for Kenya.</text>

  <!-- Subhead -->
  <text x="80" y="405" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="rgba(255,255,255,0.75)">EPRA-licensed EPC and O&amp;M contractor.</text>
  <text x="80" y="445" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="rgba(255,255,255,0.75)">Four packages on one platform.</text>

  <!-- Bottom strip with proof points -->
  <g transform="translate(80, 530)">
    <rect width="14" height="14" rx="7" fill="#C99800"/>
    <text x="26" y="12" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">Installed in 1 to 3 days</text>

    <g transform="translate(330, 0)">
      <rect width="14" height="14" rx="7" fill="#C99800"/>
      <text x="26" y="12" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">Five-year service</text>
    </g>

    <g transform="translate(620, 0)">
      <rect width="14" height="14" rx="7" fill="#C99800"/>
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
  await generateOgImage();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
