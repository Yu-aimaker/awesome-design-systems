# Material Design 3

Google のトークン設計。色・型・動き・形状を「役割」で持ち、テーマを差し替える。

## 要点

- 色は primary / secondary / tertiary / surface / error。Hex を部品に直書きしない。
- 8dp グリッド。余白は 4 の倍数。
- 形状はロールごと（ボタンとシートで半径を変えてよいが、無秩序に変えない）。
- 動きはイージングと継続時間のセット。要素の意味が変わったときだけ動かす。
- 状態（hover / focus / pressed / dragged）をトークンで持つ。
- Material You の動的色は、ブランドが単色の製品では無理に使わない。

## AwesomeDS への取り込み

- スペーシング尺度は 4px ベース。
- サーフェスを paper / surface / raised の3段までに制限する。
- エラー色はアクセントの再利用禁止。独立した danger を持つ。

## ソース

- https://m3.material.io/
- https://m3.material.io/foundations
