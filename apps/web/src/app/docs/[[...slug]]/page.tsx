import { notFound } from 'next/navigation';
import { docs } from '@/lib/catalog';
import { Document } from '@/components/docs/document';
export function generateStaticParams() {
  return docs.map(e => ({
    slug: e.slug ? [e.slug] : []
  }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const {
    slug = []
  } = await params;
  return {
    title: docs.find(e => e.slug === slug.join('/'))?.title || 'Documentation'
  };
}
export default async function Page({
  params
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const {
    slug = []
  } = await params;
  const entry = docs.find(e => e.slug === slug.join('/'));
  if (!entry) notFound();
  return <Document entry={entry} kind="docs" />;
}
