'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    badge: 'IMPLANT SPECIALIST',
    title: '20년 경력\n임플란트 전문의',
    description: '50,000건 이상의 풍부한 임상경험\n정확하고 안전한 시술',
    buttonText: '임플란트 상담하기',
    buttonLink: '/services/implant',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    badge: 'DIGITAL DENTISTRY',
    title: '네비게이션\n임플란트',
    description: '3D CT 기반 정밀 진단\n최소 절개, 빠른 회복',
    buttonText: '자세히 알아보기',
    buttonLink: '/services/implant',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    badge: 'ALL-ON-4/6',
    title: '전악 임플란트\n당일 완성',
    description: 'All-on-4/6 시스템으로\n하루만에 새로운 치아',
    buttonText: '전악 임플란트 상담',
    buttonLink: '/services/implant',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80',
    badge: '4개 지점 운영',
    title: '강남·잠실·분당·일산\n가까운 지점 방문',
    description: '모든 지점 동일한 수준의\n전문 의료진과 최신 장비',
    buttonText: '가까운 지점 찾기',
    buttonLink: '/location',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative h-[calc(100vh-120px)] min-h-[550px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="h-full flex items-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-primary-500 text-white px-4 py-1.5 text-sm font-medium mb-4"
            >
              {slides[currentSlide].badge}
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 whitespace-pre-line mb-8">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <Link
              href={slides[currentSlide].buttonLink}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg font-medium transition-colors"
            >
              {slides[currentSlide].buttonText}
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between">
          {/* Slide Counter & Progress */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl font-bold">0{currentSlide + 1}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/50">0{slides.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="hidden md:flex items-center gap-2 w-48">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="flex-1 h-1 bg-white/30 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-primary-500"
                    initial={{ width: '0%' }}
                    animate={{
                      width: idx === currentSlide ? '100%' : idx < currentSlide ? '100%' : '0%',
                    }}
                    transition={{
                      duration: idx === currentSlide && isPlaying ? 5 : 0,
                      ease: 'linear',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 border border-white/50 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-white/50 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-white/50 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-white/30" />
          <span className="text-white/70 text-sm tracking-widest" style={{ writingMode: 'vertical-rl' }}>
            SEOUL PLANT DENTAL
          </span>
          <div className="w-px h-20 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
