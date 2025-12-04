'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, Shield } from 'lucide-react';

export default function StatsSection() {
  const t = useTranslations('home');

  const stats = [
    {
      icon: Award,
      value: '20+',
      label: '년 경력',
      suffix: '',
    },
    {
      icon: Users,
      value: '50,000',
      label: '누적 시술',
      suffix: '+',
    },
    {
      icon: ThumbsUp,
      value: '98',
      label: '만족도',
      suffix: '%',
    },
    {
      icon: Shield,
      value: '10',
      label: '년 보증',
      suffix: '년',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center py-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full mb-3">
                <stat.icon className="w-7 h-7 text-primary-500" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-secondary-800">
                  {stat.value}
                </span>
                <span className="text-xl text-primary-500 font-medium">{stat.suffix}</span>
              </div>
              <div className="text-secondary-500 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
