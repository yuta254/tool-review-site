---
title: "AIブラウザの現状:Perplexity Comet でできることと、提供終了した ChatGPT Atlas"
seoTitle: "AIブラウザの現状:CometとAtlasの提供終了"
description: "PerplexityのAIブラウザ「Comet」の対応OS・無料で使える範囲・プラン別のブラウザエージェントの回数・データの扱いと、提供終了したChatGPT Atlasの現状、OpenAIのデスクトップアプリ内蔵ブラウザとChrome拡張機能を公式ヘルプで整理します(2026年11月22日確認)。"
pubDate: 2026-07-05
updatedDate: 2026-11-22
category: "AIチャット・エージェント"
tags: ["Comet", "Perplexity", "ChatGPT Atlas", "OpenAI", "AIブラウザ", "エージェントAI", "ブラウザ拡張"]
---

## この記事の結論

- AI ブラウザの主な2製品のうち、**Perplexity の Comet は提供が続いており、OpenAI の ChatGPT Atlas は提供を終了している**。OpenAI の公式ヘルプでは、Atlas は「提供終了(retired)となり、今後は更新されない」とされている(2026年11月22日確認)
- Comet は無料でダウンロードでき、Perplexity のアカウントがなくても Web の閲覧と基本的な AI 機能を使える(2025年10月2日から全世界に無料で公開)
- ただし、Perplexity のプラン比較では、**ページの操作を代わりに進める「ブラウザエージェント(Comet Assistant)」の回数は、無料プランが「No」**。Pro・Max は月の上限あり、Enterprise Pro は月80回、Enterprise Max は月800回
- Comet の対応OSは、ヘルプでは Windows 10・11 と macOS 13 以降。製品ページは「Mac・Windows・iOS・Android」と書いているが、同じヘルプでは iOS・Android は公式サポートの対象外とされ、記載が分かれている
- 閲覧履歴・Cookie・パスワードは端末に保存され、アシスタントが受け取るのは依頼に必要な範囲だけ。ページやタブを使った依頼の内容は最大30日保存され、その後自動で削除される
- ChatGPT と一緒にブラウジングしたい場合は、macOS・Windows の ChatGPT デスクトップアプリの内蔵ブラウザか、Chrome 用の ChatGPT 拡張機能が OpenAI のヘルプで案内されている

この記事は、Perplexity と OpenAI の公式ページ(Comet の製品ページ、Perplexity のヘルプセンター・公式ブログ、OpenAI のヘルプセンター)を2026年11月22日に確認してまとめたものです。当サイトでは Comet や ChatGPT のブラウザ機能を操作して確かめてはいません。

## AIブラウザ4つの現状

| | Perplexity Comet | ChatGPT Atlas | ChatGPTデスクトップアプリの内蔵ブラウザ | Chrome用のChatGPT拡張機能 |
| --- | --- | --- | --- | --- |
| 提供状況 | 提供中 | 提供終了(retired)。今後は更新されない | 提供中 | 提供中 |
| 形 | Chromium をもとにしたブラウザ | Mac 向けのブラウザだった | macOS・Windows のデスクトップアプリに内蔵 | Chrome に入れる拡張機能 |
| 土台 | Perplexity の検索 | ChatGPT | ChatGPT | ChatGPT(Web 版から使う) |
| 料金 | 無料でダウンロード。エージェントの回数はプランで違う | — | 使える機能はプランとワークスペースの設定で変わる | Chrome ウェブストアから入れる |

## 公式情報の確認表

