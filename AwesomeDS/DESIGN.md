# AwesomeDS DESIGN.md

Stitch 9節。エージェントはこれを先に読む。数値の正本は `tokens.json`。実装は semantic トークンだけ使う。STA-11 ロック。

## 1. Visual Theme & Atmosphere

白地、濃色の文字、青の決定色。密度は中。装飾は少なく、階層は型と余白で付ける。

品質の4点: Useful / Intuitive / Delightful / Polished。思考の6軸: Purpose / Agency / Simplicity / Craft / Delight / Long-view。

**Responsibility（stop / undo）:** 破壊操作は止められる。送信後は戻れるか、失敗しても次の手が残る。止められない流れは作らない。

JA first、英語ラベルは短く併記。本文行間 1.75、行長 35–45 字。CSS は `line-break: strict`（禁則）。`palt` は本文のみ。見出しは `kern`、`palt` を切る。

## 2. Color Palette & Roles

Reference（oklch）→ semantic → component。部品は semantic だけ。

| Semantic | Light | Dark | 役割 |
| --- | --- | --- | --- |
| background | paper.100 | ink.900 | 白地 |
| foreground | ink.900 | paper.100 | 濃色本文 |
| card | paper.50 | ink.800 | カード |
| primary | blue.700 | blue.400 | 決定・進行。1面に1つ |
| muted-foreground | ink.500 | ink.400 | 補助文 |
| border | paper.300 | ink.700 | ヘアライン |
| destructive | rust.700 | rust.400 | 破壊。primary の再利用禁止 |
| funnel | funnel.600 | funnel.400 | 任意。1面に最大1–2 |
| ring | ink.900 | paper.100 | フォーカス |

ブランドは白 + 濃色 + 青。Funnel Orange（`funnel`）はハイライト専用。ナビや全面 CTA に使わない。紫グラデは禁止。

## 3. Typography Rules

| 役割 | ファミリー |
| --- | --- |
| Latin UI | Geist |
| 日本語 | Noto Sans JP |
| Mono | Geist Mono |

| Token | size | line | tracking | weight |
| --- | --- | --- | --- | --- |
| display | 48 | 1.15 | -0.03em | 500 |
| title | 32 | 1.25 | -0.02em | 500 |
| heading | 22 | 1.4 | -0.015em | 500 |
| body | 16 | 1.75 | 0.01em | 400 |
| small | 13 | 1.65 | 0.01em | 400 |
| label | 12 | 1.4 | 0.06em | 500 |

Inter を既定にしない。ウェイトは 400 / 500 / 600。

## 4. Component Stylings

shadcn 型（Phase1 の既定。Base UI への切替はしない）。コピーしたあと必ずこのトークンでリテーマする。チャット面は assistant-ui primitives。

- Button: h-10、radius md。primary / secondary / ghost / destructive。
- Input: ラベル上。プレースホルダをラベル代わりにしない。
- Card: padding 24、border、影なし。
- Badge: radius sm。情報は border、選択は primary の薄い面。
- Focus: 2px ring。消さない。
- アイコン: Phosphor、16–20px。

## 5. Layout Principles

4px 単位。space 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96。

ページ幅 1080、レール 232、ガター 24。セクション間 64。カード間 32。

## 6. Depth & Elevation

面は background / card / popover の3段。影は使わず border（ヘアライン）。浮かせるときだけ `0 1px 0` の線。

## 7. Do's and Don'ts

Do: 目的を1文で置く。primary は決定にだけ。破壊は stop / undo を残す。Reduce Motion を実装する。キャプチャで検証する。

Don't: 紫グラデ、Inter 既定、偽スクリーンショット、16px 超の全面丸、Funnel を3つ以上、説明のない 3D、空中のスローガン。

## 8. Responsive Behavior

ブレークポイント: 390 / 768 / 1080。モバイル左右ガター 16 以上。タップ 40px、主要操作 44px。レールは `lg` 未満で上の横スクロールナビへ。

## 9. Agent Prompt Guide

```
AwesomeDS/DESIGN.md と tokens.json に従え。
semantic トークン以外の Hex を部品に書くな。
日本語 UI は Noto Sans JP、行間 1.75、禁則。
1面の primary は1つ。Funnel Orange は任意で最大1–2。
prefers-reduced-motion を実装しろ。
比喩とダッシュ連打を書くな。
終わったら DesignVerifier のキャプチャ表を回せ。
```

Quick colors: background `paper`、foreground `ink`、CTA `blue`、optional `funnel`、danger `rust`。
