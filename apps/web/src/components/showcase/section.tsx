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
    <section id={id} className="scroll-mt-24 border-t border-line py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-subtle">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[32px] leading-[1.25] tracking-[-0.015em] text-ink">
        {title}
      </h2>
      <p className="mt-4 max-w-[40rem] text-[16px] leading-[1.75] tracking-[0.02em] text-ink-muted">
        {why}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
