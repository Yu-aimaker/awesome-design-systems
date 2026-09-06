import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BracketsCurly, CursorClick, TextT, Stack, Waveform, ChatCircle, BookOpen } from '@phosphor-icons/react/dist/ssr';
import { docs, gallery, sourceHref, type Entry } from '@/lib/catalog';
import { Preview } from '@/components/gallery/previews';
const icons: Record<string, typeof BookOpen> = {
  color: BracketsCurly,
  typography: TextT,
  spacing: Stack,
  motion: Waveform,
  chat: ChatCircle,
  buttons: CursorClick
};
export function Sources({
  paths
}: {
  paths: string[];
}) {
  return <section className="sources" id="source">
    <h2>Source files</h2>
    <p>Read the canon and the reasoning behind this surface.</p>
    <div>{paths.map(p => <a key={p} href={sourceHref(p)} target="_blank" rel="noreferrer">
        <code>{p}</code>
        <ArrowUpRight size={15} />
      </a>)}</div>
  </section>;
}
export function Document({
  entry,
  kind
}: {
  entry: Entry;
  kind: 'docs' | 'gallery';
}) {
  const list = kind === 'docs' ? docs : gallery;
  const index = list.indexOf(entry);
  return <div className="page-layout">
    <article className="page">
      <div className="breadcrumb">
        {kind === 'docs' ? 'Documentation' : 'Gallery'}
        <span>/</span>
        {entry.category}
      </div>
      <div className="title-row">
        <h1>{entry.title}</h1>
        {entry.slug === 'motion' && <span className="badge">STA-19 C</span>}
      </div>
      <p className="lead">{entry.description}</p>
      <div className="page-meta">
        <span className="status-dot" />
        {kind === 'docs' ? 'Canon connected' : 'Interactive preview'}
        <span>Light + dark</span>
      </div>
      {entry.slug === '' ? <><section className="intro-map">
          <div>
            <BracketsCurly size={22} />
            <b>Foundations</b>
            <span>Roles before values.</span>
          </div>
          <div>
            <CursorClick size={22} />
            <b>Components</b>
            <span>Behavior you can try.</span>
          </div>
          <div>
            <BookOpen size={22} />
            <b>Practice</b>
            <span>Skills with a canon.</span>
          </div>
        </section><section id="why">
          <h2>How it fits together</h2>
          {entry.points.map(p => <p key={p}>{p}</p>)}
        </section><div className="link-grid">{[{
            href: '/docs/tokens',
            label: 'Read the foundations',
            sub: 'Color, type, space, and motion.'
          }, {
            href: '/gallery',
            label: 'Open the gallery',
            sub: 'Inspect states in live previews.'
          }].map(x => <Link href={x.href} key={x.href}>
            <b>
              {x.label}
              <ArrowRight size={17} />
            </b>
            <span>{x.sub}</span>
          </Link>)}</div></> : <section id="why">
        <h2>Why this pattern</h2>
        {entry.points.map(p => <p key={p}>{p}</p>)}
      </section>}
      <section id="preview">
        <div className="section-heading">
          <h2>{entry.slug === '' ? 'A component using the canon' : 'Live preview'}</h2>
          <span className="code-label">{entry.preview === 'overview' ? 'Button' : entry.preview}</span>
        </div>
        <div className="preview-frame">
          <div className="preview-bar">
            <span><span className="status-dot" /> Preview</span>
            <span>AwesomeDS tokens</span>
          </div>
          <div className="preview-body"><Preview kind={entry.preview} /></div>
        </div>
      </section>
      <Sources paths={entry.source} />
      <div className="page-pagination">
        {index > 0 ? <Link href={`/${kind}/${list[index - 1].slug}`}>
          <span>Previous</span>
          {list[index - 1].title}
        </Link> : <span />}
        {index < list.length - 1 ? <Link href={`/${kind}/${list[index + 1].slug}`}><span>Next</span>{list[index + 1].title} →</Link> : <Link href={kind === 'docs' ? '/gallery' : '/docs'}><span>Continue</span>{kind === 'docs' ? 'Component gallery' : 'Documentation'} →</Link>}
      </div>
    </article>
    <aside className="on-page">
      <span>On this page</span>
      <a href="#why">{entry.slug === '' ? 'How it fits together' : 'Why this pattern'}</a>
      <a href="#preview">Live preview</a>
      <a href="#source">Source files</a>
      <div className="aside-note">
        {kind === 'docs' ? 'See the rules in use.' : 'Understand the decisions.'}
        <Link href={kind === 'docs' ? '/gallery' : '/docs'}>
          {kind === 'docs' ? 'Open gallery' : 'Read the docs'}
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </aside>
  </div>;
}
export function GalleryIndex() {
  return <div className="page gallery-index">
    <div className="breadcrumb">Gallery <span>/</span> All previews</div>
    <h1>Component gallery</h1>
    <p className="lead">Try the states, compare the tokens, and inspect the source. These are the same components used throughout the docs.</p>
    <div className="page-meta"><span className="status-dot" /> {gallery.length} live previews <span>Keyboard accessible · Theme aware</span></div>
    <div className="gallery-grid">{gallery.map((entry, i) => {
        const Icon = icons[entry.slug] || CursorClick;
        return <Link className="gallery-card" href={`/gallery/${entry.slug}`} key={entry.slug}>
          <div className={`gallery-art art-${entry.slug}`} aria-hidden="true">
            {entry.slug === 'color' ? <div className="mini-swatches">
              <i />
              <i />
              <i />
              <i />
            </div> : entry.slug === 'typography' ? <div className="mini-type">Aa<span>あ</span></div> : entry.slug === 'spacing' ? <div className="mini-space">
              <i />
              <i />
              <i />
            </div> : entry.slug === 'buttons' ? <div className="mini-button">Save changes <ArrowRight size={16} /></div> : entry.slug === 'forms' ? <div className="mini-form">
              <span>Collection name</span>
              <div>Account settings<span>│</span></div>
            </div> : entry.slug === 'chat' ? <div className="mini-chat">
              <span>Which token?</span>
              <span>Use primary for decisions.</span>
            </div> : <div className="mini-motion">
              <span />
              <span />
              <span />
            </div>}
            <span className="art-number">0{i + 1}</span>
          </div>
          <div className="gallery-card-label">
            <div>
              <Icon size={18} />
              <h2>{entry.title}</h2>
            </div>
            <ArrowUpRight size={17} />
          </div>
          <p>{entry.description}</p>
          <span className="card-category">
            {entry.category}
            <span>Live preview →</span>
          </span>
        </Link>;
      })}</div>
    <section id="preview">
      <div className="section-heading">
        <h2>Try a component</h2>
        <Link className="code-label" href="/gallery/buttons">Button details →</Link>
      </div>
      <div className="preview-frame">
        <div className="preview-bar">
          <span><span className="status-dot" /> Live preview</span>
          <span>Button · save and undo</span>
        </div>
        <div className="preview-body"><Preview kind="buttons" /></div>
      </div>
    </section>
    <Sources paths={['AwesomeDS/components.md', 'AwesomeDS/tokens.json', 'Knowledge/components/shadcn-ui.md', 'Knowledge/components/assistant-ui.md']} />
  </div>;
}
