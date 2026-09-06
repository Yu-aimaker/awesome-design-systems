# 部品

実装は shadcn 型（コピーしてトークン接続）。Phase1 の既定は shadcn。Base UI へ切り替えない。見た目の既定は AwesomeDS トークン。チャット面が必要なら assistant-ui を足し、汎用部品は再発明しない。

## 共通

- フォーカスは semantic `ring` の 2px。消さない。
- 高さ: ボタン / 入力 40px。主要な送信は 44px。
- 角は `radius.md`。影は使わず `border`（ヘアライン）。
- アイコンは Phosphor、16–20px。

## Button

| variant | 使いどころ |
| --- | --- |
| primary | その面の唯一の前進 |
| secondary | キャンセル、代替 |
| ghost | テーブル行、ツールバー |
| destructive | 削除。確認を同じ面に置く |

1面に primary は1つ。disabled はコントラストを落とし、ツールチップで理由を書く。

## Input

ラベルは上。プレースホルダをラベル代わりにしない。エラーは `destructive` の文言を入力の下に置く。

## Card

パディング 24。タイトルは heading か body medium。カード全体をクリック可能にするなら、内側リンクを増やさない。

## Badge / Chip

選択できるチップは semantic `accent`。情報だけのバッジは `border` 枠。

## Tabs

選択タブは下線か、面の塗りどちらか一方。両方同時は禁止。

## Empty / Error

空は「何が無いか」と「最初の操作」。エラーは再試行を残す。イラスト必須にしない。

## ギャラリーの基準

assistant-ui Elements と同じ並び: 名前、1行の役割、触れるプレビュー、トークン参照。スクリーンショットだけのカタログにしない。
