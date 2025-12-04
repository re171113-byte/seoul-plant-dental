'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ChevronUp, ChevronDown, Bell, Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    type: 'notice',
    title: '2024년 설 연휴 진료 안내',
    date: '2024.02.05',
  },
  {
    id: 2,
    type: 'news',
    title: '강남본원 리모델링 오픈 안내',
    date: '2024.01.20',
  },
  {
    id: 3,
    type: 'notice',
    title: '일산점 신규 오픈 기념 이벤트',
    date: '2024.01.15',
  },
  {
    id: 4,
    type: 'news',
    title: '임플란트 무이자 할부 이벤트 연장',
    date: '2024.01.10',
  },
  {
    id: 5,
    type: 'notice',
    title: '네비게이션 임플란트 장비 도입 안내',
    date: '2024.01.05',
  },
];

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Label */}
          <div className="flex items-center gap-2 pr-6 border-r border-gray-300">
            <Bell size={18} className="text-primary-500" />
            <span className="font-bold text-secondary-800">공지사항</span>
          </div>

          {/* News Ticker */}
          <div className="flex-1 px-6 overflow-hidden h-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center"
              >
                <Link
                  href="/board"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary-500 transition-colors"
                >
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      newsItems[currentIndex].type === 'notice'
                        ? 'bg-primary-500 text-white'
                        : 'bg-secondary-800 text-white'
                    }`}
                  >
                    {newsItems[currentIndex].type === 'notice' ? '공지' : '소식'}
                  </span>
                  <span className="truncate">{newsItems[currentIndex].title}</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Calendar size={12} />
                    {newsItems[currentIndex].date}
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1 pl-6 border-l border-gray-300">
            <button
              onClick={goToPrev}
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors"
            >
              <ChevronUp size={16} />
            </button>
            <button
              onClick={goToNext}
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors"
            >
              <ChevronDown size={16} />
            </button>
          </div>

          {/* More Button */}
          <Link
            href="/board"
            className="ml-4 text-sm text-gray-500 hover:text-primary-500 transition-colors hidden sm:block"
          >
            + 더보기
          </Link>
        </div>
      </div>
    </section>
  );
}
