import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChatThread } from "@/components/showcase/chat-thread";
import { InteractiveKit } from "@/components/showcase/interactive";
import { LottieMark } from "@/components/showcase/lottie-mark";
import { MotionChip } from "@/components/showcase/motion-chip";
import { Section } from "@/components/showcase/section";
import { TokenOrbit } from "@/components/showcase/token-orbit";
import { knowledgeItems } from "@/lib/knowledge";
import { tokens } from "@/lib/tokens";

const typeRows = [
  { name: "display", sample: "見出しは読む前に順位を決める", spec: tokens.type.display },
  { name: "title", sample: "セクションは作業の単位", spec: tokens.type.title },
  { name: "heading", sample: "カードの題は1行で終わる", spec: tokens.type.heading },
  { name: "body", sample: "本文は16px、行間1.75。日本語は35〜45字で折り返す。", spec: tokens.type.body },
  { name: "small", sample: "注釈とヘルプ。本文の代わりにしない。", spec: tokens.type.small },
  { name: "label", sample: "TOKEN / LABEL", spec: tokens.type.label },
] as const;

const principles = [
  { n: "01", t: "Purpose", d: "この面の目的を1文で書く。書けない画面は作らない。" },
  { n: "02", t: "Agency", d: "Responsibility。止められる（stop）、やり直せる（undo）。失敗しても次の手が残る。" },
  { n: "03", t: "Simplicity", d: "部品を足す前に、コピーと順序で足りるか見る。" },
  { n: "04", t: "Craft", d: "semantic トークン、禁則、フォーカスを守る。" },
  { n: "05", t: "Delight", d: "結果が変わった瞬間だけ動かす。ループ装飾は置かない。" },
  { n: "06", t: "Long-view", d: "来週同じルールで部品を足せるか。例外を増やさない。" },
];

export function Gallery() {
  return (
    <div>
      <header className="pb-12">
        <Badge>Canon 0.3.0</Badge>
        <h1 className="mt-5 max-w-[18ch] text-[48px] leading-[1.15] font-medium tracking-[-0.03em] text-foreground">
          AwesomeDS
        </h1>
        <p className="mt-5 max-w-[40rem] text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
          Stitch 形式の正本。このページの CSS 変数は
          <code className="mx-1 font-mono text-[13px] text-foreground">AwesomeDS/tokens.json</code>
          の semantic 層と同じ。ブランドが無いときはこれを直接使う。
        </p>
        <p className="mt-2 max-w-[40rem] text-[13px] leading-[1.65] text-muted-foreground">
          Living canon for agents. Japanese first, English labels beside the work.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-4 text-[13px] sm:grid-cols-4">
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-muted-foreground">地</dt>
            <dd className="mt-1">白地 / 濃色 · .dark</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-muted-foreground">決定色</dt>
            <dd className="mt-1">primary · blue</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-muted-foreground">本文</dt>
            <dd className="mt-1">Geist + Noto Sans JP</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-[0.06em] text-muted-foreground">品質</dt>
            <dd className="mt-1">Useful / Intuitive / Delightful / Polished</dd>
          </div>
        </dl>
      </header>

      <Section
        id="color"
        eyebrow="Color"
        title="色"
        why="reference → semantic → component。部品は semantic だけ。決定は青1色。Funnel Orange は任意で1–2。紫グラデは置かない。"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {tokens.semantic.map((swatch) => (
            <figure key={swatch.name} className="overflow-hidden rounded-md border border-border bg-card">
              <div className="grid h-16 grid-cols-2">
                <div style={{ background: swatch.light }} />
                <div style={{ background: swatch.dark }} />
              </div>
              <figcaption className="flex flex-col gap-1 p-3">
                <span className="font-mono text-[12px]">{swatch.name}</span>
                <span className="text-[13px] text-muted-foreground">{swatch.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="type"
        eyebrow="Typography"
        title="書体"
        why="Latin は Geist、日本語は Noto Sans JP。本文 16 / 1.75 は日本語の可読域。Inter は既定にしない。"
      >
        <div className="divide-y divide-border rounded-lg border border-border bg-card">
          {typeRows.map((row) => (
            <div key={row.name} className="grid gap-3 px-5 py-5 md:grid-cols-[7rem_1fr_8rem]">
              <p className="font-mono text-[12px] text-muted-foreground">{row.name}</p>
              <p
                className="text-foreground"
                style={{
                  fontSize: row.spec.size,
                  lineHeight: row.spec.line,
                  letterSpacing: row.spec.tracking,
                  fontWeight: row.spec.weight,
                }}
              >
                {row.sample}
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">
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
              <span className="w-10 font-mono text-[12px] text-muted-foreground">{key}</span>
              <div className="h-3 bg-primary" style={{ width: px }} />
              <span className="font-mono text-[12px] text-muted-foreground">{px}px</span>
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
            <div key={name} className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-5">
              <div
                className="h-16 w-16 border border-border bg-accent"
                style={{ borderRadius: value === 9999 ? 9999 : value }}
              />
              <p className="font-mono text-[12px]">
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
        why="shadcn 型。コピーしたあと必ずリテーマする。チャット面は assistant-ui primitives。"
      >
        <InteractiveKit />
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>line</Badge>
          <Badge tone="accent">選択中</Badge>
          <Badge tone="funnel">Funnel</Badge>
        </div>
      </Section>

      <Section
        id="chat"
        eyebrow="assistant-ui"
        title="会話"
        why="Thread / Composer / Message は assistant-ui。色は AwesomeDS の semantic。API は呼ばないローカルデモ。"
      >
        <ChatThread />
      </Section>

      <Section
        id="motion"
        eyebrow="Motion"
        title="動き"
        why="既定は motion/react と CSS。Lottie は完了の合図。three.js はトークン3色の島。Reduce Motion では軌道を止める。"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              Lottie · 完了
            </p>
            <LottieMark />
            <p className="mt-3 text-[13px] leading-[1.65] text-muted-foreground">
              値が確定した瞬間に一度だけ再生する。ループしない。
            </p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              three.js · 島
            </p>
            <TokenOrbit />
            <p className="mt-3 text-[13px] leading-[1.65] text-muted-foreground">
              白・青・Funnel。ブランド3色の軽い島。Orange はこの島とバッジだけ。
            </p>
          </div>
        </div>
        <div className="mt-6">
          <MotionChip />
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-4">
            <dt className="font-mono text-[11px] text-muted-foreground">fast</dt>
            <dd className="mt-1">{tokens.motion.fast}ms · 色と線</dd>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <dt className="font-mono text-[11px] text-muted-foreground">base</dt>
            <dd className="mt-1">{tokens.motion.base}ms · ホバーとパネル</dd>
          </div>
          <div className="rounded-md border border-border bg-card p-4">
            <dt className="font-mono text-[11px] text-muted-foreground">slow</dt>
            <dd className="mt-1">{tokens.motion.slow}ms · 階層の変化</dd>
          </div>
        </dl>
      </Section>

      <Section
        id="principles"
        eyebrow="Principles"
        title="原則"
        why="Useful / Intuitive / Delightful / Polished。検証はブラウザで行う。"
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.n} className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-[11px] text-muted-foreground">{item.n}</p>
              <p className="mt-2 text-[22px] leading-[1.4] tracking-[-0.015em]">{item.t}</p>
              <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">{item.d}</p>
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
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {knowledgeItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex flex-col gap-1 px-5 py-4 hover:bg-accent/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px]">{item.title}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{item.topic}</span>
                </span>
                <span className="text-[13px] text-muted-foreground">{item.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
