import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import NewsSection from '@/components/home/NewsSection';
import SpecialtySection from '@/components/home/SpecialtySection';
import BeforeAfterTabSection from '@/components/home/BeforeAfterTabSection';
import BestReviewSection from '@/components/home/BestReviewSection';
import DoctorSection from '@/components/home/DoctorSection';
import BranchSection from '@/components/home/BranchSection';
import ConsultationSection from '@/components/home/ConsultationSection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <NewsSection />
      <SpecialtySection />
      <BeforeAfterTabSection />
      <BestReviewSection />
      <DoctorSection />
      <BranchSection />
      <ConsultationSection />
    </>
  );
}
