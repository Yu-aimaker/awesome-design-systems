# Awesome Design Systems

STARKIndustries の正本。AI コーディングエージェントがフロントを作るときのルール、知見、検証手順、およびそのルール自身で組んだショーケース。

ブランドがまだ無いプロダクトは `AwesomeDS/` を直接使う。ブランドがある場合は `Plugin/skills/DSCreator` で派生を切る。

## 構成

| パス | 役割 |
| --- | --- |
| `AwesomeDS/` | 正本。トークン、書体、色、余白、角、動き、部品、原則 |
| `Plugin/` | Cursor / Claude 用 Skill 4本 |
| `Knowledge/` | 題材別の要約。ソースリンク付き |
| `Reference/LINKS.md` | 外部リンクの一覧 |
| `apps/web/` | Next.js ショーケース。サイト自身が AwesomeDS を使う |

## エージェントの使い方

1. FE を書く・直す → `AwesomeDS/DESIGN.md` と `Plugin/skills/AwesomeDSSkill/SKILL.md`。semantic トークンだけ使う。
2. 製品専用 DS が必要 → `Plugin/skills/DSCreator/SKILL.md`。grilling が終わるまで実装しない。
3. 出来た画面を疑う → `Plugin/skills/DesignVerifier/SKILL.md`。ブラウザキャプチャ無しは完了にしない。
4. 誰のための画面か不明 → `Plugin/skills/DesignThinkingSkill/SKILL.md`。
5. 判断の根拠が要る → `Knowledge/` を読み、新しいソースは `Reference/LINKS.md` に足してから要約する。

同時に4 Skill を全部読まない。作業種で1本選ぶ。

プラグインは Sir 内部 / 私用。Marketplace へ出さない。入れ方は `Plugin/README.md`。

## ショーケース

```bash
cd apps/web
pnpm install
pnpm dev
```

Vercel に出すときは Root Directory を `apps/web` にする。`apps/web/vercel.json` の framework は nextjs。

## Phase1 done（STA-11）

骨格（Knowledge / Reference / AwesomeDS / Plugin / apps/web）と、トークンが体感できるショーケース MVP。

## Phase2 Verifier ルート

`cd apps/web && pnpm dev` のあと、実ブラウザで次を回す。1枚の見た目確認で終わらない。

| ルート | 見るもの |
| --- | --- |
| `/` | ヒーロー、色・書体・余白。白地 + 濃色 + 青 |
| `/#components` | 部品。空送信エラー、削除の stop / undo |
| `/#states` | 空 / 読込 / 失敗。再試行がある |
| `/#chat` | 会話。履歴を消すと空状態。直前を戻す |
| `/#motion` | Lottie は再生/停止。three.js は止まった島、任意で回す。Funnel はバッジと色見本だけ |
| `/#thinking` | ペルソナ2、ジャーニー6手、成功/失敗/中断 |
| `/knowledge` | 知見。ソースリンクは primary |
| `/knowledge` で存在しない語 | 空状態。「条件を消す」 |
| `/does-not-exist` | 404。先頭へ戻れる |

幅 390 とデスクトップ、Tab 往復、OS の Reduce Motion を必須。

## 更新ルール

- トークンを変えたら `AwesomeDS/tokens.json` と `apps/web/src/lib/tokens.ts` を同じにする。
- 外部ソースを足したら Knowledge の MD と `Reference/LINKS.md` の両方を更新する。
- 使わないドキュメントを増やさない。
