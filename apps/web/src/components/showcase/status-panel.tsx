"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "empty" | "loading" | "error";

const tabs: { id: Status; label: string }[] = [
  { id: "empty", label: "空" },
  { id: "loading", label: "読込" },
  { id: "error", label: "失敗" },
];

export function StatusPanel() {
  const [status, setStatus] = useState<Status>("empty");

  return (
    <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="状態">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={status === tab.id}
            onClick={() => setStatus(tab.id)}
            className={`inline-flex h-10 items-center rounded-md px-3 text-[14px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
              status === tab.id
                ? "bg-accent text-accent-foreground"
                : "border border-border text-foreground hover:bg-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[168px]" role="tabpanel">
        {status === "empty" ? (
          <div className="flex flex-col items-start gap-3">
            <p className="text-[22px] leading-[1.4] tracking-[-0.015em]">プロジェクトはまだない</p>
            <p className="max-w-[36rem] text-[16px] leading-[1.75] text-muted-foreground">
              一覧が空。最初の操作は作成だけ。イラストは置かない。
            </p>
            <Button type="button" onClick={() => setStatus("loading")}>
              作成する
            </Button>
          </div>
        ) : null}

        {status === "loading" ? (
          <div className="flex flex-col gap-3" aria-busy="true" aria-live="polite">
            <p className="font-mono text-[12px] text-muted-foreground">一覧を読んでいます</p>
            {[0, 1, 2].map((row) => (
              <div key={row} className="h-10 animate-pulse rounded-md bg-muted motion-reduce:animate-none" />
            ))}
          </div>
        ) : null}

        {status === "error" ? (
          <div className="flex flex-col items-start gap-3">
            <p className="text-[22px] leading-[1.4] tracking-[-0.015em] text-destructive">
              一覧を取れなかった
            </p>
            <p className="max-w-[36rem] text-[16px] leading-[1.75] text-muted-foreground">
              入力は消さない。次の手は再試行。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button type="button" onClick={() => setStatus("loading")}>
                再試行
              </Button>
              <Button type="button" variant="secondary" onClick={() => setStatus("empty")}>
                空に戻す
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
