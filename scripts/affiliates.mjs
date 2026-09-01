// 広告リンクの正本は src/lib/affiliates.ts。ここはその写しを読むためのローダ。
// TSをそのままimportできないので、必要な値だけを正規表現で取り出す。
// (値の重複定義を避けるため、手で書き写さないこと)
import { readFileSync, writeFileSync } from 'node:fs';


const SRC = new URL('../src/lib/affiliates.ts', import.meta.url);

export function loadAffiliates() {
  const ts = readFileSync(SRC, 'utf8');
  const body = ts.slice(ts.indexOf('export const AFFILIATES'));
  const out = {};
  const re = /(\w+):\s*\{[^}]*?a8mat:\s*'([^']+)'[^}]*?imgHost:\s*'([^']+)'/gs;
  let m;
  while ((m = re.exec(body)) !== null) {
    out[m[1]] = { a8mat: m[2], imgHost: m[3] };
  }
  if (Object.keys(out).length === 0) {
    throw new Error('src/lib/affiliates.ts からプログラムを読み取れませんでした。');
  }
  return out;
}

export const linkUrl = (a) => `https://px.a8.net/svt/ejp?a8mat=${a.a8mat}`;
export const pixelUrl = (a) => `https://${a.imgHost}.a8.net/0.gif?a8mat=${a.a8mat}`;
