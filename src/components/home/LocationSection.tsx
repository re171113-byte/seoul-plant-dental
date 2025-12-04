'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Train, ArrowRight } from 'lucide-react';

export default function LocationSection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-500 font-medium mb-2">LOCATION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            오시는 길
          </h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            강남역에서 도보 3분, 편리한 위치에서 만나보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-16 h-16 mx-auto mb-3 text-primary-300" />
                <p className="text-lg font-medium text-secondary-600">지도가 여기에 표시됩니다</p>
                <p className="text-sm text-secondary-400">Kakao Map / Google Map Embed</p>
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {/* Address Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">주소</h4>
                  <p className="text-secondary-600 text-sm">{t('common.address')}</p>
                  <p className="text-primary-500 text-sm mt-1">강남역 3번 출구 도보 3분</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">전화번호</h4>
                  <a
                    href="tel:02-555-1234"
                    className="text-xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    02-555-1234
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary-800 mb-2">진료시간</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <span className="text-secondary-500">평일</span>
                    <span className="text-secondary-700">09:30 - 18:30</span>
                    <span className="text-secondary-500">토요일</span>
                    <span className="text-secondary-700">09:30 - 14:00</span>
                    <span className="text-secondary-500">점심시간</span>
                    <span className="text-secondary-700">13:00 - 14:00</span>
                  </div>
                  <p className="text-xs text-primary-500 mt-2">일요일/공휴일 휴진</p>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="bg-primary-500 rounded-xl p-5 text-white">
              <h4 className="font-semibold mb-3">교통 안내</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Train size={16} className="text-primary-200" />
                  <span>지하철 2호선 강남역 3번 출구</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={16} className="text-primary-200" />
                  <span>건물 지하 주차장 (2시간 무료)</span>
                </div>
              </div>
            </div>

            {/* More Info Button */}
            <Link
              href="/location"
              className="flex items-center justify-center gap-2 w-full bg-secondary-800 hover:bg-secondary-700 text-white py-4 rounded-xl font-medium transition-colors"
            >
              자세한 안내
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
