import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Sitemap is generated as a static endpoint at src/pages/sitemap.xml.ts.
// @astrojs/sitemap 3.2 uses an `astro:routes:resolved` hook that doesn't
// exist in Astro 4.x, which crashes the build. The manual endpoint gives
// us full control of changefreq/priority/lastmod per route anyway.

export default defineConfig({
  site: 'https://precifarm.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
