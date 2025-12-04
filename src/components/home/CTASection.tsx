'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Phone, Calendar, Gift, Clock } from 'lucide-react';
import Image from 'next/image';

export default function CTASection() {
  const t = useTranslations();

  const benefits = [
    { icon: Gift, text: '무료 CT 촬영' },
    { icon: Clock, text: '1:1 맞춤 상담' },
  ];

  return (
    <section className="relative py-20 bg-secondary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              첫 방문 특별 혜택
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              지금 바로<br />
              <span className="text-primary-400">무료 상담</span>을 받아보세요
            </h2>
            <p className="text-white/80 text-lg mb-8">
              20년 경력의 임플란트 전문의가 직접 상담해 드립니다.
              환자 상태에 맞는 최적의 치료 계획을 세워드립니다.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <benefit.icon size={18} className="text-primary-400" />
                  <span className="text-white text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:02-555-1234"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
              >
                <Phone size={20} />
                02-555-1234
              </a>
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-secondary-800 px-8 py-4 rounded-full font-medium text-lg transition-colors"
              >
                <Calendar size={20} />
                온라인 예약
              </Link>
            </div>

            <p className="mt-6 text-white/60 text-sm">
              평일 09:30-18:30 / 토요일 09:30-14:00 / 일요일 휴진
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="치과 상담"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-800/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-secondary-500">전화 상담</p>
                  <p className="font-bold text-secondary-800">02-555-1234</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
