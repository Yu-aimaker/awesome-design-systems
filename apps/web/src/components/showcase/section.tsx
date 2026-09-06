import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  why,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  why: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-12 sm:py-16 lg:scroll-mt-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[28px] leading-[1.25] tracking-[-0.02em] text-foreground sm:text-[32px]">
        {title}
      </h2>
      <p className="mt-4 max-w-[40rem] text-[16px] leading-[1.75] tracking-[0.01em] text-muted-foreground">
        {why}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
