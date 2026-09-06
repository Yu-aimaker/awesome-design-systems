export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite" className="flex flex-col gap-4">
      <div className="h-6 w-24 animate-pulse rounded-sm bg-muted motion-reduce:animate-none" />
      <div className="h-12 w-64 animate-pulse rounded-md bg-muted motion-reduce:animate-none" />
      <div className="h-20 max-w-[40rem] animate-pulse rounded-md bg-muted motion-reduce:animate-none" />
    </div>
  );
}
