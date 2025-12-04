import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GalleryContent />;
}
