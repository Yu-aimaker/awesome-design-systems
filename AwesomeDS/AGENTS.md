# AGENTS.md

このリポジトリでフロントを触るときの手順。見た目の仕様は `AwesomeDS/DESIGN.md`。

## 読む

1. `DESIGN.md`（9節）
2. `tokens.json`（reference → semantic → component）
3. 作業種に合う Plugin Skill 1本

## 実装

- CSS 変数は shadcn 名（`--background`, `--primary`, `--border`…）。oklch。`.dark` を持つ。
- 部品は semantic だけ。reference の `blue.700` を JSX に書かない。
- shadcn をコピーしたら、必ず AwesomeDS でリテーマする。既定の zinc / Inter / 大きな丸を残さない。Phase1 は shadcn 既定。Base UI へ切り替えない。
- Funnel Orange（`funnel`）は任意。1面に最大1–2。primary の代わりにしない。
- チャット面は `@assistant-ui/react` の primitives。独自スレッドを再発明しない。
- 動きの既定は `motion/react`。Lottie は結果の合図。three.js は軽い島だけ。
- アイコンは Phosphor。shadcn CLI の既定 lucide はコピー後に差し替える。

## 検証

`Plugin/skills/DesignVerifier` のキャプチャ表。1枚の見た目確認で終わらない。

## 更新

トークンを変えたら `tokens.json`、`DESIGN.md`、`apps/web/src/app/globals.css`、`apps/web/src/lib/tokens.ts`、`preview.html` を同じにする。
