# awesome-design-md-jp

日本語 UI のための DESIGN.md 集。欧米向け抽出では欠ける和文組版を、サービス別に固定する。

## なぜ別コレクションが必要か

英語圏の DESIGN.md は日本語タイポを持たない。エージェントは次を落とす。

- 和文 → 欧文 → generic のフォールバック
- 行間 1.7〜2.0（欧文の 1.4〜1.5 では詰まる）
- 本文の字間 0.02〜0.08em
- 禁則（句読点・括弧の行頭行末）
- OpenType（`palt`, `kern`）
- 和欧混植のサイズ差とウェイト差

## 収録の型

Apple JP、MUJI、Mercari、SmartHR、freee、note、デジタル庁、UNIQLO など。各サイトに `DESIGN.md` とトークン可視化用 `preview.html`。ギャラリーは 400 件超。

## AwesomeDS への取り込み

- 日本語プロダクトでは IBM Plex Sans JP / Noto Sans JP を本文の第一候補にする。
- 見出しが欧文セリフでも、本文は和文サンセリフを切らない。
- 行長は 35〜45 字。見出しで英文を混ぜるときはトラッキングを本文より締める。

## ソース

- https://github.com/kzhrknt/awesome-design-md-jp
