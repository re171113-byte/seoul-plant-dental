'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Award, GraduationCap } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: '김서울',
    position: '대표원장',
    specialty: '임플란트·전악재건',
    branch: '강남본원',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    education: '서울대학교 치의학대학원 박사',
    career: ['대한임플란트학회 정회원', '미국 AO 임플란트 연수', '임플란트 시술 50,000건+'],
  },
  {
    id: 2,
    name: '이강남',
    position: '원장',
    specialty: '심미보철·라미네이트',
    branch: '강남본원',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    education: '연세대학교 치과대학 졸업',
    career: ['대한심미치과학회 정회원', '라미네이트 전문 과정 수료', '심미보철 3,000건+'],
  },
  {
    id: 3,
    name: '박잠실',
    position: '원장',
    specialty: '전악임플란트·틀니',
    branch: '잠실점',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
    education: '고려대학교 치의학전문대학원',
    career: ['대한구강악안면임플란트학회', 'All-on-4 Master Course', '전악 임플란트 1,000건+'],
  },
  {
    id: 4,
    name: '최분당',
    position: '원장',
    specialty: '치주·임플란트',
    branch: '분당점',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
    education: '경희대학교 치과대학 졸업',
    career: ['대한치주과학회 인정의', '치주재생술 전문', '치주 임플란트 2,000건+'],
  },
];

export default function DoctorSection() {
  return (
    <section className="py-20 bg-secondary-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-medium mb-2 block">MEDICAL TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            의료진 소개
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            각 분야 최고의 전문의가 환자분의 건강한 치아를 위해 최선을 다합니다
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-secondary-700 rounded-lg overflow-hidden hover:bg-secondary-600 transition-colors">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800 via-transparent to-transparent" />

                  {/* Branch Badge */}
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 text-xs font-medium rounded">
                    {doctor.branch}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 -mt-12 relative z-10">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{doctor.name}</h3>
                      <span className="text-primary-400 text-sm">{doctor.position}</span>
                    </div>
                    <p className="text-sm text-white/70">{doctor.specialty}</p>
                  </div>

                  {/* Education */}
                  <div className="flex items-start gap-2 mb-2 text-sm">
                    <GraduationCap size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{doctor.education}</span>
                  </div>

                  {/* Career Highlights */}
                  <div className="space-y-1">
                    {doctor.career.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/60">
                        <Award size={12} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center mt-10">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 font-medium transition-colors"
          >
            전체 의료진 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
