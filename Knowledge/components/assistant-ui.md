# assistant-ui

チャット UI のオープンソースキット。ドキュメントの Elements ギャラリーが、部品を「説明 + 実物」で並べる見本になる。

## 要点

- Thread / Composer / Markdown / Tool UI を、プロダクトのチャット面に埋め込む。
- サイトはサイドナビ + 実プレビュー。コピーは短く、部品の役割が先に読める。
- アニメーションは装飾ではなく、送信・生成・ストリームの状態を示す。
- React 前提。見た目はトークンで差し替え可能。

## AwesomeDS への取り込み

- ショーケースの情報設計は Elements に合わせる。セクション見出し、短い「なぜ」、その下に触れるプレビュー。
- チャット製品以外でも、状態（idle / loading / error）を部品仕様に含める。
- ライブラリ推奨: チャット面は assistant-ui、汎用面は shadcn 型。両方を同時に「独自再発明」しない。

## ソース

- https://github.com/assistant-ui/assistant-ui
- https://www.assistant-ui.com/
