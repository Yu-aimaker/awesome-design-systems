import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { KnowledgeBrowse } from "@/components/showcase/knowledge-browse";

export const metadata: Metadata = {
  title: "知見 · AwesomeDS",
  description: "AwesomeDS が参照したソースの要約。",
};

export default function KnowledgePage() {
  return (
    <article className="max-w-[40rem]">
      <Badge>Knowledge</Badge>
      <h1 className="mt-5 text-[48px] leading-[1.15] font-medium tracking-[-0.03em]">知見</h1>
      <p className="mt-5 text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
        リポジトリの <code className="font-mono text-[13px] text-foreground">Knowledge/</code>{" "}
        と同じ題材。全文は Markdown、ここはショーケース用の要約。
      </p>
      <KnowledgeBrowse />
    </article>
  );
}
