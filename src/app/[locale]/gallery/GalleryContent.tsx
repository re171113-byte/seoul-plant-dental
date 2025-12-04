'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { galleryItems } from '@/data/mockData';

export default function GalleryContent() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: t('gallery.filterAll') },
    { id: 'implant', label: t('gallery.filterImplant') },
    { id: 'cosmetic', label: t('gallery.filterCosmetic') },
    { id: 'orthodontic', label: t('gallery.filterOrthodontic') },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

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
            <h1 className="text-4xl font-bold mb-4">{t('gallery.title')}</h1>
            <p className="text-xl text-primary-100">{t('gallery.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all',
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedItem(item.id)}
                >
                  <div className="grid grid-cols-2">
                    <div className="aspect-square relative">
                      <PlaceholderImage type="gallery" className="w-full h-full" />
                      <span className="absolute bottom-2 left-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                        {t('gallery.before')}
                      </span>
                    </div>
                    <div className="aspect-square relative">
                      <PlaceholderImage type="treatment" className="w-full h-full" />
                      <span className="absolute bottom-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded">
                        {t('gallery.after')}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white group-hover:bg-primary-50 transition-colors">
                    <p className="text-sm text-text-primary font-medium mb-2">{item.description[locale]}</p>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
                      {filters.find(f => f.id === item.category)?.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4 p-4">
                  <div className="aspect-square relative">
                    <PlaceholderImage type="gallery" className="w-full h-full rounded-lg" />
                    <span className="absolute bottom-4 left-4 bg-primary-500 text-white text-sm px-3 py-1 rounded">
                      {t('gallery.before')}
                    </span>
                  </div>
                  <div className="aspect-square relative">
                    <PlaceholderImage type="treatment" className="w-full h-full rounded-lg" />
                    <span className="absolute bottom-4 right-4 bg-accent-500 text-white text-sm px-3 py-1 rounded">
                      {t('gallery.after')}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t text-center">
                  <p className="text-text-primary font-medium">
                    {galleryItems.find(item => item.id === selectedItem)?.description[locale]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notice */}
      <section className="py-8 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-text-secondary">
            ※ 모든 사진은 환자 동의 하에 게재되었으며, 개인에 따라 결과가 다를 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
