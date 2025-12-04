'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageSquare, Lock, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { faqs, boardPosts } from '@/data/mockData';

export default function BoardContent() {
  const t = useTranslations();
  const locale = useLocale() as 'ko' | 'en' | 'zh';
  const [activeTab, setActiveTab] = useState<'faq' | 'board'>('faq');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <h1 className="text-4xl font-bold mb-4">{t('board.title')}</h1>
            <p className="text-xl text-primary-100">{t('board.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('faq')}
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-all',
                activeTab === 'faq'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {t('board.faq')}
            </button>
            <button
              onClick={() => setActiveTab('board')}
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-all',
                activeTab === 'board'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              상담 문의
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === 'faq' ? (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {faqs.map((faq, idx) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-primary-500 pr-4">
                        Q. {faq.question[locale]}
                      </span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-text-secondary border-t">
                            <p className="pt-4">A. {faq.answer[locale]}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="board"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Board Header */}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-text-secondary">
                    {locale === 'ko' && `총 ${boardPosts.length}개의 게시글`}
                    {locale === 'en' && `${boardPosts.length} posts total`}
                    {locale === 'zh' && `共${boardPosts.length}个帖子`}
                  </p>
                  <Button variant="primary" size="sm">
                    <MessageSquare className="mr-2" size={16} />
                    {t('board.write')}
                  </Button>
                </div>

                {/* Posts List */}
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {boardPosts.map((post) => (
                        <div
                          key={post.id}
                          className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 bg-secondary-100 text-secondary-600 text-xs rounded">
                                  {post.category[locale]}
                                </span>
                                {post.hasReply && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded flex items-center gap-1">
                                    <Check size={12} />
                                    {locale === 'ko' && '답변완료'}
                                    {locale === 'en' && 'Replied'}
                                    {locale === 'zh' && '已回复'}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-medium text-text-primary flex items-center gap-2">
                                {post.title[locale]}
                                <Lock size={14} className="text-gray-400" />
                              </h3>
                            </div>
                            <div className="text-right text-sm text-text-secondary whitespace-nowrap">
                              <p>{post.author}</p>
                              <p>{post.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={cn(
                        'w-10 h-10 rounded-lg font-medium transition-colors',
                        page === 1
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      )}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-secondary mb-4">
            급한 문의는 전화 상담을 이용해 주세요
          </p>
          <a
            href={`tel:${t('common.phone')}`}
            className="text-2xl font-bold text-primary-500 hover:text-secondary-500 transition-colors"
          >
            {t('common.phone')}
          </a>
        </div>
      </section>
    </div>
  );
}
