import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import BoardContent from './BoardContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'board' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function BoardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BoardContent />;
}
