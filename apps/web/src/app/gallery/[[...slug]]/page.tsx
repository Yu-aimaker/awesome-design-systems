import { notFound } from 'next/navigation';
import { gallery } from '@/lib/catalog';
import { Document, GalleryIndex } from '@/components/docs/document';
export function generateStaticParams() {
  return [{
    slug: []
  }, ...gallery.map(e => ({
    slug: [e.slug]
  }))];
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
    title: gallery.find(e => e.slug === slug.join('/'))?.title || 'Component gallery'
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
  if (!slug.length) return <GalleryIndex />;
  const entry = gallery.find(e => e.slug === slug.join('/'));
  if (!entry) notFound();
  return <Document entry={entry} kind="gallery" />;
}
