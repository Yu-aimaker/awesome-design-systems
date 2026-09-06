"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorView({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-[36rem]">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">Error</p>
      <h1 className="mt-3 text-[32px] leading-[1.25] tracking-[-0.02em]">描画に失敗した</h1>
      <p className="mt-4 text-[16px] leading-[1.75] text-muted-foreground">
        入力は残っている。次の手は再試行。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" onClick={reset}>
          再試行
        </Button>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md border border-border px-4 text-[15px] hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          先頭へ
        </Link>
      </div>
    </div>
  );
}
