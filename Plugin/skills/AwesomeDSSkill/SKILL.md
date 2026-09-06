---
name: AwesomeDSSkill
description: Apply AwesomeDS tokens, type, space, motion, and component rules to product frontend work. Use when building or restyling web UI, picking a stack, or when the user asks to follow AwesomeDS.
---

# AwesomeDS を製品に適用する

作業を始める前に `AwesomeDS/DESIGN.md` と `AwesomeDS/AGENTS.md` を読む。数値は `AwesomeDS/tokens.json`（reference → semantic → component）。部品は semantic だけ使う。

## 手順

1. 対象画面の目的を1文で書く。書けないなら `DesignThinkingSkill` に渡す。
2. 色・型・余白・半径・動きをトークンから取る。Hex や `rounded-2xl` を場当たりで置かない。
3. 部品は `AwesomeDS/components.md` の variant 名を使う。無い部品は shadcn 型で足し、正本にフィードバックする。
4. 日本語 UI なら `typography.md` の組版を守る。本文を Inter に戻さない。Latin は Geist、日本語は Noto Sans JP。
5. 実装後、自分で `DesignVerifier` の短いチェックを回す。

## 必須

- ページ地は `background`。本文は `foreground`。決定は `primary`。
- shadcn をコピーしたら必ずリテーマする。zinc / Inter / 大きな丸を残さない。
- チャット面は assistant-ui primitives。動きの既定は `motion/react`。
- 1面の primary は1つ。
- フォーカスリングを消さない。
- `prefers-reduced-motion` を実装する。
- コピーは事実。比喩、空中のスローガン、ダッシュ連打を書かない。

## 禁止

- 紫グラデ、ガラス、全面丸、空中に浮いたヒーローコピー。
- 3つ目のアクセント色。
- 説明のない Lottie / 3D。
- 「モダンで洗練された」をデザイン判断の根拠にすること。

## スタックの既定

- Web: Next.js App Router、TypeScript strict、Tailwind、shadcn 型部品。
- チャット面が必要なら assistant-ui を足す。
- 3D が必要なら `three` を直接。ラッパーは必須になるまで入れない。
