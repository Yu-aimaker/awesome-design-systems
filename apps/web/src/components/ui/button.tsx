import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary:
    "bg-accent text-paper hover:bg-accent-hover disabled:bg-line disabled:text-ink-subtle",
  secondary:
    "bg-surface text-ink border border-line hover:border-ink/30 disabled:text-ink-subtle",
  ghost: "bg-transparent text-ink hover:bg-accent-soft disabled:text-ink-subtle",
  danger:
    "bg-danger text-paper hover:bg-danger/90 disabled:bg-line disabled:text-ink-subtle",
} as const;

type Variant = keyof typeof variants;

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-[15px] font-medium transition-colors duration-[var(--duration-base)] ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
