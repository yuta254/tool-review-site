// カテゴリ名 -> URLスラッグ。2026-11-22 に28カテゴリを12に統合した(旧スラッグは public/_redirects で301)。
// 各カテゴリの1行の説明・選び方の手引き・比較表は src/content/categories/<slug>.md にある。
// 新しいカテゴリを増やしたら、ここに1行と、src/content/categories/ に1ファイルを足す。
export const CATEGORY_SLUGS: Record<string, string> = {
  '議事録・文字起こし': 'meeting-notes',
  '動画編集・生成': 'video',
  '画像生成・編集': 'image',
  '開発ツール': 'dev-tools',
  'サイト・アプリ制作': 'site-builder',
  'ライティング・翻訳': 'writing',
  'リサーチ・論文検索': 'research',
  '業務効率化・タスク管理': 'productivity',
  '音声・音楽': 'voice-ai',
  'AIチャット・エージェント': 'ai-chat',
  'デザイン・資料作成': 'design',
  'ガイド': 'guide',
};

// スラッグが未定義のカテゴリでもURLが壊れないようにフォールバックする
export function categorySlug(name: string): string {
  return CATEGORY_SLUGS[name] ?? encodeURIComponent(name);
}

export function categoryPath(name: string): string {
  return `/categories/${categorySlug(name)}/`;
}
