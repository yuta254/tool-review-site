#!/usr/bin/env node
// ビルド後の dist/ を全ページ機械的に検査する(2026-11-12)。
//   npm run build && npm run check:dist
// 誤り(終了コード1): サイト内リンク切れ / 広告リンクがあるのに【PR】が無い・広告より後ろ /
//   広告リンクに rel="sponsored nofollow" が無い / 構造化データ(JSON-LD)が読めない /
//   canonical が自分のURLでない / title・description が無い・重複 / 幅・高さの無い画像 /
//   プライバシーポリシーへのリンクが無い / サイトマップと実ページの食い違い
// 注意(表示のみ): 検索結果で切れやすい長さの title・description
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv[2] ?? 'dist');
const SITE = 'https://tool-review-site.pages.dev';
const SKIP = /^\/google[0-9a-f]+\.html$/; // Search Console の所有確認ファイル
const AFF = /a8\.net|moshimo\.com/;

const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) files.push(p);
  }
})(DIST);

const urlOf = (p) => {
  const r = path.relative(DIST, p).replace(/\\/g, '/');
  if (r === 'index.html') return '/';
  if (r.endsWith('/index.html')) return `/${r.slice(0, -'index.html'.length)}`;
  return `/${r}`;
};
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");
const len = (s) => [...s].length;

const pages = new Map();
for (const f of files) {
  const u = urlOf(f);
  if (!SKIP.test(u)) pages.set(u, fs.readFileSync(f, 'utf8'));
}
const exists = (t) =>
  pages.has(t) || pages.has(`${t}/`) || fs.existsSync(path.join(DIST, decodeURIComponent(t)));

const errors = [];
const warns = [];
const byTitle = new Map();
const byDesc = new Map();

for (const [u, h] of pages) {
  const is404 = u === '/404.html';
  const title = decode(h.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) errors.push(`${u}: title が無い`);
  if (!desc) errors.push(`${u}: description が無い`);
  if (!is404) {
    (byTitle.get(title) ?? byTitle.set(title, []).get(title)).push(u);
    (byDesc.get(desc) ?? byDesc.set(desc, []).get(desc)).push(u);
    const canon = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    if (canon !== SITE + u) errors.push(`${u}: canonical が ${canon}`);
    if (len(title) > 45) warns.push(`${u}: title ${len(title)}字(検索結果で切れやすい)`);
    if (len(desc) > 160) warns.push(`${u}: description ${len(desc)}字`);
  }

  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${u}: JSON-LD が読めない (${e.message})`);
    }
  }

  let firstAff = -1;
  for (const m of h.matchAll(/<a\b([^>]*)>/g)) {
    const attrs = m[1];
    const href = decode(attrs.match(/href="([^"]*)"/)?.[1] ?? '');
    if (AFF.test(href)) {
      if (firstAff < 0) firstAff = m.index;
      const rel = attrs.match(/rel="([^"]*)"/)?.[1] ?? '';
      if (!/sponsored/.test(rel) || !/nofollow/.test(rel)) errors.push(`${u}: 広告リンクの rel="${rel}" ${href.slice(0, 50)}`);
    }
    let target = null;
    if (href.startsWith('/') && !href.startsWith('//')) target = href;
    else if (href.startsWith(SITE)) target = href.slice(SITE.length) || '/';
    if (target) {
      target = target.split('#')[0].split('?')[0];
      if (target && !exists(target)) errors.push(`${u}: リンク切れ ${href}`);
    }
  }
  if (firstAff >= 0) {
    const pr = h.indexOf('【PR】');
    if (pr < 0) errors.push(`${u}: 広告リンクがあるのに【PR】表記が無い`);
    else if (pr > firstAff) errors.push(`${u}: 【PR】表記が最初の広告リンクより後ろ`);
  }

  for (const m of h.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\bwidth=/.test(m[1]) || !/\bheight=/.test(m[1])) errors.push(`${u}: 幅・高さの無い画像 ${m[1].slice(0, 60)}`);
  }
  if (!h.includes('href="/privacy-policy/"')) errors.push(`${u}: プライバシーポリシーへのリンクが無い`);
}

for (const [k, v] of byTitle) if (v.length > 1) errors.push(`title の重複「${k}」: ${v.join(' ')}`);
for (const [k, v] of byDesc) if (v.length > 1) errors.push(`description の重複: ${v.join(' ')}`);

const smPath = path.join(DIST, 'sitemap-0.xml');
if (fs.existsSync(smPath)) {
  const locs = new Set([...fs.readFileSync(smPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(SITE.length)));
  for (const u of pages.keys()) if (u !== '/404.html' && !locs.has(u)) errors.push(`サイトマップに無い: ${u}`);
  for (const u of locs) if (!pages.has(u)) errors.push(`サイトマップにあるがページが無い: ${u}`);
} else errors.push('sitemap-0.xml が無い');

for (const w of warns) console.log(`注意 ${w}`);
for (const e of errors) console.log(`誤り ${e}`);
console.log(`${pages.size}ページを検査: 誤り ${errors.length} / 注意 ${warns.length}`);
process.exit(errors.length ? 1 : 0);
