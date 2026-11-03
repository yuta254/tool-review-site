// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import sitemap from '@astrojs/sitemap';

// Give each review URL a <lastmod> from its frontmatter (updatedDate, else pubDate),
// so search engines can see which articles changed.
const reviewsDir = path.resolve('src/content/reviews');
const lastmodBySlug = new Map();
for (const file of fs.readdirSync(reviewsDir)) {
  if (!/\.mdx?$/.test(file)) continue;
  const head = fs.readFileSync(path.join(reviewsDir, file), 'utf8').split(/^---\s*$/m)[1] ?? '';
  const date = (head.match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m) ?? head.match(/^pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/m))?.[1];
  if (date) lastmodBySlug.set(file.replace(/\.mdx?$/, ''), date);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://tool-review-site.vercel.app',
  integrations: [
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/reviews\/([^/]+)\/$/)?.[1];
        const date = slug && lastmodBySlug.get(slug);
        if (date) item.lastmod = new Date(`${date}T00:00:00+09:00`).toISOString();
        return item;
      },
    }),
  ],
});
