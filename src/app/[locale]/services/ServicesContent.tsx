'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Stethoscope, Heart, Smile, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ServicesContent() {
  const t = useTranslations();

  const services = [
    {
      id: 'implant',
      icon: '🦷',
      title: t('services.implantTitle'),
      description: t('services.implantDesc'),
      features: [
        t('services.implantTypes.general'),
        t('services.implantTypes.fullMouth'),
        t('services.implantTypes.immediate'),
        t('services.implantTypes.navigation'),
      ],
      href: '/services/implant',
      featured: true,
    },
    {
      id: 'cosmetic',
      icon: Sparkles,
      title: t('services.cosmetic'),
      description: t('services.cosmeticDesc'),
      features: ['라미네이트', '치아미백', '잇몸성형', '심미보철'],
      href: '/services',
    },
    {
      id: 'general',
      icon: Stethoscope,
      title: t('services.general'),
      description: t('services.generalDesc'),
      features: ['충치치료', '신경치료', '사랑니발치', '정기검진'],
      href: '/services',
    },
    {
      id: 'periodontal',
      icon: Heart,
      title: t('services.periodontal'),
      description: t('services.periodontalDesc'),
      features: ['스케일링', '잇몸치료', '치주수술', '잇몸이식'],
      href: '/services',
    },
    {
      id: 'orthodontic',
      icon: Smile,
      title: t('services.orthodontic'),
      description: t('services.orthodonticDesc'),
      features: ['투명교정', '메탈교정', '세라믹교정', '부분교정'],
      href: '/services',
    },
  ];

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-xl text-primary-100">{t('services.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden ${
                    service.featured ? 'border-2 border-accent-400' : ''
                  }`}
                  hover
                >
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Image placeholder */}
                      <div
                        className={`aspect-video md:aspect-auto bg-gradient-to-br ${
                          service.featured
                            ? 'from-primary-500 to-primary-600'
                            : 'from-secondary-100 to-secondary-200'
                        } flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}
                      >
                        <div className="text-center p-8">
                          {typeof service.icon === 'string' ? (
                            <span className="text-6xl">{service.icon}</span>
                          ) : (
                            <service.icon
                              className={`w-16 h-16 mx-auto ${
                                service.featured ? 'text-white' : 'text-secondary-500'
                              }`}
                            />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {service.featured && (
                          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-sm font-medium rounded-full mb-4">
                            주력 진료
                          </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-text-secondary mb-6">{service.description}</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-text-primary">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={service.href}>
                          <Button variant={service.featured ? 'primary' : 'outline'} className="group">
                            {t('common.learnMore')}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </Button>
                        </Link>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4">
              어떤 치료가 필요한지 모르시겠나요?
            </h2>
            <p className="text-text-secondary mb-8">
              전문 상담을 통해 환자분께 가장 적합한 치료를 안내해 드립니다.
            </p>
            <Link href="/reservation">
              <Button variant="primary" size="lg">
                무료 상담 예약하기
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
