import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { InteractiveKit } from "@/components/showcase/interactive";
import { LottieMark } from "@/components/showcase/lottie-mark";
import { Section } from "@/components/showcase/section";
import { TokenOrbit } from "@/components/showcase/token-orbit";
import { knowledgeItems } from "@/lib/knowledge";
import { colorRoles, tokens } from "@/lib/tokens";

const typeRows = [
  { name: "display", sample: "見出しは読む前に順位を決める", spec: tokens.type.display },
  { name: "title", sample: "セクションは作業の単位", spec: tokens.type.title },
  { name: "heading", sample: "カードの題は1行で終わる", spec: tokens.type.heading },
  { name: "body", sample: "本文は16px、行間1.75。日本語は35〜45字で折り返す。", spec: tokens.type.body },
  { name: "small", sample: "注釈とヘルプ。本文の代わりにしない。", spec: tokens.type.small },
  { name: "label", sample: "TOKEN / LABEL", spec: tokens.type.label },
] as const;

const principles = [
  { n: "01", t: "目的が先", d: "画面は今の作業と次の一手が先に読める。世界観の説明は置かない。" },
  { n: "02", t: "階層は型と余白", d: "色や影で順位をごまかさない。サイズ、行間、間隔の3つで付ける。" },
  { n: "03", t: "アクセントは決定", d: "森色は保存・次へ・成功。ナビとアイコン全部には塗らない。" },
  { n: "04", t: "日本語を前提", d: "本文は和文サンセリフ。行間1.75。禁則を切らない。" },
  { n: "05", t: "状態を隠さない", d: "空、読込、失敗を設計する。スケルトンだけで動かない。" },
  { n: "06", t: "動きは結果の合図", d: "値が変わったときだけ動かす。180ms。ループ装飾は置かない。" },
];

