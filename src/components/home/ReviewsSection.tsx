'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { reviews } from '@/data/mockData';

export default function ReviewsSection() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-500 font-medium mb-2">REVIEWS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            환자 후기
          </h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            실제 치료를 받으신 환자분들의 생생한 후기입니다
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-secondary-600 mb-6 flex-grow leading-relaxed line-clamp-4">
                  "{review.content[locale]}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-medium text-secondary-800">{review.author}</p>
                    <p className="text-sm text-primary-500">{review.treatment[locale]}</p>
                  </div>
                  <span className="text-sm text-secondary-400">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            더 많은 후기 보기
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
