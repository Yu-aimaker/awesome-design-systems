"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { List, X, Moon, Sun, ArrowUpRight, SquaresFour, BookOpen, Cube } from '@phosphor-icons/react';
import { docs, gallery } from '@/lib/catalog';
import { Button } from '@/components/ui/button';
function Navigation({
  onNavigate
}: {
  onNavigate?: () => void;
}) {
  const path = usePathname();
  const isGallery = path.startsWith('/gallery');
  const entries = isGallery ? gallery : docs.filter(e => e.slug);
  return <nav aria-label="Sidebar">
    <Link className={`nav-overview ${path === (isGallery ? '/gallery' : '/docs') ? 'active' : ''}`} href={isGallery ? '/gallery' : '/docs'} onClick={onNavigate}>
      {isGallery ? <SquaresFour size={17} /> : <BookOpen size={17} />}
      {isGallery ? 'All previews' : 'Overview'}
    </Link>
    {[...new Set(entries.map(e => e.category))].map(category => <div className="nav-group" key={category}>
      <div className="nav-label">{category}</div>
      {entries.filter(e => e.category === category).map(e => {
        const href = `/${isGallery ? 'gallery' : 'docs'}${e.slug ? '/' + e.slug : ''}`;
        return <Link onClick={onNavigate} aria-current={path === href ? 'page' : undefined} className={path === href ? 'active' : ''} href={href} key={e.slug}>
          {e.title}
          {e.slug === 'motion' && <span className="tiny-tag">C</span>}
        </Link>;
      })}
    </div>)}
  </nav>;
}
export function Shell({
  children
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  function toggle() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('awesomeds-theme', next ? 'dark' : 'light');
    } catch {}
  }
  return <><a className="skip-link" href="#content">Skip to content</a><header className="header">
      <Button variant="ghost" className="mobile-menu icon-button" aria-label="Open navigation" onClick={() => dialog.current?.showModal()}><List size={21} /></Button>
      <Link href="/docs" className="wordmark"><span className="brand-mark"><Cube size={21} weight="bold" /></span>AwesomeDS</Link>
      <span className="version">0.4</span>
      <nav className="top-nav" aria-label="Main">
        <Link aria-current={path.startsWith('/docs') ? 'page' : undefined} className={path.startsWith('/docs') ? 'selected' : ''} href="/docs">Docs</Link>
        <Link aria-current={path.startsWith('/gallery') ? 'page' : undefined} className={path.startsWith('/gallery') ? 'selected' : ''} href="/gallery">Gallery</Link>
      </nav>
      <div className="header-end">
        <Link className="source-header" href="/docs/plugin">Plugin <ArrowUpRight size={14} /></Link>
        <Button variant="ghost" className="icon-button" aria-label="Toggle color theme" onClick={toggle}>
          <Sun className="theme-sun" size={19} />
          <Moon className="theme-moon" size={19} />
        </Button>
      </div>
    </header><div className="shell">
      <aside className="sidebar">
        <Navigation />
        <div className="sidebar-note"><span className="status-dot" /> Living canon<p>Built with its own tokens.</p><Link href="/docs/knowledge">Read the design references <ArrowUpRight size={13} /></Link></div>
      </aside>
      <main id="content" tabIndex={-1}>
        {children}
        <footer>AwesomeDS <span>Canon → components → practice</span><Link href="/docs/plugin">Internal Plugin</Link></footer>
      </main>
    </div><dialog aria-label="AwesomeDS navigation" ref={dialog} className="drawer" onClick={e => {
      if (e.target === e.currentTarget) dialog.current?.close();
    }}>
      <div className="drawer-top">
        <b>AwesomeDS</b>
        <Button variant="ghost" className="icon-button" aria-label="Close navigation" onClick={() => dialog.current?.close()}><X size={20} /></Button>
      </div>
      <Navigation onNavigate={() => dialog.current?.close()} />
    </dialog></>;
}
