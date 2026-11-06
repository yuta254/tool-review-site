// カテゴリごとの色とアイコン(見た目だけの設定)。
// 28カテゴリを用途の近いもの同士で11の系統にまとめ、系統ごとに色と図形を1つずつ割り当てる。
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
  '開発ツール': 'dev',
  '画像生成AI': 'image',
  '画像編集AI': 'image',
  '業務効率化': 'work',
  '業務自動化': 'work',
  'タスク管理AI': 'work',
  'プロジェクト管理AI': 'work',
  'メール効率化': 'work',
  'リサーチ': 'research',
  '論文検索AI': 'research',
  '音声AI': 'voice',
  '音声読み上げAI': 'voice',
  '議事録AI': 'voice',
  '動画編集AI': 'video',
  '動画生成AI': 'video',
  'AIアバター動画': 'video',
  'AIチャット': 'ai',
  'AIブラウザ': 'ai',
  'AIエージェント': 'ai',
  '音楽生成AI': 'music',
  'ライティング支援': 'writing',
  '翻訳AI': 'writing',
  'マーケティング': 'writing',
  '資料作成AI': 'writing',
  'UI生成AI': 'design',
  'サイト制作AI': 'design',
  'デザインツール': 'design',
  'ガイド': 'guide',
};

export function categoryStyle(name: string): Group {
  return GROUPS[GROUP_OF[name] ?? 'guide'];
}
