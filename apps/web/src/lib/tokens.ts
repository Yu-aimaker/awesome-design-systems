export const tokens = {
  meta: {
    name: "AwesomeDS",
    version: "0.1.0",
    updated: "2026-09-06",
  },
  color: {
    paper: "#F4EFE6",
    surface: "#FFFCF7",
    raised: "#FFFFFF",
    ink: "#1C1916",
    inkMuted: "#5C564C",
    inkSubtle: "#8A8378",
    line: "#D9D2C6",
    accent: "#1F4D3A",
    accentHover: "#16382A",
    accentSoft: "#DCE8E1",
    copper: "#B4532A",
    danger: "#9B2C2C",
    dangerSoft: "#F3D6D6",
  },
  font: {
    display: "Newsreader",
    sans: "IBM Plex Sans JP",
    mono: "IBM Plex Mono",
  },
  type: {
    display: { size: 48, line: 1.15, weight: 500, tracking: "-0.02em" },
    title: { size: 32, line: 1.25, weight: 500, tracking: "-0.015em" },
    heading: { size: 22, line: 1.35, weight: 500, tracking: "-0.01em" },
    body: { size: 16, line: 1.75, weight: 400, tracking: "0.02em" },
    small: { size: 13, line: 1.6, weight: 400, tracking: "0.02em" },
    label: { size: 12, line: 1.4, weight: 500, tracking: "0.06em" },
  },
  space: {
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 24,
    "6": 32,
    "7": 48,
    "8": 64,
    "9": 96,
  },
  radius: {
    sm: 6,
    md: 8,
    lg: 12,
    full: 9999,
  },
  motion: {
    fast: 120,
    base: 180,
    slow: 280,
    ease: "cubic-bezier(0.2, 0, 0, 1)",
  },
  layout: {
    page: 1080,
    rail: 232,
    gutter: 24,
  },
} as const;

export const colorRoles: {
  name: keyof typeof tokens.color;
  hex: string;
  role: string;
}[] = [
  { name: "paper", hex: tokens.color.paper, role: "ページ地" },
  { name: "surface", hex: tokens.color.surface, role: "カード・入力" },
  { name: "raised", hex: tokens.color.raised, role: "一段上げる面" },
  { name: "ink", hex: tokens.color.ink, role: "本文" },
  { name: "inkMuted", hex: tokens.color.inkMuted, role: "補助文" },
  { name: "inkSubtle", hex: tokens.color.inkSubtle, role: "ラベル" },
  { name: "line", hex: tokens.color.line, role: "区切り" },
  { name: "accent", hex: tokens.color.accent, role: "決定・進行" },
  { name: "accentHover", hex: tokens.color.accentHover, role: "決定のホバー" },
  { name: "accentSoft", hex: tokens.color.accentSoft, role: "選択の地" },
  { name: "copper", hex: tokens.color.copper, role: "注意" },
  { name: "danger", hex: tokens.color.danger, role: "破壊・エラー" },
  { name: "dangerSoft", hex: tokens.color.dangerSoft, role: "エラー面" },
];
