export const tokens = {
  meta: { name: "AwesomeDS", version: "0.2.0" },
  semantic: [
    { name: "background", light: "oklch(0.965 0.014 85)", dark: "oklch(0.22 0.012 70)", role: "ページ地" },
    { name: "foreground", light: "oklch(0.22 0.012 70)", dark: "oklch(0.965 0.014 85)", role: "本文" },
    { name: "card", light: "oklch(0.995 0.006 85)", dark: "oklch(0.26 0.014 70)", role: "カード" },
    { name: "primary", light: "oklch(0.38 0.06 160)", dark: "oklch(0.68 0.07 160)", role: "決定・進行" },
    { name: "muted-foreground", light: "oklch(0.48 0.016 70)", dark: "oklch(0.72 0.016 85)", role: "補助文" },
    { name: "border", light: "oklch(0.88 0.018 85)", dark: "oklch(0.32 0.014 70)", role: "ヘアライン" },
    { name: "destructive", light: "oklch(0.5 0.14 25)", dark: "oklch(0.68 0.12 40)", role: "破壊・エラー" },
  ],
  font: { sans: "Geist", jp: "Noto Sans JP", mono: "Geist Mono" },
  type: {
    display: { size: 48, line: 1.15, weight: 500, tracking: "-0.03em" },
    title: { size: 32, line: 1.25, weight: 500, tracking: "-0.02em" },
    heading: { size: 22, line: 1.4, weight: 500, tracking: "-0.015em" },
    body: { size: 16, line: 1.75, weight: 400, tracking: "0.01em" },
    small: { size: 13, line: 1.65, weight: 400, tracking: "0.01em" },
    label: { size: 12, line: 1.4, weight: 500, tracking: "0.06em" },
  },
  space: { "1": 4, "2": 8, "3": 12, "4": 16, "5": 24, "6": 32, "7": 48, "8": 64, "9": 96 },
  radius: { sm: 6, md: 8, lg: 12, full: 9999 },
  motion: { fast: 120, base: 180, slow: 280 },
} as const;
