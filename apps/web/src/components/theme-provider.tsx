"use client";

import { createContext, useCallback, useContext, useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";

let current: Theme = "light";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function apply(next: Theme) {
  current = next;
  document.documentElement.classList.toggle("dark", next === "dark");
  window.localStorage.setItem("awesomeds-theme", next);
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return current;
}

function getServerSnapshot(): Theme {
  return "light";
}

if (typeof window !== "undefined") {
  current = window.localStorage.getItem("awesomeds-theme") === "dark" ? "dark" : "light";
  document.documentElement.classList.toggle("dark", current === "dark");
}

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => undefined });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback(() => {
    apply(current === "light" ? "dark" : "light");
  }, []);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