| 項目 | 公式の記載 | 出典 | 確認日 |
| --- | --- | --- | --- |
| Comet の料金 | 2025年10月2日から全世界に無料で公開 | [公式ブログ](https://www.perplexity.ai/hub/blog/comet-is-now-available-to-everyone-worldwide) | 2026-11-22 |
| アカウントなしの利用 | アカウントがなくても Web 閲覧と基本的な AI 機能を使える。サインインでチャットの保存・端末間の同期・より強力な AI 機能と高い上限 | [ヘルプ「アカウントは必要か」](https://www.perplexity.ai/help-center/comet/en/articles/11583823-do-i-need-a-perplexity-account-to-use-comet) | 2026-11-22 |
| ブラウザエージェントの回数 | 無料「No」/Pro・Education Pro 月の上限(平均的な利用)/Max 月の上限(高度な利用)/Enterprise Pro 月80回/Enterprise Max 月800回 | [プランの選び方のヘルプ](https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you) | 2026-11-22 |
| 法人向けの料金 | Enterprise Pro は1席 月40ドルまたは年400ドルから。Education Pro は月10ドル(学生の確認が必要) | 同上 | 2026-11-22 |
| 対応OS(ヘルプ) | Windows 10・11(x64・ARM64)、macOS 13 以降(Intel・Apple シリコン)。Linux・ChromeOS・iOS・Android は公式サポートの対象外 | [動作環境のヘルプ](https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements) | 2026-11-22 |
| 対応OS(製品ページ) | 「Mac・Windows・iOS・Android で利用可能」 | [製品ページ](https://www.perplexity.ai/comet) | 2026-11-22 |
| 必要な性能 | メモリ4GB以上(8GB推奨)、空き容量2GB以上(長く使うなら5〜6GB)、画面 1280×800 以上 | [動作環境のヘルプ](https://www.perplexity.ai/help-center/comet/en/articles/11734730-operating-system-requirements) | 2026-11-22 |
| データの扱い | 閲覧履歴・タブ・Cookie・パスワード・自動入力・ローカルのファイルは初期状態で送られず端末に保存。依頼に必要な最小限の内容だけ送る。ページやタブを使った依頼は最大30日保存後に自動削除 | [アシスタントのプライバシーとデータ利用](https://www.perplexity.ai/help-center/comet/en/articles/12867415-comet-assistant-privacy-data-use) | 2026-11-22 |
| アシスタントの無効化 | 設定の「プライバシーとセキュリティ → Comet Assistant」で、全体を無効にするか、特定のサイトで使えなくできる | 同上 | 2026-11-22 |
| データの学習 | Comet のデータを AI の学習に使うかは、確認したアシスタントのページに記載なし | 同上 | 2026-11-22 |
| Atlas | 提供終了(retired)、今後は更新されない | [ChatGPT Atlas retirement](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement) | 2026-11-22 |
| 内蔵ブラウザ | macOS・Windows の ChatGPT デスクトップアプリで利用可。使える機能はプランとワークスペースの設定で変わる | [内蔵ブラウザのヘルプ](https://help.openai.com/en/articles/20001277-using-the-built-in-browser-in-the-chatgpt-desktop-app) | 2026-11-22 |

## Perplexity Comet でできること

Comet は、検索エンジンとしての Perplexity とは別の製品で、ブラウザそのものに AI アシスタントを組み込んでいます。公式ヘルプでは Chromium をもとにしたブラウザとされ、ブックマーク・ページ翻訳・多くの Chrome 拡張機能といった通常のブラウザの機能も備えています。公式ヘルプに挙がっている主な機能は次のとおりです。

- 今見ているページの内容を、横のパネル(アシスタント)で要約したり質問したりする
- 「@」でタブを指定して、複数のタブをまたいで情報を集めたり比べたりする
- Perplexity の検索が標準の検索エンジンになっている
- 自然な文章の指示で、Web サイト上の操作を代わりに進める(ブラウザエージェント。回数はプランで違う)
- Gmail との連携で、メールや予定表について質問する
- 広告ブロックや音声モード

公式ヘルプによると、高度なエージェントや自動化を初めて動かすときは「今回だけ許可」「常に許可」「許可しない」を選ぶ確認が出ます(2026年11月3日確認)。

## 条件別の選び方

Atlas は提供終了のため、いま比べる対象は Comet と、ChatGPT のデスクトップアプリ内蔵ブラウザ・Chrome 拡張機能です。

| 条件 | 選び方 | 理由(公式の記載) |
| --- | --- | --- |
| 調べ物が主目的で、ブラウザを切り替えてもよい | Perplexity Comet | Perplexity の検索が標準。無料でダウンロードできる |
| ページの要約や質問だけでよい | Comet の無料の範囲 | アカウントなしでも基本的な AI 機能を使える |
| サイトの操作を代わりに進めてほしい | Comet なら Pro 以上 | ブラウザエージェントの回数は無料が「No」 |
| 普段から ChatGPT を使っていて、その延長でブラウジングしたい | ChatGPT デスクトップアプリの内蔵ブラウザ | macOS・Windows のデスクトップアプリに内蔵 |
| 普段の Chrome のプロフィールやサインイン済みのサイトをそのまま使いたい | Chrome 用の ChatGPT 拡張機能 | 既存の Chrome のプロフィール・開いているタブ・拡張機能を使える。デスクトップアプリは不要 |
| Linux や Chromebook で使いたい | Comet は対象外 | Comet のヘルプで Linux・ChromeOS は公式サポートの対象外 |
| 会社で回数を決めて使いたい | Comet の Enterprise Pro・Max | 月80回・月800回と回数が明記されている |

Perplexity と他のリサーチ用の AI の違いは[Genspark・Perplexity・NotebookLMの違い](/reviews/genspark-perplexity-notebooklm-difference/)にまとめています。

## 公式の説明から分かる注意点

- **エージェントは代わりに操作する**: 指示の解釈を誤ると、意図しない操作になることがあります。OpenAI のヘルプでは、Web サイトの内容は信頼できないものとして扱い、ChatGPT が違うアカウントやページを開いたら作業を止めるよう案内しています。購入や送信のように取り消せない操作は、自分の目で確かめる前提で使う必要があります。
- **パスワードはチャットに書かない**: OpenAI のヘルプでは、認証情報はブラウザの画面でだけ入力し、チャットには書かないよう案内されています。
- **ページやタブを使った依頼は30日残る**: Comet のヘルプでは、こうした依頼は Perplexity のライブラリに「Temporary Session」として表示され、期限の解除や削除ができると説明されています。
- **製品ページとヘルプで対応OSの記載が違う**: スマートフォンで使う予定なら、ストアの表示とヘルプの両方を確かめる必要があります。

## 公式に書いていないこと

確認したページに見当たらなかった事項と、各自で確かめる方法です。

- **Pro・Max のブラウザエージェントの具体的な回数**: 「月の上限(平均的な利用/高度な利用)」とだけ書かれ、回数は示されていません。
- **無料でどこまでの AI 機能が使えるか**: 「基本的な AI 機能」とだけ書かれています。アカウントなしで Comet を入れ、ページの要約を頼んだときと、操作を頼んだときの表示の違いで確かめられます。
- **Comet のデータを学習に使うか**: アシスタントのプライバシーのページには書かれていませんでした。Perplexity のプライバシーポリシーと、アカウントの設定画面の項目を確かめてください。
- **日本語の画面と料金の税の扱い**: 確認したページに記載がありませんでした。
- **Atlas の提供終了の日付**: OpenAI のヘルプには終了の日付が書かれていませんでした。

## 終了・変更の記録

| 日付 | 出来事 | 出典 |
| --- | --- | --- |
| 2025年10月2日 | Comet を全世界に無料で公開 | [Perplexity の公式ブログ](https://www.perplexity.ai/hub/blog/comet-is-now-available-to-everyone-worldwide) |
| 2026年11月3日の確認時点 | ChatGPT Atlas は提供終了(retired)、今後は更新されないと OpenAI のヘルプに記載 | [ChatGPT Atlas retirement](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement) |
| 2026年11月22日の確認時点 | Atlas の状況は変わらず。Comet のプラン比較で、無料プランのブラウザエージェントの回数が「No」と表示 | 同上、[プランの選び方のヘルプ](https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you) |

## ChatGPT Atlas は提供終了

**2026年11月22日時点で、ChatGPT Atlas は提供を終了しています。** OpenAI の公式ヘルプ「[ChatGPT Atlas retirement](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement)」に、Atlas は提供終了(retired)となり、今後は更新されないと書かれています。いまから Atlas を新たに使い始めるのは避けたほうがよい状況です。

ChatGPT Atlas は、OpenAI が ChatGPT を中核に据えて開発した Mac 向けの AI ブラウザでした。閲覧中のページの要約や質問、ChatGPT に操作を任せるエージェント機能を1つのブラウザにまとめた製品で、Comet が検索の Perplexity を土台にしているのに対し、Atlas は ChatGPT との統合を軸にしていました。公式ヘルプで確認できた Atlas の案内は Mac 向けのものだけで、Windows 版は見当たりませんでした。

### 代わりにOpenAIが案内しているもの

OpenAI の公式ヘルプ「[Using the built-in browser in the ChatGPT desktop app](https://help.openai.com/en/articles/20001277-using-the-built-in-browser-in-the-chatgpt-desktop-app)」では、次の2つが案内されています。

- **ChatGPT デスクトップアプリの内蔵ブラウザ**: macOS と Windows の ChatGPT デスクトップアプリで使えます。ChatGPT から離れずに閲覧・サインイン・ファイルのダウンロードができ、サインイン・自動入力・パスワード管理・拡張機能にも対応するとされています。複数のタブをまたいだ作業も頼めます。新しいサイトを使う前に ChatGPT が確認を求め、「拒否」を選ぶとそのチャットでは記憶されます。ワークスペースの管理者はブラウザの機能を制限でき、個人の設定はそれを上書きできません
- **Chrome 用の ChatGPT 拡張機能**: Chrome ウェブストアから入れて、Web 版の ChatGPT から使います。普段の Chrome のプロフィール、サインイン済みのサイト、開いているタブ、Chrome の拡張機能を使いたい場合はこちらが案内されています。デスクトップアプリを入れる必要はなく、「@Chrome」と書くか「+」のメニューからタブを選んで呼び出します

なお、2026年11月22日に確認した「ChatGPT Atlas retirement」のページ自体は、これら2つの名前を挙げず、サポートされている別のブラウザへ移るよう案内する書き方になっていました。

### Atlasを使っていた人が確認すること

公式ヘルプ「ChatGPT Atlas retirement」の要点です(2026年11月22日確認)。

- ブックマーク・開いていたタブ・閲覧履歴は自動では引き継がれない。以前に書き出したブックマークの HTML ファイルがあれば、Chrome など他のブラウザに取り込める
- ChatGPT の会話は Atlas のブラウザのデータとは別なので、プランや設定の範囲で ChatGPT で引き続き使える
- Atlas の「ブラウザメモリー」は ChatGPT のメモリーとは別物。Atlas をアンインストールしたり ChatGPT のメモリーの設定を変えたりしても、そのデータが消えるとは考えないよう案内されている。Atlas のデータについての問い合わせや削除の依頼は、プライバシーポータルから出す
- Atlas をアンインストールしても、ChatGPT の有料プランは解約されない。解約は請求元の手順に沿って別に行う
- Atlas に保存した情報がまだ必要な場合は、ローカルのデータを消す前に OpenAI のサポートに連絡するよう案内されている

## よくある質問

**Q. Comet は無料で使えますか。**
ダウンロードは無料です。公式ヘルプによると、Perplexity のアカウントがなくても、インストール後すぐに Web 閲覧と基本的な AI 機能を使えます。ただし、プラン比較のヘルプでは、サイトの操作を代わりに進めるブラウザエージェント(Comet Assistant)の回数は無料プランが「No」で、Pro・Max に月の上限があるとされています(2026年11月22日確認)。

**Q. 普段のブラウザを置き換える必要がありますか。**
必要はありません。調べ物のときだけ使い分ける方法もあります。公式ヘルプによると、Comet には他のブラウザからブックマーク・履歴・パスワードなどを取り込む機能もありますが、全面的に移るかどうかは、しばらく併用してから判断しても遅くありません。

**Q. エージェント機能はどこまで任せられますか。**
情報を集めて要約するような「読む」作業から始めるのが安全です。フォームの送信や購入のように取り消せない操作は、確認を挟む前提で使ってください。OpenAI のヘルプも、違うアカウントやページが開いたら作業を止めるよう案内しています。

**Q. いまからChatGPT Atlasを入れて使えますか。**
避けたほうがよい状況です。OpenAI の公式ヘルプでは提供終了と案内されており、更新もされていません。ChatGPT と一緒にブラウジングしたい場合は、ChatGPT デスクトップアプリの内蔵ブラウザか、Chrome 用の ChatGPT 拡張機能が公式に案内されています。詳しくは「[ChatGPT Atlas は提供終了](#chatgpt-atlas-は提供終了)」の節を参照してください。

**Q. Windows版のAtlasはありますか。**
公式ヘルプで確認できた Atlas の案内は Mac 向けのものだけで、Windows 版は見当たりませんでした。Windows で ChatGPT と一緒にブラウジングしたい場合は、Windows 版の ChatGPT デスクトップアプリの内蔵ブラウザが案内されています。

## この記事の確認

- 確認者: 運営者
- 確認日: 2026年11月22日
- 見た公式ページ: 8件(Comet の製品ページ、Perplexity の公式ブログ、Perplexity のヘルプ4件〈アカウント・動作環境・アシスタントのプライバシー・プランの選び方〉、OpenAI のヘルプ2件〈Atlas の提供終了・内蔵ブラウザ〉)
- 前回(2026年11月3日)からの変更点: Atlas が提供終了である点は変わらず。プラン別のブラウザエージェントの回数(無料は「No」)、Enterprise Pro・Education Pro の料金、動作環境の性能の条件、製品ページとヘルプで対応OSの記載が違う点、内蔵ブラウザの機能と管理者の制限を新たに確認して追記。Atlas のヘルプが代わりの製品の名前を挙げなくなった点も記録した。「使い方のコツ」の節は、当サイトが操作して確かめた根拠がないため外しました
- 確認の手順は[運営者情報と編集方針](/about/)に書いています
