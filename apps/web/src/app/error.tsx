'use client';

import { Button } from '@/components/ui/button';
export default function ErrorPage({
  reset
}: {
  reset: () => void;
}) {
  return <div className="page">
    <h1>Unable to load this page</h1>
    <p>Your next step is still here. Try loading the page again.</p>
    <Button onClick={reset}>Retry</Button>
  </div>;
}
