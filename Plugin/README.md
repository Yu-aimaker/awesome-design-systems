# AwesomeDS Plugin

Cursor / Claude に入れる Skill 4本。正本はリポジトリ直下の `AwesomeDS/`。

## 入れる

この `Plugin/` を Cursor のローカルプラグインにコピーする。

```bash
cp -R Plugin ~/.cursor/plugins/local/awesome-ds
```

またはリポジトリをクローンした状態で、Cursor のプラグイン設定から `Plugin/` を指定する。

Claude Code の場合は各 `skills/*/SKILL.md` をプロジェクトの `.claude/skills/` へコピーする。

## Skill

| フォルダ | いつ使う |
| --- | --- |
| `AwesomeDSSkill` | 既存プロダクトの FE を AwesomeDS で実装・修正する |
| `DSCreator` | ブランドを聞いて、正本から製品 DS を切る |
| `DesignVerifier` | 出来た UI を敵対検証する。ブラウザキャプチャ必須 |
| `DesignThinkingSkill` | ペルソナ・動線・実操作から UI を直す |

同時に全部読まない。作業の種類で1本選ぶ。検証フェーズでは Verifier と DesignThinking を続けてよい。
