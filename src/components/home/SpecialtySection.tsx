'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const specialties = [
  {
    id: 1,
    title: '임플란트',
    subtitle: 'Implant',
    description: '20년 경력 전문의의\n정확한 시술',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
    href: '/services/implant',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: '전악 임플란트',
    subtitle: 'All-on-4/6',
    description: '당일 임시치아\n하루만에 완성',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    href: '/services/implant',
    color: 'from-teal-600 to-teal-800',
  },
  {
    id: 3,
    title: '틀니',
    subtitle: 'Denture',
    description: '정밀 틀니\n편안한 착용감',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    href: '/services',
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 4,
    title: '심미치료',
    subtitle: 'Cosmetic',
    description: '라미네이트, 미백\n잇몸성형',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
    href: '/services',
    color: 'from-pink-600 to-pink-800',
  },
  {
    id: 5,
    title: '충치치료',
    subtitle: 'Cavity',
    description: '레진, 인레이\n정밀 충치치료',
    image: 'https://images.unsplash.com/photo-1629909615957-be38d6d00906?w=600&q=80',
    href: '/services',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 6,
    title: '신경치료',
    subtitle: 'Root Canal',
    description: '무통 신경치료\n치아 살리기',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
    href: '/services',
    color: 'from-orange-600 to-orange-800',
  },
  {
    id: 7,
    title: '치주치료',
    subtitle: 'Periodontal',
    description: '잇몸질환 치료\n스케일링',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    href: '/services',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 8,
    title: '치아교정',
    subtitle: 'Orthodontics',
    description: '투명교정\n심미교정',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&q=80',
    href: '/services',
    color: 'from-indigo-600 to-indigo-800',
  },
];

export default function SpecialtySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium mb-2 block">SPECIALTY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            특화진료안내
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            서울플란트치과는 임플란트를 주력으로 다양한 진료과목을 전문적으로 진료합니다
          </p>
        </motion.div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-80 transition-opacity`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    <span className="text-xs text-white/70 mb-1">{item.subtitle}</span>
                    <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-white/80 whitespace-pre-line leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-secondary-800 px-4 py-2 text-sm font-medium rounded">
                      자세히 보기
                    </span>
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
