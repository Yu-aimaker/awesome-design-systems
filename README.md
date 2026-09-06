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

プラグインの入れ方は `Plugin/README.md`。

## ショーケース

```bash
cd apps/web
pnpm install
pnpm dev
```

Vercel の Root Directory は `apps/web`。設定は `apps/web/vercel.json`。

## 更新ルール

- トークンを変えたら `AwesomeDS/tokens.json` と `apps/web/src/lib/tokens.ts` を同じにする。
- 外部ソースを足したら Knowledge の MD と `Reference/LINKS.md` の両方を更新する。
- 使わないドキュメントを増やさない。
