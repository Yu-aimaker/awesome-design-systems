# 動き

| Token | 値 | 用途 |
| --- | --- | --- |
| fast | 120ms | 色、ボーダー |
| base | 180ms | ホバー移動、パネル |
| slow | 280ms | 大きな階層変化 |
| ease | `cubic-bezier(0.2, 0, 0, 1)` | 標準。ease-in-out は使わない |

## 規則

1. 意味が変わらない動きは付けない。
2. `prefers-reduced-motion: reduce` では duration を 1ms にする。
3. スプリング / バウンスは正解フィードバック以外禁止。
4. ループする装飾（無限グラデ、浮遊カード）は禁止。
5. 3D（three.js）と Lottie は「状態のデモ」か「空間の説明」に限る。自動再生は短く、停止手段を置く。

## 推奨ライブラリ

- UI 遷移: CSS。追加ライブラリ不要。
- 複雑なタイムライン: Motion（旧 Framer Motion）は必要な画面だけ。
- イラストの再生: `lottie-react`（このショーケースが使用）。
- 空間・データ: `three` を直接。`@react-three/fiber` は必須になるまで入れない。

## 根拠

HIG の Reduce Motion、Material の持続時間セット、taste-skill の低モーション既定。
