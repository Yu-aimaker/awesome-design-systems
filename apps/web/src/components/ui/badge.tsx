import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "line",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: "line" | "accent" | "copper" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.06em]",
        tone === "line" && "border border-border text-muted-foreground",
        tone === "accent" && "bg-accent text-accent-foreground",
        tone === "copper" && "text-destructive border border-destructive/30",
        className,
      )}
      {...props}
    />
  );
}
