// 記事の表示まわりの小さな計算(日付の書式・読了時間・新着の判定)。

/** 2026年11月5日 の形にする */
export function formatDate(d: Date): string {
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  });
}

/** <time datetime> 用の YYYY-MM-DD */
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * 読了時間の目安(分)。日本語は1分あたり約500字で計算する。
 * 本文の md から HTML(広告ボックス)・URL・記号を除いた文字数で数える。
 */
export function readingMinutes(body: string): number {
  const text = body
    .replace(/<[^>]+>/g, '')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[#>*_`|\-[\]]/g, '')
    .replace(/\s+/g, '');
  return Math.max(1, Math.round(text.length / 500));
}

/** 公開から14日以内なら新着(ビルド時点で判定する) */
const NEW_DAYS = 14;
export function isNew(pubDate: Date, now = Date.now()): boolean {
  return now - pubDate.valueOf() < NEW_DAYS * 24 * 60 * 60 * 1000;
}
