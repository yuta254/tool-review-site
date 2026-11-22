// カテゴリごとの色とアイコン(見た目だけの設定)。
// 12カテゴリ(2026-11-22 に28から統合)に、11の系統の色と図形を割り当てる(サイト・アプリ制作とデザインは同じ系統)。
// 色はすべて白い文字を載せてコントラスト比4.5以上(WCAG AA)になるものを選んでいる。
// 新しいカテゴリを増やしたら GROUP_OF に1行足す(足さなければ「その他」の灰色になる)。

export type IconName =
  | 'code' | 'image' | 'check' | 'search' | 'mic' | 'play'
  | 'spark' | 'music' | 'pen' | 'layout' | 'book';

interface Group {
  color: string;
  icon: IconName;
}

const GROUPS: Record<string, Group> = {
  dev:      { color: '#1d4ed8', icon: 'code' },
  image:    { color: '#be185d', icon: 'image' },
  work:     { color: '#047857', icon: 'check' },
  research: { color: '#4338ca', icon: 'search' },
  voice:    { color: '#0e7490', icon: 'mic' },
  video:    { color: '#b91c1c', icon: 'play' },
  ai:       { color: '#6d28d9', icon: 'spark' },
  music:    { color: '#a21caf', icon: 'music' },
  writing:  { color: '#a16207', icon: 'pen' },
  design:   { color: '#0369a1', icon: 'layout' },
  guide:    { color: '#475569', icon: 'book' },
};

const GROUP_OF: Record<string, keyof typeof GROUPS> = {
  '議事録・文字起こし': 'voice',
  '動画編集・生成': 'video',
  '画像生成・編集': 'image',
  '開発ツール': 'dev',
  'サイト・アプリ制作': 'design',
  'ライティング・翻訳': 'writing',
  'リサーチ・論文検索': 'research',
  '業務効率化・タスク管理': 'work',
  '音声・音楽': 'music',
  'AIチャット・エージェント': 'ai',
  'デザイン・資料作成': 'design',
  'ガイド': 'guide',
};

export function categoryStyle(name: string): Group {
  return GROUPS[GROUP_OF[name] ?? 'guide'];
}
