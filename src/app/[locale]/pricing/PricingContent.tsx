'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Phone, CreditCard, Shield, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const pricingData = [
  {
    category: '임플란트',
    items: [
      { name: '국산 임플란트 (오스템, 덴티움)', price: '80만원 ~', note: '10년 보증' },
      { name: '프리미엄 임플란트 (스트라우만)', price: '150만원 ~', note: '10년 보증' },
      { name: '즉시 임플란트', price: '100만원 ~', note: '당일 시술' },
      { name: '전악 임플란트 (All-on-4)', price: '상담 필요', note: '맞춤 견적' },
    ],
  },
  {
    category: '심미치료',
    items: [
      { name: '라미네이트 (1개)', price: '50만원 ~', note: '' },
      { name: '치아미백 (전체)', price: '30만원 ~', note: '' },
      { name: '잇몸성형', price: '20만원 ~', note: '' },
    ],
  },
  {
    category: '일반진료',
    items: [
      { name: '스케일링', price: '5만원 ~', note: '보험 적용시 1.5만원' },
      { name: '충치치료 (레진)', price: '8만원 ~', note: '' },
      { name: '신경치료', price: '10만원 ~', note: '' },
      { name: '크라운', price: '30만원 ~', note: '재료별 상이' },
    ],
  },
  {
    category: '교정치료',
    items: [
      { name: '투명교정 (인비절라인)', price: '400만원 ~', note: '' },
      { name: '세라믹 교정', price: '300만원 ~', note: '' },
      { name: '부분교정', price: '100만원 ~', note: '' },
    ],
  },
];

export default function PricingContent() {
  const t = useTranslations();

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
            <h1 className="text-4xl font-bold mb-4">{t('pricing.title')}</h1>
            <p className="text-xl text-primary-100">{t('pricing.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {pricingData.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-primary-500 mb-6 pb-4 border-b">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-text-primary">{item.name}</p>
                            {item.note && (
                              <p className="text-sm text-text-secondary">{item.note}</p>
                            )}
                          </div>
                          <p className="font-bold text-accent-500 whitespace-nowrap ml-4">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <HelpCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-2">안내사항</p>
              <ul className="space-y-1">
                <li>{t('pricing.disclaimer')}</li>
                <li>• 표시된 금액은 부가세 포함 예상 비용이며, 실제 비용은 진료 후 확정됩니다.</li>
                <li>• 보험 적용 여부 및 환자 상태에 따라 비용이 달라질 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Insurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Payment Plans */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-secondary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-500">{t('pricing.payment')}</h3>
                  </div>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                      무이자 할부 (최대 12개월)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                      카드 결제 가능 (모든 카드사)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                      현금 결제 시 할인 적용
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                      덴탈론 (치과 전용 할부)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-500">{t('pricing.insurance')}</h3>
                  </div>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-500 rounded-full" />
                      국민건강보험 적용 (스케일링, 보존치료 등)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-500 rounded-full" />
                      65세 이상 임플란트 건강보험 적용
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-500 rounded-full" />
                      실손보험 청구 가능
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-500 rounded-full" />
                      의료비 세액공제 서류 발급
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">{t('pricing.consultation')}</h2>
            <p className="text-primary-100 mb-8">
              정확한 비용은 상담 후 안내해 드립니다. 부담 없이 문의해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${t('common.phone')}`}>
                <Button size="lg" className="bg-white text-primary-500 hover:bg-primary-50">
                  <Phone className="mr-2" size={20} />
                  전화 상담
                </Button>
              </a>
              <Link href="/reservation">
                <Button variant="accent" size="lg">
                  온라인 상담 예약
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
