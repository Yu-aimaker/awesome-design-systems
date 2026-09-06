import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "知見 · AwesomeDS",
  description: "AwesomeDS が参照したソースの要約。",
};

const articles = [
  {
    id: "awesome-design-md",
    title: "awesome-design-md",
    source: "https://github.com/voltagent/awesome-design-md",
    body: "公開サイトの見た目を DESIGN.md に落とし、エージェントへ渡すコレクション。テーマ、色の役割、書体、部品、禁止事項が揃っている。抽出は観察であり、ブランドの公式許諾ではない。",
  },
  {
    id: "awesome-design-md-jp",
    title: "awesome-design-md-jp",
    source: "https://github.com/kzhrknt/awesome-design-md-jp",
    body: "日本語 UI 用。和文フォールバック、行間 1.7–2.0、字間、禁則、OpenType、混植が無いとエージェントは詰まった日本語を出す。",
  },
  {
    id: "taste-skill",
    title: "taste-skill",
    source: "https://github.com/Leonxlnx/taste-skill",
    body: "VARIANCE / MOTION / DENSITY の3ダイヤルと、Inter・紫グラデ・ガラスの禁止。AwesomeDS 本体は低バリアンス、低〜中モーション、中密度で固定する。",
  },
  {
    id: "neropursue-x",
    title: "neropursue（X）",
    source: "https://x.com/neropursue/status/2089263766428950683",
    body: "2026-09-06 時点で HTTP 403。本文は未取得。推測で埋めない。",
  },
  {
    id: "shadcn-ui",
    title: "shadcn/ui",
    source: "https://ui.shadcn.com/docs",
    body: "パッケージではなくコピー配布。Open Code と共通インターフェース。既定の zinc と大きな角丸は AwesomeDS トークンに差し替える。",
  },
  {
    id: "assistant-ui",
    title: "assistant-ui",
    source: "https://www.assistant-ui.com/",
    body: "チャット UI キット。Elements は「名前・短い役割・触れるプレビュー」。このショーケースの情報設計の見本。",
  },
  {
    id: "apple-hig",
    title: "Apple HIG",
    source: "https://developer.apple.com/design/human-interface-guidelines",
    body: "明快さ、敬意、深さ。主要操作 44px。フォーカスと Reduce Motion を設定として扱う。",
  },
  {
    id: "material-design",
    title: "Material Design 3",
    source: "https://m3.material.io/",
    body: "色は役割で持つ。8dp。状態をトークン化。サーフェスは3段まで。danger は accent の再利用禁止。",
  },
  {
    id: "duolingo",
    title: "Duolingo",
    source: "https://web.archive.org/web/20260310155248/https://design.duolingo.com/",
    body: "ブランド色は進行と報酬。失敗しても次の一手を残す。公式サイトはアーカイブ経由。Figma Community ファイルは観察用。",
  },
] as const;

export default function KnowledgePage() {
  return (
    <article className="max-w-[40rem]">
      <Badge>Knowledge</Badge>
      <h1 className="mt-5 text-[48px] leading-[1.15] font-medium tracking-[-0.03em]">
        知見
      </h1>
      <p className="mt-5 text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
        リポジトリの <code className="font-mono text-[13px] text-foreground">Knowledge/</code> と同じ題材。全文は Markdown、ここはショーケース用の要約。
      </p>
      <div className="mt-12 flex flex-col gap-12">
        {articles.map((item) => (
          <section key={item.id} id={item.id} className="scroll-mt-24">
            <h2 className="text-[32px] leading-[1.25] font-medium tracking-[-0.02em]">
              {item.title}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
              {item.body}
            </p>
            <a
              href={item.source}
              className="mt-3 inline-block font-mono text-[12px] text-destructive underline-offset-4 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              {item.source.replace(/^https:\/\//, "")}
            </a>
          </section>
        ))}
      </div>
    </article>
  );
}
