'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    title: '20년 경력의\n임플란트 전문의',
    subtitle: '50,000건 이상의 풍부한 임상경험',
    highlight: '임플란트 전문',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    title: '최신 디지털\n네비게이션 임플란트',
    subtitle: '정확하고 안전한 3D 가이드 수술',
    highlight: '첨단 장비',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    title: '전악 임플란트\n당일 식립 가능',
    subtitle: '하루만에 완성되는 새로운 치아',
    highlight: '당일 치료',
  },
];

const features = [
  { text: '20년 경력 전문의', icon: Check },
  { text: '50,000건+ 시술', icon: Check },
  { text: '10년 무상 보증', icon: Check },
  { text: '무이자 할부', icon: Check },
];

export default function HeroSection() {
  const t = useTranslations('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="h-full flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              {slides[currentSlide].highlight}
            </motion.div>

            {/* Title */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 whitespace-pre-line"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <feature.icon size={16} className="text-primary-400" />
                  <span className="text-white text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
              >
                <Phone size={20} />
                무료 상담 예약
              </Link>
              <a
                href="tel:02-555-1234"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-secondary-800 px-8 py-4 rounded-full font-medium text-lg transition-colors"
              >
                <Phone size={20} />
                02-555-1234
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-10 left-4 right-4 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-primary-500 w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Menu Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary-800/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <Link
              href="/services/implant"
              className="py-5 text-center text-white hover:bg-primary-500 transition-colors"
            >
              <span className="block text-lg font-medium">임플란트</span>
              <span className="text-sm text-white/70">Implant</span>
            </Link>
            <Link
              href="/services"
              className="py-5 text-center text-white hover:bg-primary-500 transition-colors"
            >
              <span className="block text-lg font-medium">전악 임플란트</span>
              <span className="text-sm text-white/70">Full Mouth</span>
            </Link>
            <Link
              href="/pricing"
              className="py-5 text-center text-white hover:bg-primary-500 transition-colors"
            >
              <span className="block text-lg font-medium">비용안내</span>
              <span className="text-sm text-white/70">Pricing</span>
            </Link>
            <Link
              href="/reservation"
              className="py-5 text-center text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              <span className="block text-lg font-medium">온라인 예약</span>
              <span className="text-sm text-white/90">Reservation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
