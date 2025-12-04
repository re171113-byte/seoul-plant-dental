'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { doctors } from '@/data/mockData';

export default function DoctorsContent() {
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
            <h1 className="text-4xl font-bold mb-4">{t('doctors.title')}</h1>
            <p className="text-xl text-primary-100">{t('doctors.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`grid md:grid-cols-3 gap-8 ${
                        index % 2 === 1 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Photo */}
                      <div
                        className={`aspect-square md:aspect-auto ${
                          index % 2 === 1 ? 'md:order-2' : ''
                        }`}
                      >
                        <PlaceholderImage type="doctor" className="w-full h-full min-h-[300px]" />
                      </div>

                      {/* Info */}
                      <div className="md:col-span-2 p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h2 className="text-3xl font-bold text-primary-500">{doctor.name[locale]}</h2>
                          <span className="px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm font-medium">
                            {doctor.title[locale]}
                          </span>
                        </div>

                        {/* Specialty Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {doctor.specialty[locale].map((spec, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-secondary-50 text-secondary-600 rounded-full text-sm"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-accent-400 pl-4 mb-6 text-text-secondary italic">
                          "{doctor.message[locale]}"
                        </blockquote>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Education */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <GraduationCap className="w-5 h-5 text-primary-500" />
                              <h3 className="font-bold text-primary-500">{t('doctors.education')}</h3>
                            </div>
                            <ul className="space-y-1 text-sm text-text-secondary">
                              {doctor.education[locale].map((edu, idx) => (
                                <li key={idx}>• {edu}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Career */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Briefcase className="w-5 h-5 text-primary-500" />
                              <h3 className="font-bold text-primary-500">{t('doctors.career')}</h3>
                            </div>
                            <ul className="space-y-1 text-sm text-text-secondary">
                              {doctor.career[locale].map((car, idx) => (
                                <li key={idx}>• {car}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              전문 의료진과 상담해보세요
            </h2>
            <p className="text-text-secondary mb-8">
              궁금한 점이 있으시면 언제든지 문의해 주세요.
            </p>
            <Link href="/reservation">
              <Button variant="primary" size="lg">
                상담 예약하기
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
