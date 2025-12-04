'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Target, Building, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { historyTimeline } from '@/data/mockData';

export default function AboutContent() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';

  const certifications = {
    ko: [
      '보건복지부 인증 의료기관',
      '대한치과임플란트학회 인증',
      '의료관광 우수기관',
      'ISO 9001 품질인증',
    ],
    en: [
      'MOHW Certified Medical Institution',
      'Korean Academy of Implant Dentistry Certified',
      'Excellent Medical Tourism Facility',
      'ISO 9001 Quality Certification',
    ],
    zh: [
      '保健福祉部认证医疗机构',
      '韩国种植牙学会认证',
      '优秀医疗旅游机构',
      'ISO 9001质量认证',
    ],
  };

  const facilities = {
    ko: [
      { name: 'CT 촬영실', desc: '최신 3D CT로 정밀 진단' },
      { name: '수술실', desc: '무균 수술실 완비' },
      { name: '멸균실', desc: '철저한 감염관리' },
      { name: '상담실', desc: '프라이빗 상담 공간' },
      { name: '회복실', desc: '편안한 회복 공간' },
      { name: '주차장', desc: '지하 주차 2시간 무료' },
    ],
    en: [
      { name: 'CT Room', desc: 'Precise diagnosis with latest 3D CT' },
      { name: 'Surgery Room', desc: 'Sterile operating room' },
      { name: 'Sterilization Room', desc: 'Thorough infection control' },
      { name: 'Consultation Room', desc: 'Private consultation space' },
      { name: 'Recovery Room', desc: 'Comfortable recovery area' },
      { name: 'Parking', desc: '2 hours free underground parking' },
    ],
    zh: [
      { name: 'CT室', desc: '最新3D CT精密诊断' },
      { name: '手术室', desc: '无菌手术室' },
      { name: '灭菌室', desc: '严格感染控制' },
      { name: '咨询室', desc: '私密咨询空间' },
      { name: '恢复室', desc: '舒适恢复区' },
      { name: '停车场', desc: '地下停车2小时免费' },
    ],
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-primary-100">{t('about.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-500 mb-4">
                    {t('about.philosophy')}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.philosophyDesc')}
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>환자 중심의 맞춤 치료</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>정직하고 투명한 진료비</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>최신 장비와 기술 도입</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-secondary-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-500 mb-4">
                    {t('about.vision')}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.visionDesc')}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-accent-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-500">20+</div>
                      <div className="text-sm text-text-secondary">Years</div>
                    </div>
                    <div className="bg-accent-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-500">50,000+</div>
                      <div className="text-sm text-text-secondary">Cases</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-500 text-center mb-12"
          >
            {t('about.history')}
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-8">
                    <div
                      className={`bg-white p-4 rounded-xl shadow-md ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-8'
                      }`}
                    >
                      <div className="text-accent-500 font-bold">{item.year}</div>
                      <div className="text-text-primary">{item.event[locale]}</div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-500 text-center mb-12"
          >
            {t('about.facilities')}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {facilities[locale].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-secondary-500" />
                    </div>
                    <h3 className="font-bold text-primary-500 mb-2">{facility.name}</h3>
                    <p className="text-sm text-text-secondary">{facility.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('about.certifications')}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications[locale].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <Shield className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <p className="font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
