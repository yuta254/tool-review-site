import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 新しい順。並べ替えないとフィードリーダー側で古い記事が先頭に来ることがある
  const reviews = (await getCollection('reviews')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: 'AI Tool Lab',
    description: 'AIツール・ソフトウェアの実践レビューと比較サイト',
    site: context.site,
    items: reviews.map((review) => ({
      title: review.data.title,
      description: review.data.description,
      pubDate: review.data.pubDate,
      categories: [review.data.category],
      link: `/reviews/${review.id}/`,
    })),
  });
}
