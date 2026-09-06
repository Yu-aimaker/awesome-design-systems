"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChatCircle,
  CircleHalf,
  Cube,
  FrameCorners,
  ListBullets,
  Palette,
  Path,
  Square,
  TextT,
  WarningCircle,
} from "@phosphor-icons/react";
import { useTheme } from "@/components/theme-provider";

const nav = [
  { href: "/#color", id: "color", label: "色", en: "Color", Icon: Palette },
  { href: "/#type", id: "type", label: "書体", en: "Type", Icon: TextT },
  { href: "/#space", id: "space", label: "余白", en: "Space", Icon: Square },
  { href: "/#radius", id: "radius", label: "角丸", en: "Radius", Icon: FrameCorners },
  { href: "/#components", id: "components", label: "部品", en: "Components", Icon: Cube },
  { href: "/#states", id: "states", label: "状態", en: "States", Icon: WarningCircle },
  { href: "/#chat", id: "chat", label: "会話", en: "Chat", Icon: ChatCircle },
  { href: "/#motion", id: "motion", label: "動き", en: "Motion", Icon: CircleHalf },
  { href: "/#thinking", id: "thinking", label: "思考", en: "Thinking", Icon: Path },
  { href: "/#principles", id: "principles", label: "原則", en: "Principles", Icon: ListBullets },
  { href: "/knowledge", id: "knowledge", label: "知見", en: "Knowledge", Icon: ListBullets },
] as const;

function useActiveId() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("color");

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = nav.filter((item) => item.href.startsWith("/#")).map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.2, 0.5] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return pathname === "/knowledge" ? "knowledge" : active;
}

export function Shell({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  const active = useActiveId();

  return (
    <div className="min-h-full bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-[14px] focus:text-primary-foreground"
      >
        本文へ
      </a>
      <div className="mx-auto flex max-w-[1320px]">
        <aside className="sticky top-0 hidden h-svh w-[232px] shrink-0 flex-col border-r border-border px-6 py-8 lg:flex">
          <Link
            href="/"
            className="text-[20px] font-medium leading-none tracking-[-0.03em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            AwesomeDS
          </Link>
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">Canon · 0.3.0</p>
          <nav className="mt-8 flex flex-col gap-0.5 overflow-y-auto" aria-label="ページ内">
            {nav.map((item) => {
              const current = active === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`flex min-h-10 items-center gap-2 rounded-sm px-1 text-[14px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    current ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.Icon size={16} weight={current ? "fill" : "regular"} />
                  <span className="flex-1">{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.06em]">{item.en}</span>
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={toggle}
            className="mt-auto inline-flex h-10 items-center justify-center rounded-md border border-border text-[13px] hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {theme === "dark" ? "ライト面" : "ダーク面"}
          </button>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-border px-5 py-3 lg:hidden">
            <Link
              href="/"
              className="text-[18px] font-medium tracking-[-0.03em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              AwesomeDS
            </Link>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-10 min-w-10 items-center justify-center px-3 text-[13px] text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {theme === "dark" ? "ライト" : "ダーク"}
            </button>
          </header>
          <nav
            className="flex gap-4 overflow-x-auto border-b border-border px-5 py-2 text-[13px] text-muted-foreground lg:hidden"
            aria-label="セクション"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active === item.id ? "page" : undefined}
                className={`inline-flex h-10 shrink-0 items-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active === item.id ? "text-foreground" : "hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <main id="main" className="px-5 py-10 sm:px-8 lg:px-14 lg:py-14">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
