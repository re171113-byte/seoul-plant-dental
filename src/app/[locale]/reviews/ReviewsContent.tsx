'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { reviews } from '@/data/mockData';

const videoReviews = [
  {
    id: 1,
    title: { ko: '임플란트 후기 - 김*영 환자', en: 'Implant Review - Patient K', zh: '种植牙后记 - 金患者' }
  },
  {
    id: 2,
    title: { ko: '전악재건 후기 - 이*호 환자', en: 'Full Mouth Reconstruction - Patient L', zh: '全口重建后记 - 李患者' }
  },
  {
    id: 3,
    title: { ko: '외국인 환자 인터뷰', en: 'Foreign Patient Interview', zh: '外国患者采访' }
  },
];

export default function ReviewsContent() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';

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
            <h1 className="text-4xl font-bold mb-4">{t('reviews.title')}</h1>
            <p className="text-xl text-primary-100">{t('reviews.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary-500">4.9</div>
              <div className="flex justify-center my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-text-secondary">평균 별점</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">1,200+</div>
              <div className="text-sm text-text-secondary mt-4">누적 후기</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">98%</div>
              <div className="text-sm text-text-secondary mt-4">만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-500 text-center mb-12">
            환자 후기
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-accent-300 mb-4" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-text-primary mb-4 flex-grow">
                      "{review.content[locale]}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="font-medium text-primary-500">{review.author}</p>
                        <p className="text-sm text-text-secondary">{review.treatment[locale]}</p>
                      </div>
                      <span className="text-sm text-text-secondary">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-500 text-center mb-12">
            {t('reviews.videoReviews')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {videoReviews.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-500 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-primary-500">{video.title[locale]}</h3>
                    </div>
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
