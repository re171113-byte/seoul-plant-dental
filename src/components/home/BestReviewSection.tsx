'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: '김**',
    age: '50대',
    treatment: '전악 임플란트',
    branch: '강남본원',
    rating: 5,
    content: '오랫동안 틀니를 사용하다가 전악 임플란트를 결심했습니다. 처음에는 걱정이 많았는데, 원장님께서 상세히 설명해주시고 시술 과정도 편안했습니다. 이제는 음식도 맛있게 먹고 자신있게 웃을 수 있어요.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    hasVideo: true,
  },
  {
    id: 2,
    name: '이**',
    age: '40대',
    treatment: '임플란트 2개',
    branch: '잠실점',
    rating: 5,
    content: '다른 치과에서 뼈이식이 필요하다고 해서 걱정했는데, 여기서는 네비게이션 임플란트로 뼈이식 없이 시술받았습니다. 통증도 거의 없고 회복도 빨랐어요. 정말 감사드립니다.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    hasVideo: false,
  },
  {
    id: 3,
    name: '박**',
    age: '60대',
    treatment: '전악 임플란트',
    branch: '분당점',
    rating: 5,
    content: '20년 넘게 틀니 때문에 고생했는데, 전악 임플란트 하고 나서 인생이 바뀌었습니다. 처음에 비용이 부담됐는데 무이자 할부도 해주시고, 결과가 너무 좋아서 만족합니다.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    hasVideo: true,
  },
  {
    id: 4,
    name: '최**',
    age: '30대',
    treatment: '라미네이트',
    branch: '일산점',
    rating: 5,
    content: '앞니 변색이 심해서 웃는 게 자신이 없었는데, 라미네이트 하고 나서 완전 달라졌어요! 자연스럽고 예쁘게 해주셔서 너무 좋아요. 스태프분들도 친절하시고 최고예요!',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    hasVideo: false,
  },
];

export default function BestReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 2)) % Math.ceil(reviews.length / 2));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-primary-500 font-medium mb-2 block">BEST REVIEW</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-2">
              생생한 치료후기
            </h2>
            <p className="text-gray-500">
              서울플란트치과에서 치료받으신 분들의 솔직한 후기입니다
            </p>
          </div>
          <Link
            href="/reviews"
            className="mt-4 md:mt-0 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            전체 후기 보기 →
          </Link>
        </motion.div>

        {/* Reviews */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={`${review.name} 후기`}
                        fill
                        className="object-cover"
                      />
                      {review.hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Play size={20} className="text-primary-500 ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-secondary-800">{review.name}</span>
                            <span className="text-sm text-gray-400">{review.age}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-primary-500 font-medium">{review.treatment}</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">{review.branch}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote size={24} className="text-gray-200 absolute -top-1 -left-1" />
                        <p className="text-gray-600 text-sm leading-relaxed pl-6 line-clamp-4">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-gray-300 hover:border-primary-500 hover:text-primary-500 flex items-center justify-center transition-colors rounded"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-gray-300 hover:border-primary-500 hover:text-primary-500 flex items-center justify-center transition-colors rounded"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
