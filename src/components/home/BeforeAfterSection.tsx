'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cases = [
  {
    id: 1,
    category: '임플란트',
    title: '전악 임플란트 (All-on-4)',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
  },
  {
    id: 2,
    category: '라미네이트',
    title: '앞니 라미네이트 8개',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
  },
  {
    id: 3,
    category: '임플란트',
    title: '어금니 임플란트',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80',
  },
  {
    id: 4,
    category: '치아미백',
    title: '전체 치아미백',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
  },
];

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const getVisibleCases = () => {
    const visible = [];
    for (let i = 0; i < visibleItems; i++) {
      visible.push(cases[(currentIndex + i) % cases.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-secondary-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block text-primary-400 font-medium mb-2">BEFORE & AFTER</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              치료 전후 사진
            </h2>
            <p className="text-white/70 max-w-xl">
              실제 환자분들의 치료 전후 사진입니다. 개인에 따라 결과가 다를 수 있습니다.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleCases().map((caseItem, index) => (
            <motion.div
              key={`${caseItem.id}-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={caseItem.before}
                    alt="치료 전"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-secondary-800 text-white text-xs px-2 py-1 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={caseItem.after}
                    alt="치료 후"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="inline-block bg-primary-50 text-primary-600 text-xs px-2 py-1 rounded mb-2">
                  {caseItem.category}
                </span>
                <h3 className="text-secondary-800 font-medium">{caseItem.title}</h3>
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
            href="/gallery"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            전후사진 더 보기
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-white/50 text-sm mt-8">
          ※ 모든 사진은 환자 동의 하에 게재되었으며, 개인에 따라 결과가 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
