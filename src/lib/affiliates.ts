// A8.netの提携プログラム。広告リンクを変更するときは、ここ1箇所だけを直す。
// 記事側は <a data-pr="キー"> と <div class="affiliate-box" data-pr="キー"> だけを書き、
// href・rel・リンクの文言・計測用ピクセルは scripts/sync-affiliates.mjs が書き込む(npm run affiliates:sync。build前に --check で照合)。
//
// 【規約】A8.net の禁止事項「広告素材の改変」: テキスト広告の文言の変更、広告コードからリンク部分のみを使うことは禁止
// (https://www.a8.net/compliance/prohibited-matter.php、2026-11-06 確認)。
// そのため、リンクの文言は A8 の素材の文言(text)と1文字も違えない。計測用の画像はリンクの直後に置く。
// 文言を変えたい場合は、その案件で文言の変更が認められているか(商品リンク・自由テキスト素材があるか)を先に確かめる。
export interface Affiliate {
  /** 表示名(記事の文言確認用。出力には使わない) */
  name: string;
  /** A8.netの広告リンク識別子 */
  a8mat: string;
  /** 計測用1x1画像のホスト(A8の広告コードに出るもの) */
  imgHost: string;
  /** A8 のテキスト素材の文言そのもの(リンクの文字はこれに揃える。素材IDも併記) */
  text: string;
}

export const AFFILIATES = {
  aiarty: {
    name: '画像高画質化AIツール【Aiarty Image Enhancer】',
    a8mat: '4BC0UI+EVUWI+428G+HVFKY',
    imgHost: 'www11',
    text: '【Aiarty Image Enhancer】', // 素材ID 002
  },
  videoproc: {
    name: '多機能動画処理ソフト【VideoProc】',
    a8mat: '4BC0UI+5I9D82+428G+C0YF6',
    imgHost: 'www16',
    text: '【VideoProc】', // 素材ID 020
  },
  onamae: {
    name: 'お名前.com レンタルサーバー',
    a8mat: '4BC0UI+5Q0036+50+35CAFM',
    imgHost: 'www12',
    text: 'お名前.com レンタルサーバー', // 素材ID 037
  },
  plaud: {
    name: 'AI搭載ボイスレコーダー PLAUD NOTE',
    a8mat: '4BC0UI+5QLFOY+5J4W+5YZ76',
    imgHost: 'www11',
    text: 'PLAUD NOTE', // 素材ID 003
  },
  idbusiness: {
    name: '英文校正・英文翻訳「アイディービジネス」',
    a8mat: '4BC0UI+61WO6Q+2KSK+BWVTE',
    imgHost: 'www13',
    text: 'アイディービジネス', // 素材ID 001(2026-11-06 に 019 から切り替え。019 は料金の文言入り)
  },
  creatorsjapan: {
    name: '動画編集スクール【クリエイターズジャパン】',
    a8mat: '4BC0UI+633JEA+4LJQ+614CY',
    imgHost: 'www19',
    text: '動画編集スクール【クリエイターズジャパン】', // 素材ID 013
  },
  notta: {
    name: 'AI自動文字起こしサービス【Notta】',
    a8mat: '4BGCF5+64AELU+5988+5YRHE',
    imgHost: 'www16',
    text: '【Notta】', // 素材ID 002(成果はPCのWeb版の有料プランのみ・スマホとアプリは否認)
  },
  nottamemo: {
    name: '次世代AIボイスレコーダー【Notta Memo】',
    a8mat: '4BGCF7+FKUCMQ+5988+BX3J6',
    imgHost: 'www11',
    text: '【Notta Memo】', // 素材ID 002
  },
  xserver: {
    name: 'レンタルサーバー【エックスサーバー】',
    a8mat: '4BGERH+6F07HU+CO4+6AZAQ',
    imgHost: 'www16',
    text: 'エックスサーバー', // 素材ID 059(2026-11-06 提携)
  },
  shinserver: {
    name: '新世代レンタルサーバー【シンレンタルサーバー】',
    a8mat: '4BGERH+6JROC2+5GDG+5YRHE',
    imgHost: 'www16',
    text: 'シンレンタルサーバー', // 素材ID 002(2026-11-06 提携)
  },
  movavi: {
    name: '動画編集ソフト【Movavi】',
    a8mat: '4BGERH+6NXPKI+3YWG+614CY',
    imgHost: 'www15',
    text: '動画編集が素早く出来るMovavi Video Editor', // 素材ID 013(2026-11-06 提携・購入30%)
  },
  bunken: {
    name: '文章作成アドバイスツール【文賢】',
    a8mat: '4BGERH+6XGN8Y+3Q2O+HVFKY',
    imgHost: 'www12',
    text: '文章作成アドバイスツール【文賢】', // 素材ID 002(2026-11-06 提携・初回購入3,000円)
  },
  aiseesoft: {
    name: 'マルチメディアソフト【Aiseesoft】',
    a8mat: '4BGERH+6TW1MA+38W2+5YJRM',
    imgHost: 'www13',
    text: '【Aiseesoft】', // 素材ID 001(2026-11-06 提携・購入30%)
  },
  comu: {
    name: 'AIレコーダー【Comu】',
    a8mat: '4BGERH+6VOCFM+5YZG+5YRHE',
    imgHost: 'www12',
    text: '【Comu】', // 素材ID 002(2026-11-09 提携・購入10%)
  },
  nottabrain: {
    name: 'AIエージェント【Notta Brain】',
    a8mat: '4BGERH+39VUK2+5988+HVFKY',
    imgHost: 'www16',
    text: '【Notta Brain】', // 素材ID 002(2026-11-09 提携・新規有料プラン契約30%)
  },
  miricanvas: {
    name: 'AIデザインツール【MiriCanvas】',
    a8mat: '4BGERH+6W9S1E+5EX8+5YZ76',
    imgHost: 'www13',
    text: 'MiriCanvas', // 素材ID 003(2026-11-10 提携・新規会員登録(無料プラン)100円)
  },
} as const satisfies Record<string, Affiliate>;

export type AffiliateKey = keyof typeof AFFILIATES;

export const affiliateUrl = (key: AffiliateKey) =>
  `https://px.a8.net/svt/ejp?a8mat=${AFFILIATES[key].a8mat}`;

export const affiliatePixel = (key: AffiliateKey) =>
  `https://${AFFILIATES[key].imgHost}.a8.net/0.gif?a8mat=${AFFILIATES[key].a8mat}`;

export const affiliateText = (key: AffiliateKey) => AFFILIATES[key].text;
