import Link from 'next/link';
export default function NotFound() {
  return <div className="page">
    <p className="eyebrow">404</p>
    <h1>Page not found</h1>
    <p>This page is not in the canon.</p>
    <Link className="button button-default" href="/docs">Open documentation</Link>
  </div>;
}
