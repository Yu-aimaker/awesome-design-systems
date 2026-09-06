import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground",
  secondary:
    "bg-card text-foreground border border-border hover:bg-secondary disabled:text-muted-foreground",
  ghost: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground disabled:text-muted-foreground",
  danger:
    "bg-destructive text-primary-foreground hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground",
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
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-[15px] font-medium transition-colors duration-[var(--duration-base)] ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
