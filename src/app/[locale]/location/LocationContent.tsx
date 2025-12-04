'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Train, Bus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function LocationContent() {
  const t = useTranslations();

  const hours = [
    { day: t('location.weekday'), time: '09:30 - 18:30' },
    { day: t('location.saturday'), time: '09:30 - 14:00' },
    { day: t('location.sunday'), time: t('location.closed'), closed: true },
    { day: t('location.lunch'), time: '13:00 - 14:00' },
  ];

  const directions = [
    {
      icon: Train,
      title: t('location.subway'),
      items: [
        '2호선 강남역 3번 출구 도보 5분',
        '신분당선 강남역 5번 출구 도보 3분',
      ],
    },
    {
      icon: Bus,
      title: t('location.bus'),
      items: [
        '간선: 140, 144, 145, 146',
        '지선: 3412, 4412',
        '광역: 9404, 9408',
      ],
    },
    {
      icon: Car,
      title: t('location.parking'),
      items: [
        '건물 지하 주차장 이용 (2시간 무료)',
        '인근 공영주차장 이용 가능',
      ],
    },
  ];

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">{t('location.title')}</h1>
            <p className="text-xl text-primary-100">{t('location.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-0">
                  <div className="aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center">
                    {/* Replace with actual map embed */}
                    <div className="text-center text-gray-500 p-8">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">지도</p>
                      <p className="text-sm">Kakao Map 또는 Google Map Embed</p>
                      <p className="text-xs mt-4 text-gray-400">
                        서울특별시 강남구 테헤란로 123, 4층
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Address & Contact */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-500 mb-1">{t('location.address')}</h3>
                        <p className="text-text-secondary">{t('common.address')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-500 mb-1">{t('common.callNow')}</h3>
                        <a
                          href={`tel:${t('common.phone')}`}
                          className="text-secondary-500 hover:underline text-lg font-medium"
                        >
                          {t('common.phone')}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-accent-500" />
                    <h3 className="font-bold text-primary-500">{t('location.hours')}</h3>
                  </div>
                  <div className="space-y-3">
                    {hours.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex justify-between py-2 border-b border-gray-100 last:border-0 ${
                          item.closed ? 'text-red-500' : ''
                        }`}
                      >
                        <span className="font-medium">{item.day}</span>
                        <span className={item.closed ? 'text-red-500' : 'text-text-secondary'}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a href={`tel:${t('common.phone')}`}>
                  <Button variant="primary" size="lg" className="w-full">
                    <Phone className="mr-2" size={20} />
                    전화하기
                  </Button>
                </a>
                <a
                  href="https://map.kakao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    <MapPin className="mr-2" size={20} />
                    길찾기
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary-500 text-center mb-12"
          >
            교통 안내
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((direction, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                        <direction.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <h3 className="font-bold text-primary-500">{direction.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {direction.items.map((item, i) => (
                        <li key={i} className="text-text-secondary text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
