---
name: "開発ツール"
summary: "AIエディタ・コード補完・AIターミナル・ブラウザで作る開発環境を、料金の数え方と提供状況で比べるカテゴリです。"
---

## 選び方の手引き

最初の分かれ目は、エディタごと乗り換えるかどうかです。乗り換えてよいなら、エージェントを組み込んだ[Cursor](/reviews/cursor-review/)か[Devin Desktop(旧Windsurf)](/reviews/windsurf-review/)、今のVS CodeやJetBrains系のまま補完とチャットを足すなら[GitHub Copilot](/reviews/github-copilot-review/)です。ターミナルの作業にエージェントを使うなら[Warp](/reviews/warp-review/)、コードを書かずにブラウザの中で作って公開まで進めるなら[Replit Agent](/reviews/replit-agent-review/)と、守備範囲から違います。全体の見取り図は[コーディング支援AI 5種の比較](/reviews/ai-coding-tools-comparison/)にあります。

次に、料金の数え方を確かめます。Cursorは2026年8月のSpaceXによる買収後、Grokと共通の利用枠が毎週リセットされる形になり、Grok以外のモデルはAPIの定価で別に請求されます。GitHub Copilotは2026年6月1日からチャットとエージェントをAIクレジットで数え、コード補完はクレジットを使いません。Devin Desktopは日単位・週単位の利用枠、Replit Agentは有料モードの作業と公開の費用を月のクレジットから差し引く形、Warpはドル建ての利用分で、Freeには含まれません。月額だけでなく、エージェントをどれだけ使うかで見積もってください。

提供の状況も分かれ目です。Amazon Q DeveloperのIDEプラグインは2026年5月15日に新規受付を止め、2027年4月30日にサポートが終わります。公式の移行先はKiroです([Amazon Q Developerの現状](/reviews/amazon-q-developer-review/))。WindsurfはDevin Desktopに名前が変わり、旧エージェントのCascadeは使えなくなりました。

会社のコードを扱うなら、学習への利用を先に確かめます。GitHub CopilotのFree・Pro・Pro+は2026年4月24日から、オプトアウトしない限りやり取りが学習に使われ、Business・Enterpriseは対象外です。Devin Desktopも初期設定では学習に使われる場合があり、有料プランは設定でオフにできます。組織で入れた後の効果の測り方は[GitHub Copilotの導入効果を測る方法](/reviews/github-copilot-impact-measurement/)にまとめています。

## 主な製品の比較

| 製品 | 無料枠 | 最安の有料 | 日本語 | 確認日 |
|---|---|---|---|---|
| [Cursor](/reviews/cursor-review/) | Free(エージェントとチャットのリクエスト数に制限あり) | Plus 月8ドル(使えるモデルはGrokのみ。他社モデルはPremium以上でも利用枠に含まれず、APIの定価で別料金) | 記事の確認範囲では記載なし | 2026年11月3日 |
| [GitHub Copilot](/reviews/github-copilot-review/) | Free(コード補完は月2,000回まで、チャットとエージェントは少量のAIクレジット) | Pro 月10ドル(毎月15ドル分のAIクレジット、コード補完は無制限) | 記事の確認範囲では記載なし | 2026年11月12日 |
| [Devin Desktop(旧Windsurf)](/reviews/windsurf-review/) | Free(エージェント用の利用枠は少なめ、Tab補完とインライン編集は無制限) | Pro 月20ドル(日単位・週単位の利用枠、超過分はAPI料金で追加購入) | 公式ドキュメントに日本語版のページあり | 2026年11月3日 |
| [Replit Agent](/reviews/replit-agent-review/) | Starter(Free Modeを1日ごとの上限つきで。公開できるアプリは1つで、30日で自動的に止まる) | Core 月20ドル(年払いなら月18ドル) | 画面の日本語化と日本語での指示の記載は見当たらず。料金ページとドキュメントは英語 | 2026年11月3日・11月12日 |
| [Warp](/reviews/warp-review/) | Free(Warpが用意するAIの利用分は含まれない。購入するか自分のAPIキーを持ち込む) | Build 月20ドル(年払いで月18ドル、毎月20ドル分のAI利用分) | 記事の確認範囲では記載なし(料金ページに円の表示なし) | 2026年11月12日 |
| [Amazon Q Developer](/reviews/amazon-q-developer-review/) | Free Tier(エージェントリクエスト月50件)。**2026年5月15日に新規作成を停止** | Pro Tier 1ユーザー月19ドル。**新規サブスクリプションの作成は停止**、IDEプラグインと有料サブスクリプションは2027年4月30日にサポート終了 | サポート終了の公式ブログに日本語版あり | 2026年11月3日 |
| [Kiro(Amazon Q Developerの移行先)](/reviews/amazon-q-developer-review/) | Free 0ドル(50クレジット) | Pro 月20ドル(1,000クレジット) | 記事の確認範囲では記載なし | 2026年11月3日 |

値は各記事で公式ページを確認した日のもので、料金は米ドルの月額です。料金と利用枠は改定されることがあり、税の扱いや年払いの条件は各記事を参照してください。
