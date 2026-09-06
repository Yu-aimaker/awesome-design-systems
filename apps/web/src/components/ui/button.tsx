import type { ButtonHTMLAttributes } from "react";
export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost" | "destructive";
}) {
  return <button className={`button button-${variant} ${className}`} {...props} />;
}
