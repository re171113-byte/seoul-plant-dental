'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { doctors } from '@/data/mockData';

export default function DoctorsSection() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-medium mb-2">DOCTORS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            의료진 소개
          </h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            20년 경력의 전문의가 환자 한 분 한 분께 최선의 진료를 제공합니다
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-background-secondary rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
                {/* Doctor Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1559839734-2b71ea197ec2' : index === 1 ? '1594824476967-48c8b964273f' : '1651008376811-b90baee60c1f'}?w=400&q=80`}
                    alt={doctor.name[locale]}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary-500 font-medium">{doctor.title[locale]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">
                    {doctor.name[locale]}
                  </h3>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.specialty[locale].slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-secondary-600 text-xs rounded-full border border-gray-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Credentials */}
                  <div className="space-y-2 text-sm text-secondary-500">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-primary-500" />
                      <span>{doctor.education[locale][0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-primary-500" />
                      <span>{doctor.career[locale][0]}</span>
                    </div>
                  </div>
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
            href="/doctors"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            전체 의료진 보기
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
