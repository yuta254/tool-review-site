// 記事本文(Markdown)の「## よくある質問」節から Q&A を抜き出す。
// 想定する書式:
//   **Q. 質問文**
//   回答文(1段落)
export interface FaqItem {
  question: string;
  answer: string;
}

export function extractFaq(markdown: string): FaqItem[] {
  const start = markdown.indexOf('## よくある質問');
  if (start === -1) return [];

  // 次の見出し(## 〜)またはHTMLブロックまでを対象にする
  const rest = markdown.slice(start + '## よくある質問'.length);
  const endMatch = rest.match(/\n##\s|\n<div/);
  const section = endMatch ? rest.slice(0, endMatch.index) : rest;

  const items: FaqItem[] = [];
  // 「**Q. ...**」の行と、それに続く空行までの本文を対にする
  const re = /\*\*Q\.\s*([^*]+?)\*\*\s*\n([\s\S]*?)(?=\n\s*\n\*\*Q\.|\s*$)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section)) !== null) {
    const question = m[1].trim();
    // Markdownのリンク記法・強調を落としてプレーンテキストにする
    const answer = m[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/\*\*/g, '')
      .replace(/\s*\n\s*/g, ' ')
      .trim();
    if (question && answer) items.push({ question, answer });
  }
  return items;
}
