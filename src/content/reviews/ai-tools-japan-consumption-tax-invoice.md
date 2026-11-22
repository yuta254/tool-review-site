---
title: "海外AIツールの消費税・インボイス対応一覧:登録番号と請求書の出し方"
seoTitle: "海外AIツールの消費税とインボイス対応一覧"
description: "ChatGPT・Claude・Zoom・AWSなど海外AIツール24件の、日本の消費税10%の加算、適格請求書の登録番号(国税庁の公表サイトで照合)、請求書の取り方を公式情報で一覧にしました(2026年11月確認)。"
pubDate: 2026-11-23
category: "ガイド"
tags: ["消費税", "インボイス", "適格請求書", "確定申告", "経費", "AIツール", "料金"]
affiliateDisclosure: false
---

## この記事の結論

- 海外のAIツール24件について、各社の公式ヘルプ・料金ページ・規約に書かれた**日本の消費税の扱い、適格請求書発行事業者の登録番号、請求書の取り方**を並べました。登録番号は、各社の公式ページに書かれていたものを**国税庁の公表サイトで1件ずつ照合**しています(2026年11月22日)
- 公式ページに登録番号が書かれ、公表サイトでも登録を確かめられたのは **OpenAI(ChatGPT)・Anthropic(Claude)・GitHub・Zoom・Notta・AWS** の6社(AWSは日本法人と米国法人の2つ)
- アドビとDeepLは、インボイス制度のヘルプページを自動取得で読めませんでした(HTTP 403)。公表サイトには、**アドビ株式会社**と**DeepL SE**の登録があることだけを確かめています
- Notion・Slack・Zapier・Zoom は、日本の利用者に消費税を加算すると公式に書いています。一方、**Enterprise など個別の契約では請求書に消費税が載らず、利用者側でリバースチャージ(自分で申告)になる**と書いている会社が複数あります(OpenAI・Notion・Slack・Zapier・ElevenLabs、Googleは注文書での契約の場合)
- Cursor・Perplexity・Canva・Grammarly・Gamma・Todoist・Motion・Dropbox などは、**日本の登録番号の記載が公式ページに見当たりませんでした**
- アプリ(App Store・Google Play)で契約した分は、多くのツールで**ツール側ではなくストア側の領収書**になると公式ヘルプに書かれています

この記事は、各社の公式ページと国税庁の公表サイト・パンフレットを2026年11月22〜23日に確認してまとめたものです。当サイトで各ツールに支払いをして請求書を確かめてはいません。**個別の税務の扱いは税理士か税務署に確認してください。**

## 一覧表:消費税・登録番号・請求書の取り方

