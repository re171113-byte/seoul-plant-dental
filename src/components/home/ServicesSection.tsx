'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'implant',
    title: '임플란트',
    subtitle: 'Implant',
    description: '20년 경력 전문의의 정확한 시술',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
    href: '/services/implant',
  },
  {
    id: 'full-mouth',
    title: '전악 임플란트',
    subtitle: 'Full Mouth',
    description: 'All-on-4/6 당일 임시치아',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    href: '/services/implant',
  },
  {
    id: 'cosmetic',
    title: '심미치료',
    subtitle: 'Cosmetic',
    description: '라미네이트, 미백, 잇몸성형',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
    href: '/services',
  },
  {
    id: 'general',
    title: '일반진료',
    subtitle: 'General',
    description: '충치, 신경치료, 스케일링',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    href: '/services',
  },
];

export default function ServicesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-3">
            진료안내
          </h2>
          <p className="text-gray-500">
            서울플란트치과의 전문 진료 분야를 소개합니다
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
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-xs text-white/70 tracking-wider">{service.subtitle}</span>
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <p className="text-sm text-white/80">{service.description}</p>

                    <div className="flex items-center gap-1 mt-3 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">자세히 보기</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
