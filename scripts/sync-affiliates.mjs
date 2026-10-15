#!/usr/bin/env node
// 記事内の広告リンクを src/lib/affiliates.ts の内容に揃える(--check で検証のみ)。
//
// 記事側は <div class="affiliate-box" data-pr="キー"> の中に
//   <a data-pr="キー">   ... 本文リンクとCTA
// を置くだけでよい。href / rel / 計測用1x1画像はこのスクリプトが書き込むので、
// 手で編集しないこと。リンクを差し替えるときは affiliates.ts だけを直して sync する。
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadAffiliates, linkUrl, pixelUrl } from './affiliates.mjs';

const CHECK = process.argv.includes('--check');
const AFFILIATES = loadAffiliates();

const targets = readdirSync('src/content/reviews')
  .filter((f) => f.endsWith('.md'))
  .map((f) => join('src/content/reviews', f));

const problems = [];
let changed = 0;

function rewrite(text) {
  let out = text;

  // 1) <a ... data-pr="key" ...> の href / rel を揃える(属性順も固定する)
  out = out.replace(/<a([^>]*?)data-pr="([^"]+)"([^>]*?)>/g, (whole, pre, key, post) => {
    const a = AFFILIATES[key];
    if (!a) return whole;
    const keep = (pre + post)
      .replace(/\s*href="[^"]*"/g, '')
      .replace(/\s*rel="[^"]*"/g, '')
      .trim();
    const attrs = keep ? ` ${keep}` : '';
    return `<a${attrs} data-pr="${key}" href="${linkUrl(a)}" rel="sponsored nofollow">`;
  });

  // 2) 計測用1x1画像。既にあれば行ごと差し替え、無ければ </div> の直前に追加
  for (const [, key] of out.matchAll(/<div class="affiliate-box" data-pr="([^"]+)">/g)) {
    const a = AFFILIATES[key];
    if (!a) continue;
    const img = `<img border="0" width="1" height="1" src="${pixelUrl(a)}" alt="" data-pr="${key}">`;
    const existing = new RegExp(`^[ \t]*<img[^>]*data-pr="${key}"[^>]*>[ \t]*$`, 'm');
    if (existing.test(out)) {
      out = out.replace(existing, `  ${img}`);
    } else {
      out = out.replace(/\n<\/div>/, `\n  ${img}\n</div>`);
    }
  }

  return out;
}

for (const file of targets) {
  const before = readFileSync(file, 'utf8');
  if (!before.includes('class="affiliate-box"')) continue;

  for (const [, key] of before.matchAll(/data-pr="([^"]+)"/g)) {
    if (!AFFILIATES[key]) problems.push(`${file}: 未登録の広告キー "${key}"`);
  }

  const after = rewrite(before);
  if (after !== before) {
    changed++;
    if (!CHECK) writeFileSync(file, after);
  }
}

if (problems.length) {
  console.error('[affiliates] 問題が見つかりました:');
  for (const p of [...new Set(problems)]) console.error('  - ' + p);
  process.exit(1);
}

if (CHECK) {
  if (changed > 0) {
    console.error(`[affiliates] ${changed}件の記事が src/lib/affiliates.ts と一致していません。'npm run affiliates:sync' を実行してください。`);
    process.exit(1);
  }
  console.log(`[affiliates] OK: ${Object.keys(AFFILIATES).length}プログラム、広告リンクはすべて一致しています。`);
} else {
  console.log(`[affiliates] ${changed}件の記事を更新しました。`);
}
