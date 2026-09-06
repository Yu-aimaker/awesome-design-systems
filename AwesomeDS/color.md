# 色

白地に濃色の文字。決定色は semantic `primary`（青）。Funnel Orange は任意で1面に最大1–2。破壊は `destructive`。数値の正本は `tokens.json` と `DESIGN.md`。部品に Hex を書かない。

| Token | 役割 |
| --- | --- |
| `background` | 白地。ページの面 |
| `foreground` | 本文・見出し |
| `card` | カード・入力の面 |
| `primary` | 決定・進行。1面に1つ |
| `muted-foreground` | 補助文。本文の代わりにしない |
| `border` | ヘアライン。影の代わり |
| `funnel` | Funnel Orange。印・ハイライトだけ |
| `destructive` | 破壊操作とエラー。赤。Funnel Orange と混ぜない。primary の再利用禁止 |

## なぜこの組み合わせか

- 白地 + 濃色は汎用正本として製品ブランドを上書きしやすい（STA-11）。
- 青は進行と信頼。紫は 2024–26 の AI サイト既定なので使わない。
- Funnel Orange は報酬や印に残す。画面の第2ブランドにはしない。
- コントラスト: `foreground` on `background` は本文に十分。`muted-foreground` はキャプション専用。
- `destructive` は赤（hue 22）。Funnel Orange（hue 48）と並べて誤認しない。

## 禁止

- 背景にグラデを敷く
- カードごとに違うアクセント
- Funnel を CTA やナビ全面に塗る
- 白 80% オーバーレイのガラス