export function Gallery() {
  return (
    <div>
      <header className="pb-12">
        <Badge>Canon 0.1.0</Badge>
        <h1 className="mt-5 max-w-[18ch] font-display text-[48px] leading-[1.15] tracking-[-0.02em] text-ink">
          AwesomeDS
        </h1>
        <p className="mt-5 max-w-[40rem] text-[16px] leading-[1.75] tracking-[0.02em] text-ink-muted">
          エージェントがそのまま使える正本。このページの色・書体・余白・部品は
          <code className="mx-1 font-mono text-[13px] text-ink">AwesomeDS/tokens.json</code>
          と同じ値です。ブランドが無いときはこれを直接使う。
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-4 text-[13px] sm:grid-cols-4">
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-ink-subtle">地</dt>
            <dd className="mt-1 text-ink">紙 / 墨</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-ink-subtle">決定色</dt>
            <dd className="mt-1 text-ink">森 #1F4D3A</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-ink-subtle">本文</dt>
            <dd className="mt-1 text-ink">IBM Plex Sans JP</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-ink-subtle">見出し</dt>
            <dd className="mt-1 text-ink">Newsreader</dd>
          </div>
        </dl>
      </header>

      <Section
        id="color"
        eyebrow="Color"
        title="色"
        why="暖色の紙に墨。アクセントは進行と決定だけ。紫とグラデは 2024–26 の生成 UI 既定なので使わない。"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {colorRoles.map((swatch) => (
            <figure key={swatch.name} className="overflow-hidden rounded-md border border-line bg-surface">
              <div className="h-16" style={{ background: swatch.hex }} />
              <figcaption className="flex flex-col gap-1 p-3">
                <span className="font-mono text-[12px] text-ink">{swatch.name}</span>
                <span className="font-mono text-[11px] text-ink-subtle">{swatch.hex}</span>
                <span className="text-[13px] text-ink-muted">{swatch.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="type"
        eyebrow="Typography"
        title="書体"
        why="見出しはセリフ、本文は和文サンセリフ。本文16 / 行間1.75は日本語の可読域。Geist と Inter は既定にしない。"
      >
        <div className="divide-y divide-line rounded-lg border border-line bg-surface">
          {typeRows.map((row) => (
            <div key={row.name} className="grid gap-3 px-5 py-5 md:grid-cols-[7rem_1fr_8rem]">
              <p className="font-mono text-[12px] text-ink-subtle">{row.name}</p>
              <p
                className={row.name === "display" || row.name === "title" || row.name === "heading" ? "font-display text-ink" : "text-ink"}
                style={{
                  fontSize: row.spec.size,
                  lineHeight: row.spec.line,
                  letterSpacing: row.spec.tracking,
                  fontWeight: row.spec.weight,
                }}
              >
                {row.sample}
              </p>
              <p className="font-mono text-[11px] text-ink-subtle">
                {row.spec.size} / {row.spec.line}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="space"
        eyebrow="Spacing"
        title="余白"
        why="4px 単位。セクション間は64。カード間は32。同じ階層で余白をバラバラにしない。"
      >
        <div className="flex flex-col gap-3">
          {Object.entries(tokens.space).map(([key, px]) => (
            <div key={key} className="flex items-center gap-4">
              <span className="w-10 font-mono text-[12px] text-ink-subtle">{key}</span>
              <div className="h-3 bg-accent" style={{ width: px }} />
              <span className="font-mono text-[12px] text-ink-muted">{px}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="radius"
        eyebrow="Radius"
        title="角丸"
        why="8と12が基本。16以上の全面丸と、ボタンだけ pill の混在はしない。"
      >
        <div className="grid gap-4 sm:grid-cols-4">
          {(
            [
              ["sm", tokens.radius.sm],
              ["md", tokens.radius.md],
              ["lg", tokens.radius.lg],
              ["full", tokens.radius.full],
            ] as const
          ).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-3 rounded-lg border border-line bg-surface p-5">
              <div
                className="h-16 w-16 border border-line bg-accent-soft"
                style={{ borderRadius: value === 9999 ? 9999 : value }}
              />
              <p className="font-mono text-[12px] text-ink">
                {name} · {value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="components"
        eyebrow="Components"
        title="部品"
        why="shadcn 型。コピーしてトークンを接続する。チャット面が要るときだけ assistant-ui を足す。"
      >
        <InteractiveKit />
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>line</Badge>
          <Badge tone="accent">選択中</Badge>
          <Badge tone="copper">注意</Badge>
        </div>
      </Section>

      <Section
        id="motion"
        eyebrow="Motion"
        title="動き"
        why="120 / 180 / 280ms。意味が変わったときだけ動かす。three.js は空間の説明、Lottie は結果の合図。Reduce Motion では軌道を止める。"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-subtle">
              three.js · トークン軌道
            </p>
            <TokenOrbit />
            <p className="mt-3 text-[13px] leading-[1.6] text-ink-muted">
              紙・森・銅。色の役割が3つで足りることを示す。自動で回り、設定で静止する。
            </p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-subtle">
              Lottie · 完了
            </p>
            <LottieMark />
            <p className="mt-3 text-[13px] leading-[1.6] text-ink-muted">
              保存成功など、値が確定した瞬間に一度だけ再生する。ループしない。
            </p>
          </div>
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-line bg-surface p-4">
            <dt className="font-mono text-[11px] text-ink-subtle">fast</dt>
            <dd className="mt-1 text-ink">{tokens.motion.fast}ms · 色と線</dd>
          </div>
          <div className="rounded-md border border-line bg-surface p-4">
            <dt className="font-mono text-[11px] text-ink-subtle">base</dt>
            <dd className="mt-1 text-ink">{tokens.motion.base}ms · ホバーとパネル</dd>
          </div>
          <div className="rounded-md border border-line bg-surface p-4">
            <dt className="font-mono text-[11px] text-ink-subtle">slow</dt>
            <dd className="mt-1 text-ink">{tokens.motion.slow}ms · 階層の変化</dd>
          </div>
        </dl>
      </Section>

      <Section
        id="principles"
        eyebrow="Principles"
        title="原則"
        why="好みより、人が迷わず作業を終えられるか。検証はブラウザで行う。"
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.n} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-mono text-[11px] text-ink-subtle">{item.n}</p>
              <p className="mt-2 font-display text-[22px] leading-[1.35] text-ink">{item.t}</p>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-muted">{item.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="knowledge"
        eyebrow="Knowledge"
        title="知見"
        why="ソースを要約して積む。リンクの正本は Reference/LINKS.md。"
      >
        <ul className="divide-y divide-line rounded-lg border border-line bg-surface">
          {knowledgeItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex flex-col gap-1 px-5 py-4 hover:bg-accent-soft/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px] text-ink">{item.title}</span>
                  <span className="font-mono text-[11px] text-ink-subtle">{item.topic}</span>
                </span>
                <span className="text-[13px] text-ink-muted">{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
