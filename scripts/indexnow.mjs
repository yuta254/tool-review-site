// Notify IndexNow (Bing and other participating engines) of published URLs.
// Usage:
//   node scripts/indexnow.mjs --all            send every URL in the live sitemap (first time only)
//   node scripts/indexnow.mjs <url> [<url>...] send only the URLs that changed
// Do not resend unchanged URLs: 429 means "too many" and we stop.
// The key file public/<KEY>.txt must be live before this runs.
const HOST = "tool-review-site.vercel.app";
const KEY = "4c5cfed28fd1465fdde76fc579ecf473";
const ORIGIN = `https://${HOST}`;

async function sitemapUrls() {
  const xml = await (await fetch(`${ORIGIN}/sitemap-0.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urls = args[0] === "--all" ? await sitemapUrls() : args;
if (urls.length === 0) {
  console.error("no URLs given (use --all or pass URLs)");
  process.exit(2);
}
const bad = urls.filter((u) => new URL(u).host !== HOST);
if (bad.length) {
  console.error(`URLs outside ${HOST}:`, bad);
  process.exit(2);
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: urls }),
});
const meaning = { 200: "OK", 202: "accepted (key check pending)", 400: "bad request", 403: "key file not visible", 422: "URL/host mismatch", 429: "too many requests - stop" };
console.log(`${res.status} ${meaning[res.status] ?? ""} - ${urls.length} URLs`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
