import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_JP, Newsreader } from "next/font/google";
import { Shell } from "@/components/showcase/shell";
import "./globals.css";

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = IBM_Plex_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AwesomeDS",
  description:
    "AwesomeDS の正本ショーケース。色・書体・余白・部品・動きを、サイト自身が使って見せる。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