「照合済み」は、国税庁の[インボイス制度 適格請求書発行事業者公表サイト](https://www.invoice-kohyo.nta.go.jp/)で、その番号の登録があり、名称が一致したことを2026年11月22日に確かめたものです。「公式に記載が見当たらない」は、出典の欄に挙げたページに書かれていなかったという意味で、登録がないという意味ではありません。

| ツール | 販売元(契約相手) | 表示価格は税込か税抜か | 日本の消費税10%の加算 | 登録番号(公表サイトでの照合) | 請求書の取り方 | 出典・確認日 |
| --- | --- | --- | --- | --- | --- | --- |
| ChatGPT | OpenAI OpCo, LLC | ドル建て。税込か税抜かの記載なし(決済画面の税額は見積もりで、発行された請求書が記録と記載) | 2025年1月1日から、OpenAIから直接買う人に10%。Enterprise などの個別契約は原則リバースチャージで加算なし | **T3700150133253**(照合済み:OpenAI OpCo, LLC、登録年月日2026年1月1日) | Web版は「設定」→「Billing」→「Invoices」の「View」。Businessはワークスペース設定の「Billing」→「Invoices」。アプリで契約した分はApple・Googleの購入履歴 | [JCTのヘルプ](https://help.openai.com/en/articles/10242647-the-japanese-consumption-tax-on-your-openai-invoices)、[請求書のヘルプ](https://help.openai.com/en/articles/12356340-how-can-i-find-my-past-chatgpt-invoices) 2026-11-22 |
| Claude | Anthropic, PBC | ドル建て・税抜(料金ページに「適用される税は含まない」) | 2026年4月1日以降の請求から全プランに10%。税額は適格請求書に円で表示 | **T7700150134388**(照合済み:Anthropic, PBC、登録年月日2026年2月17日) | 「設定」→「Billing」→「Invoices」の「View」。毎回「Your receipt from Anthropic」のメールも届く。アプリで契約した分はストア | [JCTのお知らせ](https://support.claude.com/en/articles/14051822)、[請求のよくある質問](https://support.claude.com/en/articles/8325618-paid-plan-billing-faqs)、[料金ページ](https://claude.com/pricing) 2026-11-22 |
| Google Workspace(Geminiを含む) | Google Asia Pacific Pte. Ltd.(特定商取引法の表記) | 円。料金ページに税込・税抜の表記なし | 特定商取引法の表記では、オンラインで申し込んだ場合は料金に加えて消費税を請求、注文書(オフライン注文フォーム)で契約した場合は加算せずリバースチャージ。ただし英語版ヘルプの日本の項は「Google Asia Pacificと契約する日本の顧客には消費税を請求しない」としており、記載が一致しない | Googleの公式ページに番号の記載は見当たらない。公表サイトには**Google Asia Pacific Pte. Ltd.がT4700150006045**(登録年月日2023年10月1日)で載っている | 管理コンソールの「Billing」→「Payment accounts」→「View invoices」→「PDF Invoice」 | [特定商取引法の表記](https://workspace.google.com/intl/ja/terms/ja_commercial_transaction_disclaimer/)、[Taxes in your region](https://knowledge.workspace.google.com/admin/billing/taxes-in-your-region)、[請求書のダウンロード](https://knowledge.workspace.google.com/admin/billing/download-or-print-monthly-invoices) 2026-11-22〜23 |
| Google One・Google AI Pro(個人のGemini) | 公式に記載が見当たらない | 円(Google AI Pro は月2,900円)。税込・税抜の表記なし | 公式に記載が見当たらない | 公式に記載が見当たらない(公表サイトで未照合) | Google Payのヘルプでは、VAT請求書は欧州経済領域とモロッコの居住者のみ。それ以外の地域は payments.google.com で取引履歴と領収書を見る | [プラン一覧](https://one.google.com/about/plans?hl=ja&gl=JP)、[Google Payのヘルプ](https://support.google.com/googlepay/answer/7644144?hl=ja) 2026-11-22 |
| Microsoft 365 Copilot(法人)/ Microsoft 365 Personal・Premium(個人) | 日本の販売元の法人名は確認したページに記載なし | 法人向けは「価格には消費税は含まれていません」。個人向けの比較ページには税の表記なし | 法人向けは税抜表示。法人向けの税のドキュメントでは、日本から請求される場合は現地の税を適用 | 公式に記載が見当たらない(公表サイトで未照合) | 個人:Microsoftアカウントの「注文履歴」→「注文の詳細」→「税の請求書」(用意まで通常48時間〜5日)。職場:Microsoft 365 管理センターの「課金」→「請求と支払い」でPDF | [Copilot ビジネス向け](https://www.microsoft.com/ja-jp/copilot/solutions/business)、[個人向けの比較](https://www.microsoft.com/ja-jp/microsoft-365/buy/compare-all-microsoft-365-products?culture=ja-jp&country=jp)、[税の請求書](https://support.microsoft.com/ja-jp/accounts-billing/tax-invoices-breakdowns-and-registration-numbers-for-microsoft-store)、[法人の税金情報](https://learn.microsoft.com/ja-jp/microsoft-365/commerce/billing-and-payments/tax-information?view=o365-worldwide) 2026-11-22〜23 |
| GitHub Copilot | GitHub, Inc. | ドル建て。税込か税抜かの記載なし(変更履歴では請求時に10%を加算) | 2024年10月1日から、日本でカードかPayPalで自分で支払う人に10%。税額は請求書にドルと円で表示 | **T4700150079306**(照合済み:GitHub, Inc.、登録年月日2023年10月1日) | プロフィール画像→「Settings」→「Billing & Licensing」→「Payment history」→「Receipt」のダウンロード | [変更履歴(2024年8月1日)](https://github.blog/changelog/2024-08-01-japanese-consumption-tax-jct-on-your-github-account/)、[支払い履歴](https://docs.github.com/billing/managing-your-github-billing-settings/viewing-your-payment-history-and-receipts) 2026-11-22〜23 |
| Cursor | Anysphere(価格ポリシーに記載) | 価格ポリシーでは、売上税・VATなどは利用者の負担で、徴収が必要な場合は別に請求 | 日本の記載なし | 公式に記載が見当たらない | cursor.com/dashboard/billing の「Invoices」か、Stripeのポータルの請求履歴からPDF。会社名・住所・税情報はStripeのポータルで変更(以後の請求書のみ) | [価格ポリシー](https://cursor.com/terms/pricing)、[Invoices](https://cursor.com/help/account-and-billing/invoices) 2026-11-22 |
| Perplexity | 公式に記載が見当たらない | 「多くの国では税抜で表示し、売上税・VATは決済時に加算して請求書に表示」 | 日本の記載なし | 公式に記載が見当たらない | 「Account」→「Subscription」の「Manage Plan」→「Invoice History」→「Download Invoice」。アプリで契約した分はストア | [Pro の請求のよくある質問](https://www.perplexity.ai/help-center/en/articles/10353002-billing-faq-for-pro-plan-subscribers) 2026-11-22 |
| Canva | 公式に記載が見当たらない | 円。料金ページに税込・税抜の表記なし | 事業者が購入時に有効な事業者登録番号を示せば、サブスクリプションの請求書に消費税は載らない。個人の扱いは記載なし。印刷物には消費税を請求 | 公式に記載が見当たらない | 「設定」→「Orders and invoices」→各購入の「More」→「Download invoice」(PDF)。アプリで契約した分はApple・Google | [国別の税](https://www.canva.com/help/canva-sales-tax-per-country/)、[請求書の確認](https://www.canva.com/help/access-invoices/)、[料金ページ](https://www.canva.com/ja_jp/pricing/) 2026-11-22 |
| Adobe(Firefly・Creative Cloud) | インボイス制度のヘルプが403で読めず、確認できない | 円・**税込**(Fireflyのプランページに「(税込)」) | 税込で表示 | ヘルプは未確認。公表サイトには**アドビ株式会社がT7010701011841**(登録年月日2023年10月1日)で載っている。請求書の発行元がこの法人かは確かめられていない | ヘルプが読めず未確認 | [インボイス制度への対応](https://helpx.adobe.com/jp/x-productkb/policy-pricing/invoice-business-registration.html)(403)、[Firefly のプラン](https://www.adobe.com/jp/products/firefly/plans.html) 2026-11-22〜23 |
| Notion | 公式に記載が見当たらない | 円。料金ページの各プランに「日本の消費税(該当する場合)」 | 日本の消費者と事業者に消費税を請求すると記載。事業目的で請求書に消費税がない場合は、リバースチャージで自分で申告 | Notion自身の番号は公式に記載が見当たらない(利用者は自分の登録番号を「Settings」→「Billing」で入力できる) | 「Settings」→「Billing」→「Invoices」の「View invoice」(メールでは送られない) | [Sales tax on Notion bills](https://www.notion.com/help/sales-tax)、[請求書](https://www.notion.com/help/invoices)、[料金ページ](https://www.notion.com/ja/pricing) 2026-11-22〜23 |
| Grammarly(Superhuman) | 公式に記載が見当たらない | 請求先住所に応じて税をかける場合があり、決済時に別項目で出るか、料金に含まれる | 日本の記載なし | 公式に記載が見当たらない | account.grammarly.com/admin/subscription の「Billing History」でPDFのアイコン。「Add Details」で記載を追加 | [税のヘルプ](https://support.grammarly.com/hc/en-us/articles/33154429182861-Does-Grammarly-charge-tax)、[領収書・請求書](https://support.grammarly.com/hc/en-us/articles/115000090192-How-do-I-get-a-receipt) 2026-11-22〜23 |
| DeepL | DeepL SE(公表サイトの名称) | **税込**(DeepL Proのページに「価格には消費税が含まれています」) | 税込で表示 | ヘルプの「インボイス制度」は403で読めず。公表サイトには**DeepL SEがT7700150113020**(登録年月日2023年10月1日)で載っている | ヘルプが読めず未確認 | [インボイス制度](https://support.deepl.com/hc/ja/articles/10878688685596)(403)、[DeepL Pro](https://www.deepl.com/ja/pro) 2026-11-22 |
| Zoom | Zoom Communications, Inc. | 料金ページに税込・税抜の表記はなく、税額は地域・請求先住所などで変わり、注文時のカートで確認できると記載 | 日本に住む顧客に請求(リセラーを除く)。2023年10月1日以降、販売先が日本の請求書は適格請求書の要件に沿って発行 | **T6700150118763**(照合済み:Zoom Communications, Inc.、登録年月日2023年10月1日) | zoom.com/billing →「Plans and billings」→「Invoice History」→請求書番号を開いて印刷かダウンロード | [JCTのヘルプ](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061252)、[請求書履歴](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063038)、[料金ページ](https://zoom.us/ja/pricing) 2026-11-22〜23 |
| Slack | 公式に記載が見当たらない | 「サイトの価格に売上税・VATは含まない」 | 請求先住所が日本なら消費税を加算(事業目的かどうかを問わない)。請求書に消費税がないEnterpriseの顧客はリバースチャージで自分で申告 | 公式に記載が見当たらない | 管理者が「Admin」→「Manage billing」→「History」→月を選んで「Go to」 | [Sales tax and VAT](https://slack.com/intl/en-gb/help/articles/226166647-Sales-tax-and-VAT)、[請求の詳細](https://slack.com/intl/en-gb/help/articles/218915087-Manage-your-Slack-subscription-and-billing-details) 2026-11-22〜23 |
| Zapier | 公式に記載が見当たらない | 「サイトの価格は税を含まない」 | 日本の請求先住所のセルフサービス利用者には加算される場合あり。Enterpriseなどはリバースチャージで自分で申告 | 公式に記載が見当たらない | 「Billing and usage」の「Billing settings」→「Invoices」の「View Details」。PDFはブラウザの印刷で保存 | [Tax applied to Zapier charges](https://help.zapier.com/hc/en-us/articles/24024667874957-Tax-applied-to-Zapier-charges)、[請求書](https://help.zapier.com/hc/en-us/articles/8496311316237-Access-and-manage-your-invoices) 2026-11-22〜23 |
| ElevenLabs | Eleven Labs Inc.(利用規約) | 料金ページに「価格はすべての税を含まない」 | 規約では、法令で必要な場合は消費税を含めて請求。リバースチャージの対象になる場合はElevenLabsは請求せず、利用者が自分で申告 | 公式に記載が見当たらない | 「Subscription」→「Billing」→「View invoices」。メールでも届く | [利用規約](https://elevenlabs.io/terms-of-use)、[請求書](https://elevenlabs.io/docs/help-center/account/payment-billing/where-can-i-find-my-invoices)、[料金ページ](https://elevenlabs.io/pricing) 2026-11-22〜23 |
| Gamma | 公式に記載が見当たらない | 料金ページは今回403で読めず | 税の書類のヘルプは、米国のW-9とGammaの税ID・VAT番号を出せるとだけ記載。日本の記載なし | 公式に記載が見当たらない | 「Settings」→「Billing」→Stripeで管理→請求履歴からPDF。「Your receipt from Gamma」のメールにもリンク | [税の書類](https://help.gamma.app/en/articles/11048528-what-tax-documents-can-gamma-provide)、[請求書](https://help.gamma.app/en/articles/11048415-how-do-i-find-or-update-my-invoice-for-my-gamma-purchase) 2026-11-22〜23 |
| Notta | Notta株式会社 | **税込**(料金ページに「表示価格は全て税込価格です」) | 税込で表示 | **T5010001226919**(照合済み:Notta株式会社、登録年月日2023年10月1日) | お知らせでは2023年10月1日以降の購入分から適格請求書の様式。領収書のヘルプは今回403で読めず | [適格請求書のお知らせ](https://www.notta.ai/news/info/202308301800)、[料金ページ](https://www.notta.ai/pricing) 2026-11-22 |
| PLAUD | PLAUD株式会社(特定商取引法の表示。公式ストアの国内販売) | 価格は各商品ページに表示(今回は429で商品ページを再確認できず) | 公式に記載が見当たらない | 公式に記載が見当たらない(公表サイトで未照合) | 公式ストアの注文は「ご注文完了メール」から領収書と請求書をダウンロード。会員プラン(サブスクリプション)のヘルプは403で読めず | [特定商取引法に基づく表示](https://jp.plaud.ai/pages/te-ding-shang-qu-yin-fa-niji-dukubiao-shi)、[領収書ダウンロード](https://jp.plaud.ai/pages/how-to-download-receipts) 2026-11-22 |
| Todoist | 公式に記載が見当たらない | ドル建て。Businessは「+ 地方税」と表示、Proは税の表記なし | 日本の記載なし(VATのヘルプはEU・英国向け) | 公式に記載が見当たらない | 「設定」→「サブスクリプション」→「Go to billing」→「Invoice History」(Web・デスクトップのみ) | [料金ページ](https://www.todoist.com/ja/pricing)、[VATの請求書](https://www.todoist.com/help/articles/vat-exempt-invoices-and-payments-for-todoist-wvwTOe8j)、[Proの管理](https://todoist.com/help/articles/6555671707292) 2026-11-22〜23 |
| Motion | 公式に記載が見当たらない | ドル建て。税込・税抜の表記なし | 規約6.4で、取引に関する税は利用者が支払うとだけ記載。日本の記載なし | 公式に記載が見当たらない | 個人は usemotion.com/account の「Billing」から請求書を見る。チームは管理者が「Settings」→「Billing」→「Manage Plan」 | [利用規約](https://www.usemotion.com/terms)、[Cancel your plan](https://www.usemotion.com/help/motion-support/cancel-your-plan) 2026-11-22 |
| AWS(Amazon Q Developer・Kiro) | アマゾンウェブサービスジャパン合同会社/Amazon Web Services, Inc.(インボイスのよくある質問に両方の番号) | AWSのサービス価格は2014年4月1日から税抜表示。Kiroも税を含まない | 日本の居住者には2019年10月1日から10%を加算。Kiroは日本の請求先住所なら消費税がかかる | **T6011001106696**(照合済み:アマゾンウェブサービスジャパン合同会社、登録年月日2023年10月1日)、**T9700150104216**(照合済み:Amazon Web Services, Inc.、登録年月日2023年10月1日) | 「請求とコスト管理」の「請求書」ページ。税は「徴収される消費税(日本)」、PDFでは「CT」と表示。登録番号は請求書下部のフッター | [消費税のよくある質問](https://aws.amazon.com/jp/c-tax-faqs/)、[インボイスのよくある質問](https://aws.amazon.com/jp/local/invoice-faq/)、[Kiroの料金](https://kiro.dev/pricing/) 2026-11-22 |
| Dropbox | 公式に記載が見当たらない | 税込か税抜かの記載なし(税込の注記はEU・スイスのみ) | 国別の表で日本は「Consumption tax」。税率の記載なし。課税される場合は請求書・領収書に税の行が出る | 公式に記載が見当たらない(追加できる番号の案内はVAT・GSTのみ) | 個人:アバター→「Manage Account」→「Billing」→「Invoice」か「Receipt」。チーム:管理コンソール→「Billing」→「Payment history」 | [税のヘルプ](https://help.dropbox.com/billing/tax)、[請求書・領収書](https://help.dropbox.com/billing/invoices-receipts) 2026-11-22〜23 |

- 金額や画面の名前は確認日時点のものです。各社の画面は英語表示の名前で書いています(日本語表示では名前が違う場合があります)。
- AWSのインボイスのよくある質問には、Amazon Bedrock 経由の Anthropic のモデルについて、2026年6月30日以降は AWS Inc. が媒介者交付特例で Anthropic に代わって適格請求書を出すこと、OpenAI のモデルも2026年10月15日以降に同じ形になる予定であることが書かれています。Bedrock 経由で使う場合は、AnthropicやOpenAIと直接契約する場合と請求書の出し手が違います。

### 一覧から外したツール

- **Midjourney**: 公式ヘルプ(docs.midjourney.com)の税・支払い履歴・利用規約のページが、いずれも自動取得を拒否されました(HTTP 403)。公式の記載を確かめられなかったため、一覧に載せていません。
- **Otter.ai**: 売上税のよくある質問のページが403で読めませんでした。利用規約には、ドル建てで「適用される税を含めて請求する」とあるだけで、日本の記載はありませんでした。

## 制度の要点(国税庁のページに書かれていること)

ここでは国税庁のページに書かれていることだけをまとめます。

- **インボイス制度は2023年10月1日から始まっています。** 仕入税額控除を受けるには、原則として取引相手(売手)から受け取ったインボイスの保存が必要です。簡易課税制度や2割特例などを使う場合は、インボイスの保存がなくても控除を受けられます([国税庁:インボイス制度の概要](https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice_about.htm))。
- **インボイスに書く事項**には、売手の名称と**登録番号**、取引年月日、税率ごとの対価の額と適用税率、税率ごとの消費税額などがあります。請求書に限らず、領収書などでも所定の事項が書かれていればインボイスになります(同上)。
- **登録番号の形**は、法人番号のある事業者は「T」+法人番号(13桁)、それ以外の事業者は「T」+13桁の数字です([公表サイト:登録番号とは](https://www.invoice-kohyo.nta.go.jp/about-toroku/index.html))。
- **海外のAIツールの多くは「電気通信利用役務の提供」に当たります。** 国税庁のパンフレット(令和6年7月)では、クラウド上のソフトウエアやデータベースを使わせるサービス、クラウド上でデータを保存する場所を提供するサービスなどが例に挙がっています([国税庁:電気通信利用役務の提供に係る消費税の課税関係(PDF)](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_02.pdf))。
- 国外事業者が行うこの役務は、**「事業者向け」と「消費者向け」で納税のしかたが分かれます**(同パンフレット)。
  - **事業者向け**(例:ネット広告の配信。個別に交渉した契約で、受ける事業者が事業に使うことが明らかなクラウドサービスなど)は**リバースチャージ方式**で、役務を受けた国内の事業者が申告・納税します。
  - **消費者向け**(例:電子書籍・音楽の配信)は、国外事業者が日本で申告・納税します。**Webサイトで申込みを受け付け、消費者からの申込みを事実上制限できないものは、「事業者向け」と書いていても消費者向けに当たる**とされています。
  - 消費者向けの役務を受けた事業者が仕入税額控除を使うには、**売手の国外事業者から受け取った適格請求書の保存が必要**です。
  - 2025年4月1日以後、特定プラットフォーム事業者を通じて対価を払う消費者向けの役務(プラットフォーム課税の対象)では、適格請求書はプラットフォーム事業者が出すことになります。
- 国境を越えた取引の詳しい扱いは、国税庁の[国境を越えた役務の提供に係る消費税の課税関係について](https://www.nta.go.jp/publication/pamph/shohi/cross/01.htm)にまとめられています。

上の一覧には「Enterprise などの個別契約はリバースチャージ」と書いている会社があります。自分の契約がどちらの扱いになっているかは、請求書に消費税の行があるかと、契約書・各社の案内で確かめてください。

## 個人と法人で何が違うか

- **仕入税額控除は、消費税を申告する事業者の話です。** Anthropicのお知らせには、消費税の課税事業者である法人の顧客は Anthropic の適格請求書で仕入税額控除を受けられ、**個人の顧客は控除を受けられない**と書かれています(上の一覧の出典)。
- **消費税の上乗せは、個人にもかかります。** OpenAIは「OpenAIから直接購入するすべての人」、Slackは「事業目的かどうかを問わない」としています。Anthropic・GitHub(カード・PayPal払い)も個人・法人で分けていません。
- **法人の個別契約(Enterprise・注文書・営業経由)では、請求書に消費税が載らないことがあります。** OpenAI・Notion・Slack・Zapier・ElevenLabs、Google Workspace(注文書で契約した場合)は、その場合は利用者がリバースチャージで申告すると書いています。Zoomはリセラーには消費税を請求しない場合があるとしています。
- **自分の登録番号や会社名を請求書に入れたい場合**、入力場所を公式に案内しているのは、ChatGPT(「設定」→「Billing」→請求先情報の編集)・Claude(「設定」→「Billing」の支払い方法の「Update」)・Notion(「Settings」→「Billing」)・Canva(Billing details)・Cursor と Gamma(Stripeのポータル)などです。多くの会社は**発行済みの請求書は書き換えず、変更は次の請求書から**としています。

## 公式に書いていないこと

確認したページに書かれていなかったことと、確かめ方です。

- **登録番号を公式に示していない会社が多い**: Google(Workspace・Google One)、Microsoft、Cursor、Perplexity、Canva、Notion、Grammarly、Slack、Zapier、ElevenLabs、Gamma、PLAUD、Todoist、Motion、Dropbox は、確認したページに日本の登録番号がありませんでした。最初の請求書のPDFに「T」で始まる番号があるかを見て、あれば下の手順で公表サイトで照合してください。なければ、各社のサポートに問い合わせるのが確実です。
- **OpenAIの登録年月日**: OpenAIのヘルプでは2025年1月1日から消費税を請求していますが、公表サイトの登録年月日は2026年1月1日でした。2025年中の請求書が適格請求書に当たるかは、ヘルプに書かれていませんでした。
- **Google Workspaceの2つのページの違い**: 特定商取引法の表記(オンライン申込は消費税を請求)と、英語版ヘルプの日本の項(Google Asia Pacificと契約する顧客には請求しない)が一致しませんでした。請求書に消費税の行があるかで確かめてください。
- **Google Asia Pacific・アドビ株式会社・DeepL SEの番号**: 公表サイトに登録はありますが、各社の公式ページでその番号が自社の請求書に載ると確かめられたわけではありません(Googleはページに記載なし、アドビとDeepLはページが403)。
- **アプリ内課金の領収書**: ChatGPT・Claude・Perplexity・Canva・Todoist・Dropbox などは、App Store・Google Playで契約した分の領収書はストアから出ると書いています。ストアの領収書が適格請求書の記載事項を満たすかは、各ツールのページには書かれていませんでした。
- **ドル建ての請求書の円換算**: OpenAI・Anthropicは消費税額を円で表示、GitHubはドルと円の両方で表示と書いています。ほかの会社の円の表示は記載がありませんでした。

## 確認の手順(登録番号を自分で照合する)

1. 請求書(PDF)の中から「T」で始まる13桁の番号を探します。AWSは請求書下部のフッターに灰色の文字で書かれていると案内しています。
2. 国税庁の[適格請求書発行事業者公表サイト](https://www.invoice-kohyo.nta.go.jp/)を開き、「T」を除いた13桁を入力して検索します。最大10件までまとめて検索することもできます。
3. 表示される「氏名又は名称」が請求書の発行元と同じか、「登録年月日」が請求の日付より前かを見比べます。
4. 番号が見つからない、名称が違う場合は、そのツールのサポートに問い合わせます。仕入税額控除に使えるかの判断は、税理士か税務署に確認してください。

## よくある質問

**Q. 海外のAIツールに日本の消費税はかかりますか。**
会社によります。OpenAI・Anthropic・GitHub・Zoom・Notion・Slack・Zapier・AWSは、日本の利用者に消費税を加算すると公式に書いています。アドビ・DeepL・Nottaは円の税込価格で表示しています。Cursor・Perplexity・Grammarly・Todoist・Motion などは、日本の消費税について公式の記載がありませんでした(2026年11月22〜23日確認)。

**Q. 登録番号が書かれていない請求書でも仕入税額控除を受けられますか。**
国税庁の説明では、仕入税額控除には原則として売手から受け取ったインボイスの保存が必要で、インボイスには売手の登録番号を書く決まりです。簡易課税制度や2割特例などを使う場合は保存がなくても控除できるとされています。自分の場合にどうなるかは、税理士か税務署に確認してください。

**Q. 個人事業主と会社で違いはありますか。**
消費税の上乗せは、個人・法人を問わずかかると書いている会社が多くあります。Anthropicのお知らせでは、課税事業者である法人は適格請求書で仕入税額控除を受けられ、個人の顧客は控除を受けられないとされています。個人事業主として消費税を申告している場合の扱いは、税理士か税務署に確認してください。

**Q. iPhoneやAndroidのアプリで契約した場合、請求書はどこで受け取りますか。**
ChatGPT・Claude・Perplexity・Canva・Todoist・Dropbox などの公式ヘルプでは、アプリで契約した分の領収書はApple(App Storeの購入履歴)かGoogle(Google Playの「お支払いと定期購入」など)から出るとされています。ツールの請求画面には表示されません。

**Q. 登録番号が本物かどうかはどう確かめますか。**
国税庁の適格請求書発行事業者公表サイトで、「T」を除いた13桁を入力すると、登録されている名称と登録年月日が表示されます。この記事の一覧で「照合済み」としたものは、2026年11月22日にこの方法で確かめました。

**Q. 一覧にないツールの扱いはどう調べればよいですか。**
そのツールのヘルプで「JCT」「Japanese Consumption Tax」「Japan」「invoice」を検索し、日本向けの記載があるかを見ます。見つからなければ、最初の請求書に消費税の行と「T」で始まる番号があるかを確かめ、番号があれば公表サイトで照合してください。

## この記事の確認

- 確認者: 運営者
- 確認日: 2026年11月22日〜23日
- 見た公式ページ: 各社の公式ヘルプ・料金ページ・規約 約60件、国税庁のページ・パンフレット 5件
- 公表サイトで照合した登録番号: 10件(OpenAI OpCo, LLC、Anthropic, PBC、GitHub, Inc.、Zoom Communications, Inc.、Notta株式会社、アマゾンウェブサービスジャパン合同会社、Amazon Web Services, Inc.、Google Asia Pacific Pte. Ltd.、アドビ株式会社、DeepL SE)
- 自動取得を拒否されて読めなかったページ: アドビのインボイス制度のヘルプ、DeepLのインボイス制度のヘルプ、Nottaの領収書のヘルプ、PLAUDの会員プランのヘルプ、Gammaの料金ページ、Midjourneyのヘルプ、Otter.aiの売上税のよくある質問(いずれも403)。PLAUDの商品ページは429で再確認できず
- 各ツールの料金や機能は、それぞれの記事([Claude](/reviews/claude-ai-review/)・[GitHub Copilot](/reviews/github-copilot-review/)・[Cursor](/reviews/cursor-review/)・[DeepL](/reviews/deepl-review/)・[Zapier](/reviews/zapier-review/)・[Microsoft Copilot](/reviews/microsoft-copilot-review/)・[Amazon Q Developer](/reviews/amazon-q-developer-review/)・[Notta](/reviews/notta-price-plans/)・[PLAUD NOTE](/reviews/plaud-note-price-plans/)など)にまとめています
- 確認の手順は[運営者情報と編集方針](/about/)に書いています
