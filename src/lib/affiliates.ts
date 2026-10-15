// A8.netの提携プログラム。広告リンクを変更するときは、ここ1箇所だけを直す。
// 記事側は <a data-pr="キー"> と <div class="affiliate-box" data-pr="キー"> だけを書き、
// href・rel・計測用ピクセルは scripts/sync-affiliates.mjs が書き込む(npm run affiliates:sync。build前に --check で照合)。
export interface Affiliate {
  /** 表示名(記事の文言確認用。出力には使わない) */
  name: string;
  /** A8.netの広告リンク識別子 */
  a8mat: string;
  /** 計測用1x1画像のホスト(A8が素材ごとに指定する) */
  imgHost: string;
}

export const AFFILIATES = {
  aiarty: {
    name: '画像高画質化AIツール【Aiarty Image Enhancer】',
    a8mat: '4BC0UI+EVUWI+428G+HVFKY',
    imgHost: 'www11',
  },
  videoproc: {
    name: '多機能動画処理ソフト【VideoProc】',
    a8mat: '4BC0UI+5I9D82+428G+C0YF6',
    imgHost: 'www16',
  },
  onamae: {
    name: 'お名前.com レンタルサーバー',
    a8mat: '4BC0UI+5Q0036+50+35CAFM',
    imgHost: 'www12',
  },
  plaud: {
    name: 'AI搭載ボイスレコーダー PLAUD NOTE',
    a8mat: '4BC0UI+5QLFOY+5J4W+5YZ76',
    imgHost: 'www11',
  },
  idbusiness: {
    name: '英文校正・英文翻訳「アイディービジネス」',
    a8mat: '4BC0UI+61WO6Q+2KSK+C0QPE',
    imgHost: 'www15',
  },
  creatorsjapan: {
    name: '動画編集スクール【クリエイターズジャパン】',
    a8mat: '4BC0UI+633JEA+4LJQ+614CY',
    imgHost: 'www19',
  },
} as const satisfies Record<string, Affiliate>;

export type AffiliateKey = keyof typeof AFFILIATES;

export const affiliateUrl = (key: AffiliateKey) =>
  `https://px.a8.net/svt/ejp?a8mat=${AFFILIATES[key].a8mat}`;

export const affiliatePixel = (key: AffiliateKey) =>
  `https://${AFFILIATES[key].imgHost}.a8.net/0.gif?a8mat=${AFFILIATES[key].a8mat}`;
