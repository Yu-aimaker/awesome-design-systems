'use client';

import { useState, type CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, Check, Copy, ArrowCounterClockwise, Circle, CheckCircle } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { tokens } from '@/lib/tokens';
const MotionPreview = dynamic(() => import('./motion-preview').then(m => m.MotionPreview), {
  loading: () => <p>Loading motion controls…</p>
});
const ChatPreview = dynamic(() => import('./chat-preview').then(m => m.ChatPreview), {
  loading: () => <p>Loading thread…</p>
});
export function ButtonsPreview() {
  const [saved, setSaved] = useState(false);
  return <div className="button-demo">
    <div className="sample-heading">
      <span className="sample-icon"><CheckCircle size={24} /></span>
      <div>
        <strong>Ready for review</strong>
        <p>Save your component changes.</p>
      </div>
    </div>
    <div className="control-row">
      <Button onClick={() => setSaved(true)} disabled={saved}>
        {saved ? <Check size={17} /> : null}
        {saved ? 'Saved' : 'Save changes'}
      </Button>
      <Button variant="secondary" onClick={() => setSaved(false)} disabled={!saved}><ArrowCounterClockwise size={16} /> Undo</Button>
      <Button variant="ghost" disabled>Publish</Button>
    </div>
    <p className="caption" role="status">{saved ? 'Changes saved locally. You can undo this action.' : 'Publish is unavailable until the review is complete.'}</p>
  </div>;
}
export function ColorPreview() {
  const [copied, setCopied] = useState('');
  const names = ['background', 'foreground', 'primary', 'card', 'mutedForeground', 'border'];
  return <div>
    <div className="swatches">{names.map(name => {
        const css = name.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
        return <button className="swatch" key={name} onClick={async () => {
          try {
            await navigator.clipboard.writeText(`var(--${css})`);
            setCopied(`Copied: var(--${css})`);
          } catch {
            setCopied(`Clipboard unavailable. Copy this value: var(--${css})`);
          }
        }} aria-label={`Copy ${css} token`}>
          <span className="swatch-color" style={{
            background: `var(--${css})`
          }} />
          <span className="swatch-label">
            {css}
            <Copy size={13} />
          </span>
          <code>semantic</code>
        </button>;
      })}</div>
    <p role="status" className="caption">{copied ? copied : 'Select a swatch to copy its CSS variable. Toggle the theme to compare.'}</p>
  </div>;
}
export function TypePreview() {
  const [lang, setLang] = useState(false);
  return <div className="type-demo">
    <div className="control-row">
      <span className="code-label">Geist / Noto Sans JP</span>
      <Button variant="secondary" onClick={() => setLang(!lang)}>{lang ? 'English specimen' : '日本語の見本'}</Button>
    </div>
    <div lang={lang ? 'ja' : 'en'}>
      <div className="type-line">
        <span>32 / 500</span>
        <h2>{lang ? '伝わる階層をつくる' : 'Make hierarchy readable.'}</h2>
      </div>
      <div className="type-line">
        <span>22 / 500</span>
        <h3>{lang ? '内容を先に、装飾は少なく。' : 'Content comes first.'}</h3>
      </div>
      <div className="type-line">
        <span>16 / 400</span>
        <p>{lang ? '文字の大きさと余白で、情報の関係を示します。読む人が迷わず、次の操作を選べるように。' : 'Type and spacing show how information relates. Give each line enough room to read, and each action a clear purpose.'}</p>
      </div>
      <div className="type-line">
        <span>13 / mono</span>
        <code>--font-sans: Geist; line-height: 1.75;</code>
      </div>
    </div>
  </div>;
}
export function SpacingPreview() {
  const [gap, setGap] = useState(24);
  return <div className="spacing-demo">
    <label htmlFor="space">Component gap <code>{gap}px</code></label>
    <input id="space" type="range" min="0" max="8" value={Object.values(tokens.space).indexOf(gap)} onChange={e => setGap(Object.values(tokens.space)[Number(e.target.value)])} />
    <div className="spacing-blocks" style={{
      gap
    } as CSSProperties}>
      <span>A</span>
      <span>B</span>
      <span>C</span>
    </div>
    <div className="scale">{Object.values(tokens.space).map(n => <span key={n}>
        <i style={{
          height: n
        }} />
        {n}
      </span>)}</div>
    <p className="caption">4px base unit · controls 8px radius · preview frames 12px radius</p>
  </div>;
}
export function FormPreview() {
  const [name, setName] = useState('');
  const [fail, setFail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'invalid' | 'failed' | 'saved'>('idle');
  return <form className="form-demo" noValidate onSubmit={e => {
    e.preventDefault();
    setStatus(!name.trim() ? 'invalid' : fail ? 'failed' : 'saved');
  }}>
    <strong>Component collection</strong>
    <p className="caption">Create a collection in this local preview.</p>
    <label htmlFor="collection">Collection name</label>
    <Input id="collection" value={name} placeholder="e.g. Account settings" aria-invalid={status === 'invalid'} aria-describedby="form-status" onChange={e => {
      setName(e.target.value);
      setStatus('idle');
    }} />
    <label className="check-label"><input type="checkbox" checked={fail} onChange={e => setFail(e.target.checked)} /> Simulate a failed request</label>
    <p id="form-status" role="status" className={status === 'failed' || status === 'invalid' ? 'error-text' : 'caption'}>{status === 'invalid' ? 'Enter a collection name to continue.' : status === 'failed' ? 'Request failed. Turn off the simulation and retry; your name is preserved.' : status === 'saved' ? `“${name}” created locally.` : 'You can edit the name before creating the collection.'}</p>
    <Button type="submit">
      {status === 'failed' ? 'Retry' : status === 'saved' ? 'Save again' : 'Create collection'}
      <ArrowRight size={16} />
    </Button>
  </form>;
}
export function PluginPreview() {
  const [steps, setSteps] = useState<number[]>([]);
  return <div className="plugin-demo">
    <code className="prompt">Read AwesomeDS/DESIGN.md and tokens.json.<br />Apply Plugin/skills/AwesomeDSSkill/SKILL.md.<br />Build the task, then run DesignVerifier.</code>
    <p className="caption">Try the handoff checklist:</p>
    {['Read the canon', 'Implement semantic tokens', 'Verify keyboard, mobile, and motion'].map((s, i) => <button key={s} aria-pressed={steps.includes(i)} onClick={() => setSteps(v => v.includes(i) ? v.filter(n => n !== i) : [...v, i])}>
      {steps.includes(i) ? <CheckCircle size={20} weight="fill" /> : <Circle size={20} />}
      {s}
    </button>)}
    <p className="caption" role="status">{steps.length} / 3 steps reviewed</p>
  </div>;
}
export function Preview({
  kind
}: {
  kind: string;
}) {
  switch (kind) {
    case 'color':
      return <ColorPreview />;
    case 'typography':
      return <TypePreview />;
    case 'spacing':
      return <SpacingPreview />;
    case 'forms':
      return <FormPreview />;
    case 'motion':
      return <MotionPreview />;
    case 'chat':
      return <ChatPreview />;
    case 'plugin':
      return <PluginPreview />;
    default:
      return <ButtonsPreview />;
  }
}
