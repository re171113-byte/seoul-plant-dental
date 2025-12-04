'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Award, Zap, Target, Compass } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ImplantContent() {
  const t = useTranslations();

  const implantTypes = [
    {
      icon: CheckCircle,
      title: t('services.implantTypes.general'),
      description: t('services.implantTypes.generalDesc'),
      features: ['검증된 프리미엄 임플란트', '10년 보증', '정밀 진단'],
    },
    {
      icon: Zap,
      title: t('services.implantTypes.fullMouth'),
      description: t('services.implantTypes.fullMouthDesc'),
      features: ['All-on-4/6', '하루 만에 가능', '비용 효율적'],
    },
    {
      icon: Clock,
      title: t('services.implantTypes.immediate'),
      description: t('services.implantTypes.immediateDesc'),
      features: ['발치 즉시 식립', '치료기간 단축', '1Day 임플란트'],
    },
    {
      icon: Compass,
      title: t('services.implantTypes.navigation'),
      description: t('services.implantTypes.navigationDesc'),
      features: ['3D CT 분석', '무절개 시술', '정확한 위치'],
    },
  ];

  const process = [
    { step: 1, title: '상담 및 검사', desc: '3D CT 촬영 및 구강 상태 정밀 검사' },
    { step: 2, title: '치료계획 수립', desc: '맞춤형 치료계획 설계 및 비용 안내' },
    { step: 3, title: '임플란트 식립', desc: '무통 마취 후 정밀 임플란트 식립' },
    { step: 4, title: '치유 기간', desc: '뼈와 임플란트 결합 (2-4개월)' },
    { step: 5, title: '보철물 장착', desc: '자연치아 같은 크라운 제작 및 장착' },
    { step: 6, title: '정기 관리', desc: '정기 검진 및 유지관리' },
  ];

  const brands = [
    { name: 'Straumann', country: '스위스', desc: '세계 1위 프리미엄 임플란트' },
    { name: 'Osstem', country: '한국', desc: '국내 1위, 세계 3위 임플란트' },
    { name: 'Nobel Biocare', country: '스웨덴', desc: '임플란트의 원조 브랜드' },
    { name: 'Dentium', country: '한국', desc: '가성비 좋은 국산 임플란트' },
  ];

  const faqs = [
    {
      q: '임플란트 시술이 아프지 않나요?',
      a: '국소마취를 통해 시술 중 통증은 거의 없습니다. 시술 후에도 진통제로 충분히 관리됩니다.',
    },
    {
      q: '임플란트 수명은 얼마나 되나요?',
      a: '관리만 잘 하시면 반영구적으로 사용 가능합니다. 저희 병원은 10년 무상 보증을 제공합니다.',
    },
    {
      q: '임플란트 비용은 얼마인가요?',
      a: '임플란트 종류와 환자 상태에 따라 다르며, 상담 후 정확한 비용을 안내드립니다.',
    },
    {
      q: '시술 기간은 얼마나 걸리나요?',
      a: '일반적으로 3-6개월이 소요되며, 즉시 임플란트의 경우 하루에 가능합니다.',
    },
  ];

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent-500/20 rounded-full text-accent-300 font-medium mb-6">
              IMPLANT CENTER
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('services.implantTitle')}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {t('services.implantDesc')}
              <br />
              20년 경력의 임플란트 전문의가 정확하고 안전하게 시술합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/reservation">
                <Button variant="accent" size="lg" className="group">
                  무료 상담 예약
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${t('common.phone')}`}>
                <Button size="lg" className="bg-white text-primary-500 hover:bg-primary-50">
                  전화 상담
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50,000+', label: '누적 시술 건수' },
              { value: '98%', label: '환자 만족도' },
              { value: '10년', label: '무상 보증' },
              { value: '20+', label: '전문의 경력' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-primary-500">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-500 mb-4">임플란트 종류</h2>
            <p className="text-text-secondary">환자 상태에 맞는 최적의 임플란트를 제안합니다</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {implantTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-500 mb-2">{type.title}</h3>
                        <p className="text-text-secondary mb-4">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary-50 text-secondary-600 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
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

      {/* Process */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-500 mb-4">시술 과정</h2>
            <p className="text-text-secondary">체계적인 과정으로 안전하게 진행됩니다</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary-500 mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-500 mb-4">사용 임플란트</h2>
            <p className="text-text-secondary">검증된 프리미엄 브랜드만 사용합니다</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card hover className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      🦷
                    </div>
                    <h3 className="font-bold text-primary-500">{brand.name}</h3>
                    <p className="text-sm text-accent-500 mb-2">{brand.country}</p>
                    <p className="text-sm text-text-secondary">{brand.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-500 mb-4">자주 묻는 질문</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-primary-500 mb-2">Q. {faq.q}</h3>
                    <p className="text-text-secondary">A. {faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">임플란트 상담이 필요하신가요?</h2>
            <p className="text-primary-100 mb-8">
              첫 방문 시 무료 CT 촬영 및 1:1 맞춤 상담을 제공합니다.
            </p>
            <Link href="/reservation">
              <Button variant="accent" size="lg" className="group">
                무료 상담 예약하기
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
