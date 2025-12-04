'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function ReservationContent() {
  const t = useTranslations();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ReservationFormData>();

  const selectedDate = watch('date');
  const selectedService = watch('service');

  const services = [
    { id: 'implant', name: '임플란트 상담' },
    { id: 'cosmetic', name: '심미치료 상담' },
    { id: 'general', name: '일반진료' },
    { id: 'checkup', name: '정기검진' },
    { id: 'other', name: '기타 상담' },
  ];

  const timeSlots = [
    '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  const onSubmit = async (data: ReservationFormData) => {
    setIsLoading(true);

    // Simulate API call - in production, this would save to Firebase
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Reservation data:', data);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-20"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-primary-500 mb-4">{t('reservation.success')}</h1>
            <p className="text-text-secondary mb-8">{t('reservation.successMessage')}</p>
            <Button variant="primary" onClick={() => window.location.reload()}>
              새 예약하기
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

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
            <h1 className="text-4xl font-bold mb-4">{t('reservation.title')}</h1>
            <p className="text-xl text-primary-100">{t('reservation.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div
                          className={cn(
                            'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors',
                            step >= s
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-200 text-gray-400'
                          )}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={cn(
                              'w-16 h-1 mx-2',
                              step > s ? 'bg-primary-500' : 'bg-gray-200'
                            )}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Step 1: Select Service & Date */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-lg font-semibold text-primary-500 mb-4">
                            {t('reservation.selectService')}
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {services.map((service) => (
                              <label
                                key={service.id}
                                className={cn(
                                  'flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all',
                                  selectedService === service.id
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 hover:border-primary-300'
                                )}
                              >
                                <input
                                  type="radio"
                                  value={service.id}
                                  {...register('service', { required: true })}
                                  className="sr-only"
                                />
                                <span className="text-sm font-medium">{service.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-lg font-semibold text-primary-500 mb-4">
                            {t('reservation.selectDate')}
                          </label>
                          <input
                            type="date"
                            {...register('date', { required: true })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                          />
                        </div>

                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          className="w-full"
                          onClick={() => setStep(2)}
                          disabled={!selectedService || !selectedDate}
                        >
                          다음 단계
                        </Button>
                      </motion.div>
                    )}

                    {/* Step 2: Select Time */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-lg font-semibold text-primary-500 mb-4">
                            {t('reservation.selectTime')}
                          </label>
                          <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                            {timeSlots.map((time) => (
                              <label
                                key={time}
                                className={cn(
                                  'flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all',
                                  watch('time') === time
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 hover:border-primary-300'
                                )}
                              >
                                <input
                                  type="radio"
                                  value={time}
                                  {...register('time', { required: true })}
                                  className="sr-only"
                                />
                                <span className="text-sm font-medium">{time}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="flex-1"
                            onClick={() => setStep(1)}
                          >
                            이전
                          </Button>
                          <Button
                            type="button"
                            variant="primary"
                            size="lg"
                            className="flex-1"
                            onClick={() => setStep(3)}
                            disabled={!watch('time')}
                          >
                            다음 단계
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Patient Info */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        <h3 className="text-lg font-semibold text-primary-500 mb-4">
                          {t('reservation.patientInfo')}
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <User className="inline w-4 h-4 mr-2" />
                              {t('reservation.name')} *
                            </label>
                            <input
                              type="text"
                              {...register('name', { required: true })}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                              placeholder="홍길동"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <Phone className="inline w-4 h-4 mr-2" />
                              {t('reservation.phone')} *
                            </label>
                            <input
                              type="tel"
                              {...register('phone', { required: true })}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                              placeholder="010-1234-5678"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <Mail className="inline w-4 h-4 mr-2" />
                              {t('reservation.email')}
                            </label>
                            <input
                              type="email"
                              {...register('email')}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                              placeholder="example@email.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <MessageSquare className="inline w-4 h-4 mr-2" />
                              {t('reservation.message')}
                            </label>
                            <textarea
                              {...register('message')}
                              rows={3}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none resize-none"
                              placeholder="추가 요청사항이 있으시면 작성해주세요"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="flex-1"
                            onClick={() => setStep(2)}
                          >
                            이전
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="flex-1"
                            isLoading={isLoading}
                          >
                            {t('reservation.submit')}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* External Reservation Options */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary-500 mb-4">다른 방법으로 예약하기</h3>
                  <div className="space-y-3">
                    <a
                      href="https://booking.naver.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <span className="font-medium text-green-700">{t('reservation.naverReservation')}</span>
                      <ExternalLink className="w-5 h-5 text-green-600" />
                    </a>
                    <a
                      href="https://pf.kakao.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors"
                    >
                      <span className="font-medium text-yellow-700">{t('reservation.kakaoConsult')}</span>
                      <ExternalLink className="w-5 h-5 text-yellow-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary-500 mb-4">전화 예약</h3>
                  <a
                    href={`tel:${t('common.phone')}`}
                    className="flex items-center gap-3 text-lg font-medium text-secondary-500"
                  >
                    <Phone className="w-5 h-5" />
                    {t('common.phone')}
                  </a>
                  <p className="mt-3 text-sm text-text-secondary">
                    평일 09:30 - 18:30
                    <br />
                    토요일 09:30 - 14:00
                  </p>
                </CardContent>
              </Card>

              {/* Note */}
              <Card className="bg-primary-50 border-primary-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary-500 mb-2">안내사항</h3>
                  <ul className="text-sm text-text-secondary space-y-2">
                    <li>• 예약 확정 후 변경/취소는 전화로 문의해 주세요</li>
                    <li>• 예약시간 10분 전에 내원해 주세요</li>
                    <li>• 신분증을 지참해 주세요</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
