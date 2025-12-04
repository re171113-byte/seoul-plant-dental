import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ReviewsContent from './ReviewsContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'reviews' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ReviewsContent />;
}
