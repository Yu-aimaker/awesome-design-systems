/* eslint-disable @next/next/no-page-custom-font -- This stylesheet is in the shared App Router root layout. */
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Shell } from '@/components/docs/shell';
import './globals.css';
const geist = localFont({
  src: '../fonts/geist-latin.woff2',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap'
});
const mono = localFont({
  src: '../fonts/geist-mono-latin.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap'
});
export const metadata: Metadata = {
  title: {
    default: 'AwesomeDS · Documentation',
    template: '%s · AwesomeDS'
  },
  description: 'AwesomeDS foundations, interactive component previews, and internal design skills.'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600&display=swap" />
      <script dangerouslySetInnerHTML={{
        __html: `try{document.documentElement.classList.toggle('dark',localStorage.getItem('awesomeds-theme')==='dark')}catch{}`
      }} />
    </head>
    <body><Shell>{children}</Shell></body>
  </html>;
}
