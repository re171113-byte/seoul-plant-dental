import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import LocationContent from './LocationContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'location' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LocationContent />;
}
