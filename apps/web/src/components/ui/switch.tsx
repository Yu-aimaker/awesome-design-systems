"use client";

import { cn } from "@/lib/cn";

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-3 text-[15px] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <span
        className={cn(
          "relative h-6 w-10 rounded-full transition-colors duration-[var(--duration-base)] ease-out",
          checked ? "bg-primary" : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-card transition-transform duration-[var(--duration-base)] ease-out",
            checked && "translate-x-4",
          )}
        />
      </span>
      {label}
    </button>
  );
}
