import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[36rem]">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">404</p>
      <h1 className="mt-3 text-[32px] leading-[1.25] tracking-[-0.02em]">この URL は無い</h1>
      <p className="mt-4 text-[16px] leading-[1.75] text-muted-foreground">
        ショーケースの先頭か、知見一覧へ戻る。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-[15px] font-medium text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          先頭へ
        </Link>
        <Link
          href="/knowledge"
          className="inline-flex h-10 items-center rounded-md border border-border px-4 text-[15px] hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          知見
        </Link>
      </div>
    </div>
  );
}
