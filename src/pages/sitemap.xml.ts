import type { APIRoute } from 'astro';
import { packages } from '../data/packages';
import { cities } from '../data/cities';

const SITE = 'https://precifarm.com';

type Entry = {
  loc: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

const staticEntries: Entry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/products/', changefreq: 'monthly', priority: 0.9 },
  { loc: '/products/solar-irrigation/', changefreq: 'monthly', priority: 0.85 },
  { loc: '/how-we-work/', changefreq: 'monthly', priority: 0.8 },
  { loc: '/about/', changefreq: 'monthly', priority: 0.7 },
  { loc: '/careers/', changefreq: 'weekly', priority: 0.7 },
  { loc: '/training/', changefreq: 'weekly', priority: 0.8 },
  { loc: '/financing/', changefreq: 'monthly', priority: 0.8 },
  { loc: '/cities/', changefreq: 'monthly', priority: 0.8 },
  { loc: '/contact/', changefreq: 'yearly', priority: 0.9 },
  { loc: '/blog/', changefreq: 'monthly', priority: 0.5 },
  { loc: '/privacy/', changefreq: 'yearly', priority: 0.3 },
  { loc: '/terms/', changefreq: 'yearly', priority: 0.3 },
];

const packageEntries: Entry[] = packages.map((pkg) => ({
  loc: `/products/${pkg.slug}/`,
  changefreq: 'monthly' as const,
  priority: pkg.isHighlighted ? 0.9 : 0.85,
}));

const cityEntries: Entry[] = cities.map((city) => ({
  loc: `/cities/${city.slug}/`,
  changefreq: 'monthly' as const,
  priority: city.role === 'HQ' ? 0.85 : 0.75,
}));

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const all = [...staticEntries, ...packageEntries, ...cityEntries];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (e) => `  <url>
    <loc>${SITE}${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(2)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
