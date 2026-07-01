import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const reviews = await getCollection('reviews');
  return rss({
    title: 'AI Tool Lab',
    description: 'AIツール・ソフトウェアの実践レビューと比較サイト',
    site: context.site,
    items: reviews.map((review) => ({
      title: review.data.title,
      description: review.data.description,
      pubDate: review.data.pubDate,
      link: `/reviews/${review.id}/`,
    })),
  });
}
