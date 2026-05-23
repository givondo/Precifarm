// Render /catalogue/ from the running Astro dev or preview server to a PDF.
//
// Usage:
//   1. `npm run build && npm run preview` (in one terminal)
//   2. `npm run catalogue` (in another)
//
// Output: public/docs/precifarm-catalogue.pdf
//
// The catalogue page is a print-optimised standalone Astro page with no
// nav/header/footer chrome. CSS @page rules and explicit page-break-after
// sections produce a clean ten-page A4 layout.

import puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUTPUT_DIR = resolve(ROOT, 'public', 'docs');
const OUTPUT_FILE = resolve(OUTPUT_DIR, 'precifarm-catalogue.pdf');

// Default to a freshly-built preview server on Astro's default port.
const URL = process.env.CATALOGUE_URL ?? 'http://localhost:4321/catalogue/';

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok || res.status < 500) return true;
    } catch (e) {
      // Server not up yet, retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not respond within ${timeoutMs}ms. Run \`npm run preview\` in another terminal first.`);
}

async function main() {
  console.log(`[catalogue] Target URL: ${URL}`);
  console.log('[catalogue] Waiting for server...');
  await waitForServer(URL);

  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  console.log('[catalogue] Launching headless Chrome...');
  // Prefer a system Chrome/Edge via env var. Falls back to puppeteer's bundled
  // Chromium (which can fail to extract on some Windows setups).
  const candidatePaths = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  ].filter(Boolean);
  const { existsSync: exists } = await import('node:fs');
  const executablePath = candidatePaths.find((p) => exists(p));
  if (executablePath) console.log(`[catalogue] Using system browser: ${executablePath}`);
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath,
  });

  try {
    const page = await browser.newPage();
    // Force print media so @media print rules engage and Inter web font has time to load.
    await page.emulateMediaType('print');
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait an extra beat for Google Fonts and any in-page images to settle.
    await new Promise((r) => setTimeout(r, 1500));

    console.log('[catalogue] Rendering PDF...');
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`[catalogue] Wrote ${OUTPUT_FILE}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('[catalogue] FAILED:', err.message);
  process.exit(1);
});
