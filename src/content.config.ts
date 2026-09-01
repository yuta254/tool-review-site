import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    /** 検索結果用の短いタイトル。省略時は title をそのまま使う。
     *  日本語は35字程度で切られるため、ツール名を並べる比較記事などで使う。
     *  画面のH1は常に title のままにする(記事の中身と見出しをずらさないため)。 */
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    affiliateDisclosure: z.boolean().default(true),
  }),
});

export const collections = { reviews };
