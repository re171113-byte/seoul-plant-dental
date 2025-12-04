'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'implant',
    title: '임플란트',
    subtitle: 'Implant',
    description: '20년 경력 전문의의 정확한 시술로 자연치아와 같은 임플란트를 제공합니다.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
    href: '/services/implant',
    features: ['네비게이션 임플란트', '즉시 식립', '뼈이식 전문'],
    color: 'bg-primary-500',
  },
  {
    id: 'full-mouth',
    title: '전악 임플란트',
    subtitle: 'Full Mouth',
    description: 'All-on-4/6 시스템으로 당일 임시치아 식립이 가능합니다.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    href: '/services/implant',
    features: ['전악 재건', 'All-on-4', '당일 임시치아'],
    color: 'bg-secondary-800',
  },
  {
    id: 'cosmetic',
    title: '심미치료',
    subtitle: 'Cosmetic',
    description: '라미네이트, 미백 등으로 자연스럽고 아름다운 미소를 만들어 드립니다.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
    href: '/services',
    features: ['라미네이트', '치아미백', '잇몸성형'],
    color: 'bg-accent-500',
  },
  {
    id: 'general',
    title: '일반진료',
    subtitle: 'General',
    description: '충치, 신경치료, 스케일링 등 기본에 충실한 치료를 제공합니다.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    href: '/services',
    features: ['충치치료', '신경치료', '스케일링'],
    color: 'bg-teal-dark',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-medium mb-2">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            진료 안내
          </h2>
          <p className="text-secondary-500 text-lg max-w-2xl mx-auto">
            20년 경력의 전문의가 최신 장비와 기술로 정확하게 진료합니다
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/80 text-sm">{service.subtitle}</span>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <div className={`absolute top-4 right-4 w-10 h-10 ${service.color} rounded-full flex items-center justify-center`}>
                      <Plus size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <p className="text-secondary-600 text-sm mb-4 flex-grow">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-secondary-500">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="flex items-center text-primary-500 font-medium group-hover:gap-3 gap-1 transition-all pt-4 border-t border-border">
                      <span>자세히 보기</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-secondary-800 hover:bg-secondary-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            전체 진료과목 보기
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
