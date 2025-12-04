import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import DoctorsSection from '@/components/home/DoctorsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import LocationSection from '@/components/home/LocationSection';
import CTASection from '@/components/home/CTASection';

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
      <StatsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <DoctorsSection />
      <ReviewsSection />
      <CTASection />
      <LocationSection />
    </>
  );
}
