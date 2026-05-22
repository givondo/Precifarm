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
  // 1200x630 OG image: navy-dark background, amber accent strip, brand logo mark + tagline.
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
    <!-- Orange flame -->
    <path d="M250,18 C262,4 280,0 284,12 C286,22 278,30 260,32 C252,30 246,24 250,18 Z" fill="#E37E32"/>
    <path d="M260,14 C268,8 275,10 273,15 C271,22 260,22 260,14 Z" fill="#F5C518" opacity="0.85"/>
  </g>

  <!-- PRECIFARM wordmark -->
  <text x="80" y="245" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-2">PRECIFARM</text>

  <!-- Renewable Energy tagline (italic, as in the logo) -->
  <text x="80" y="285" font-family="Helvetica, Arial, sans-serif" font-size="28" font-style="italic" font-weight="400" fill="rgba(255,255,255,0.85)" letter-spacing="1">Renewable Energy</text>

  <!-- Headline -->
  <text x="80" y="385" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="700" fill="#FFFFFF" letter-spacing="-1">Solar built for Kenya.</text>

  <!-- Subhead -->
  <text x="80" y="445" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="400" fill="rgba(255,255,255,0.75)">EPRA-licensed EPC and O&amp;M contractor.</text>
  <text x="80" y="485" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="400" fill="rgba(255,255,255,0.75)">Four packages on one platform.</text>

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
  await generateOgImage();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
