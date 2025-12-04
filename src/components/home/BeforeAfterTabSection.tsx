'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const categories = [
  { id: 'all', label: '전체' },
  { id: 'implant', label: '임플란트' },
  { id: 'full-mouth', label: '전악 임플란트' },
  { id: 'cosmetic', label: '심미치료' },
  { id: 'denture', label: '틀니' },
];

const cases = [
  {
    id: 1,
    category: 'implant',
    before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400&q=80',
    title: '임플란트 2개 식립',
    description: '상악 소구치 2개 임플란트',
    branch: '강남본원',
  },
  {
    id: 2,
    category: 'full-mouth',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
    title: 'All-on-4 전악 임플란트',
    description: '상악 전악 임플란트',
    branch: '잠실점',
  },
  {
    id: 3,
    category: 'cosmetic',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    title: '라미네이트 8개',
    description: '상악 전치부 라미네이트',
    branch: '분당점',
  },
  {
    id: 4,
    category: 'implant',
    before: 'https://images.unsplash.com/photo-1629909615957-be38d6d00906?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
    title: '뼈이식 후 임플란트',
    description: '하악 대구치 임플란트',
    branch: '일산점',
  },
  {
    id: 5,
    category: 'denture',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
    title: '정밀 부분 틀니',
    description: '하악 부분 틀니',
    branch: '강남본원',
  },
  {
    id: 6,
    category: 'full-mouth',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
    title: 'All-on-6 전악 임플란트',
    description: '상하악 전악 임플란트',
    branch: '잠실점',
  },
];

export default function BeforeAfterTabSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredCases = activeCategory === 'all'
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-primary-500 font-medium mb-2 block">BEFORE & AFTER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            치료 전후사진
          </h2>
          <p className="text-gray-500">
            서울플란트치과의 실제 치료 결과를 확인해보세요
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Before/After Images */}
                <div className="relative h-64">
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.before}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 text-xs font-medium rounded">
                      BEFORE
                    </div>
                  </div>

                  {/* After Image - Reveals on Hover */}
                  <motion.div
                    className="absolute inset-0 origin-left"
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{
                      clipPath: hoveredId === item.id ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.after}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-primary-500 text-white px-3 py-1 text-xs font-medium rounded">
                      AFTER
                    </div>
                  </motion.div>

                  {/* Slider Indicator */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 pointer-events-none" />
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-secondary-800">{item.title}</h3>
                    <span className="text-xs text-primary-500 bg-primary-50 px-2 py-1 rounded">
                      {item.branch}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Button */}
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-secondary-800 hover:bg-secondary-700 text-white px-8 py-3 font-medium transition-colors"
          >
            전체 전후사진 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
