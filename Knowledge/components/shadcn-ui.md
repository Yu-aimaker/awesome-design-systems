# shadcn/ui

パッケージとして配るコンポーネントライブラリではない。コードをリポジトリにコピーし、自前の DS として育てる配布方式。

## 要点

- Open Code: 上書き用ラッパーを増やさず、部品本体を直す。
- 共通インターフェース（`className` + `cn` + CVA 的な variant）。エージェントが次の部品を足しやすい。
- 既定の見た目は最小。色・半径・影は CSS 変数に閉じる。
- Phase1 の部品基盤は shadcn。Base UI への切替はしない。振る舞い（フォーカス、ダイアログ）は shadcn が借りているものを使う。

## AwesomeDS への取り込み

- 正本の部品は shadcn 型（コピーしてトークン接続）を採用する。
- 既定の zinc + 16px 丸は使わない。AwesomeDS の白地・青・8px 半径に差し替える。
- 新規部品は既存の variant 名（`default` / `secondary` / `ghost` / `destructive`）を壊さない。

## ソース

- https://ui.shadcn.com/docs
- https://ui.shadcn.com/
