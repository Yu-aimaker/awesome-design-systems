import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/#color", label: "色", en: "Color" },
  { href: "/#type", label: "書体", en: "Type" },
  { href: "/#space", label: "余白", en: "Space" },
  { href: "/#radius", label: "角丸", en: "Radius" },
  { href: "/#components", label: "部品", en: "Components" },
  { href: "/#motion", label: "動き", en: "Motion" },
  { href: "/#principles", label: "原則", en: "Principles" },
  { href: "/knowledge", label: "知見", en: "Knowledge" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full bg-paper text-ink">
      <div className="mx-auto flex max-w-[1320px]">
        <aside className="sticky top-0 hidden h-svh w-[232px] shrink-0 flex-col border-r border-line px-6 py-8 lg:flex">
          <Link href="/" className="font-display text-[22px] leading-none tracking-[-0.02em]">
            AwesomeDS
          </Link>
          <p className="mt-2 font-mono text-[11px] text-ink-subtle">Canon · 0.1.0</p>
          <nav className="mt-10 flex flex-col gap-1" aria-label="ページ内">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-baseline justify-between rounded-sm px-1 py-1.5 text-[14px] text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-ink"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-subtle">
                  {item.en}
                </span>
              </Link>
            ))}
          </nav>
          <p className="mt-auto text-[12px] leading-[1.6] text-ink-subtle">
            STARKIndustries
            <br />
            Yu-aimaker
          </p>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-line px-5 py-4 lg:hidden">
            <Link href="/" className="font-display text-[20px]">
              AwesomeDS
            </Link>
            <Link href="/knowledge" className="text-[13px] text-ink-muted">
              知見
            </Link>
          </header>
          <nav
            className="flex gap-4 overflow-x-auto border-b border-line px-5 py-3 text-[13px] text-ink-muted lg:hidden"
            aria-label="セクション"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <main className="px-5 py-10 sm:px-8 lg:px-14 lg:py-14">{children}</main>
        </div>
      </div>
    </div>
  );
}
