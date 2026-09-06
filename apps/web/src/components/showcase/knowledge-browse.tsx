"use client";

import { useMemo, useState } from "react";
import { knowledgeArticles } from "@/lib/knowledge";
import { Input } from "@/components/ui/input";

export function KnowledgeBrowse() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      knowledgeArticles.filter((item) => {
        if (!q) return true;
        return `${item.title} ${item.topic} ${item.body}`.toLowerCase().includes(q);
      }),
    [q],
  );

  return (
    <>
      <label className="mt-8 flex max-w-[24rem] flex-col gap-2 text-[13px]">
        絞り込み
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="題、指針、部品"
          aria-describedby="knowledge-count"
        />
      </label>
      <p id="knowledge-count" className="mt-3 font-mono text-[12px] text-muted-foreground">
        {visible.length} / {knowledgeArticles.length}
      </p>

      {visible.length === 0 ? (
        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <p className="text-[22px] leading-[1.4] tracking-[-0.015em]">一致する知見は無い</p>
          <p className="mt-3 text-[16px] leading-[1.75] text-muted-foreground">
            語を変えるか、絞り込みを消す。
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 inline-flex h-10 items-center rounded-md border border-border px-4 text-[15px] hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            条件を消す
          </button>
        </div>
      ) : (
        <>
          <nav className="mt-8 flex flex-col gap-2" aria-label="記事">
            {visible.map((item) => (
              <a
                key={`toc-${item.id}`}
                href={`#${item.id}`}
                className="min-h-10 text-[14px] text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {item.title}
              </a>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-12">
            {visible.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-24">
                <h2 className="text-[32px] leading-[1.25] font-medium tracking-[-0.02em]">
                  {item.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
                  {item.body}
                </p>
                <a
                  href={item.source}
                  className="mt-3 inline-block min-h-10 font-mono text-[12px] text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.source.replace(/^https:\/\//, "")}
                </a>
              </section>
            ))}
          </div>
        </>
      )}
    </>
  );
}
