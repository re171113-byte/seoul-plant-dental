'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Clock, ChevronRight, TrainFront } from 'lucide-react';
import Image from 'next/image';

const branches = [
  {
    id: 1,
    name: '강남본원',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    address: '서울특별시 강남구 테헤란로 123 서울빌딩 5층',
    tel: '02-555-1234',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
    subway: '강남역 2번 출구 도보 3분',
    features: ['주차가능', '야간진료(화)', '당일예약'],
  },
  {
    id: 2,
    name: '잠실점',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    address: '서울특별시 송파구 올림픽로 456 롯데월드타워 10층',
    tel: '02-555-5678',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
    subway: '잠실역 2번 출구 직결',
    features: ['주차가능', '당일예약'],
  },
  {
    id: 3,
    name: '분당점',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    address: '경기도 성남시 분당구 정자일로 789 분당타워 3층',
    tel: '031-555-9012',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
    subway: '정자역 4번 출구 도보 5분',
    features: ['주차가능', '야간진료(목)', '당일예약'],
  },
  {
    id: 4,
    name: '일산점',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    address: '경기도 고양시 일산동구 중앙로 234 일산메디컬센터 7층',
    tel: '031-555-3456',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
    subway: '주엽역 1번 출구 도보 2분',
    features: ['주차가능', '당일예약', '신규오픈'],
  },
];

export default function BranchSection() {
  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium mb-2 block">LOCATIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            지점 안내
          </h2>
          <p className="text-gray-500">
            서울플란트치과 4개 지점에서 동일한 수준의 진료를 받으실 수 있습니다
          </p>
        </motion.div>

        {/* Branch Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {branches.map((branch, idx) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeBranch === idx
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
            >
              <MapPin size={16} className="inline-block mr-1 -mt-0.5" />
              {branch.name}
            </button>
          ))}
        </div>

        {/* Branch Detail */}
        <motion.div
          key={activeBranch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={branches[activeBranch].image}
                alt={branches[activeBranch].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden">
                <h3 className="text-2xl font-bold text-white">{branches[activeBranch].name}</h3>
              </div>

              {/* Feature Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {branches[activeBranch].features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      feature === '신규오픈'
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-secondary-800'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12">
              <h3 className="hidden lg:block text-3xl font-bold text-secondary-800 mb-6">
                {branches[activeBranch].name}
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">주소</p>
                    <p className="font-medium text-secondary-800">{branches[activeBranch].address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">전화</p>
                    <a
                      href={`tel:${branches[activeBranch].tel}`}
                      className="font-bold text-xl text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {branches[activeBranch].tel}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">진료시간</p>
                    <p className="font-medium text-secondary-800">{branches[activeBranch].hours}</p>
                    <p className="text-sm text-red-500">일요일/공휴일 휴진</p>
                  </div>
                </div>

                {/* Subway */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrainFront size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">대중교통</p>
                    <p className="font-medium text-secondary-800">{branches[activeBranch].subway}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-8">
                <a
                  href={`tel:${branches[activeBranch].tel}`}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 text-center font-medium transition-colors rounded"
                >
                  전화상담
                </a>
                <Link
                  href="/location"
                  className="flex-1 bg-secondary-800 hover:bg-secondary-700 text-white py-3 text-center font-medium transition-colors rounded flex items-center justify-center gap-1"
                >
                  지도보기
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branch Cards - Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 lg:hidden">
          {branches.map((branch, idx) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(idx)}
              className={`p-4 rounded-lg text-left transition-all ${
                activeBranch === idx
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-secondary-800 shadow'
              }`}
            >
              <h4 className="font-bold mb-1">{branch.name}</h4>
              <p className={`text-sm ${activeBranch === idx ? 'text-white/80' : 'text-gray-500'}`}>
                {branch.tel}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
