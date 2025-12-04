import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ImplantContent from './ImplantContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('implantTitle'),
    description: t('implantDesc'),
  };
}

export default async function ImplantPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ImplantContent />;
}
