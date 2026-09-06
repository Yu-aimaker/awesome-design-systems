"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ChatCircle,
  CircleHalf,
  Cube,
  FrameCorners,
  ListBullets,
  Palette,
  Square,
  TextT,
} from "@phosphor-icons/react";
import { useTheme } from "@/components/theme-provider";

const nav = [
  { href: "/#color", label: "色", en: "Color", Icon: Palette },
  { href: "/#type", label: "書体", en: "Type", Icon: TextT },
  { href: "/#space", label: "余白", en: "Space", Icon: Square },
  { href: "/#radius", label: "角丸", en: "Radius", Icon: FrameCorners },
  { href: "/#components", label: "部品", en: "Components", Icon: Cube },
  { href: "/#chat", label: "会話", en: "Chat", Icon: ChatCircle },
  { href: "/#motion", label: "動き", en: "Motion", Icon: CircleHalf },
  { href: "/#principles", label: "原則", en: "Principles", Icon: ListBullets },
  { href: "/knowledge", label: "知見", en: "Knowledge", Icon: ListBullets },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="mx-auto flex max-w-[1320px]">
        <aside className="sticky top-0 hidden h-svh w-[232px] shrink-0 flex-col border-r border-border px-6 py-8 lg:flex">
          <Link href="/" className="text-[20px] font-medium leading-none tracking-[-0.03em]">
            AwesomeDS
          </Link>
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">Canon · 0.2.0</p>
          <nav className="mt-10 flex flex-col gap-1" aria-label="ページ内">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-sm px-1 py-1.5 text-[14px] text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                <item.Icon size={16} weight="regular" />
                <span className="flex-1">{item.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.06em]">
                  {item.en}
                </span>
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggle}
            className="mt-auto inline-flex h-10 items-center justify-center rounded-md border border-border text-[13px] hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
          >
            {theme === "dark" ? "ライト面" : "ダーク面"}
          </button>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-border px-5 py-4 lg:hidden">
            <Link href="/" className="text-[18px] font-medium tracking-[-0.03em]">
              AwesomeDS
            </Link>
            <button
              type="button"
              onClick={toggle}
              className="text-[13px] text-muted-foreground"
            >
              {theme === "dark" ? "ライト" : "ダーク"}
            </button>
          </header>
          <nav
            className="flex gap-4 overflow-x-auto border-b border-border px-5 py-3 text-[13px] text-muted-foreground lg:hidden"
            aria-label="セクション"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-foreground">
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
