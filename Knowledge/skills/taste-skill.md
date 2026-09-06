# taste-skill（Leonxlnx）

AI が出しがちな「同じ顔のフロント」を避けるためのポータブル Skill 群。実装 Skill と、参照画像を出す Skill に分かれる。

## 要点

- 既定 Skill は `design-taste-frontend`（v2）。ブリーフからデザイン言語を推定し、VARIANCE / MOTION / DENSITY の3ダイヤルで振る。
- 禁止事項が具体的。em ダッシュ連打、Inter 一択、紫グラデ、全面ガラス、中央揃えヒーローの量産を嫌う。
- 派生: GPT 向けの厳しめ、既存改修、ミニマル、ブルータル、Stitch/`DESIGN.md` 出力、画像→コード。
- フレームワーク非依存。React / Vue / Svelte いずれも「意図」を先に固定する。

## AwesomeDS への取り込み

- ダイヤルは正本では固定する。AwesomeDS 本体は VARIANCE 低、MOTION 低〜中、DENSITY 中。
- プロダクト専用 DS を切るときだけダイヤルを動かす（DSCreator）。
- 「高級に見せる」より「情報の優先順位が読める」を先に検証する。

## ソース

- https://github.com/Leonxlnx/taste-skill
