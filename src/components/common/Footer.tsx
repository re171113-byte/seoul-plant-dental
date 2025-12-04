'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/doctors', label: t('nav.doctors') },
    { href: '/services/implant', label: t('nav.implant') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/reviews', label: t('nav.reviews') },
    { href: '/reservation', label: t('nav.reservation') },
  ];

  const services = [
    { href: '/services/implant', label: '임플란트' },
    { href: '/services', label: '전악 임플란트' },
    { href: '/services', label: '심미치료' },
    { href: '/services', label: '일반진료' },
    { href: '/pricing', label: '비용안내' },
  ];

  return (
    <footer className="bg-secondary-800 text-white pb-20 lg:pb-0">
      {/* Top Section - CTA Banner */}
      <div className="bg-primary-500">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-1">지금 바로 상담 예약하세요</h3>
              <p className="text-white/90">20년 경력의 전문의가 직접 상담해 드립니다</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:02-555-1234"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone size={18} />
                02-555-1234
              </a>
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 bg-secondary-800 text-white px-6 py-3 rounded-full font-medium hover:bg-secondary-700 transition-colors"
              >
                온라인 예약
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif-logo text-2xl font-bold text-white mb-1">
                서울플란트치과
              </div>
              <p className="text-sm text-white/60 tracking-widest">SEOUL PLANT DENTAL</p>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              20년 경력의 임플란트 전문의가 최신 장비와 기술로 정밀하게 진료합니다.
              환자 한 분 한 분을 가족처럼 생각합니다.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Kakao"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Blog"
              >
                <span className="text-xs font-bold">B</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary-400">바로가기</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-primary-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary-400">진료과목</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-primary-500" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-primary-400">진료안내</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white/90 text-sm">{t('common.address')}</p>
                  <p className="text-white/60 text-xs mt-1">강남역 3번 출구 도보 3분</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary-400" />
                </div>
                <div>
                  <a
                    href="tel:02-555-1234"
                    className="text-white/90 hover:text-primary-400 transition-colors text-sm"
                  >
                    02-555-1234
                  </a>
                  <p className="text-white/60 text-xs mt-1">상담 및 예약 문의</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-primary-400" />
                </div>
                <div className="text-sm">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-white/80">
                    <span>평일</span>
                    <span>09:30 - 18:30</span>
                    <span>토요일</span>
                    <span>09:30 - 14:00</span>
                    <span>점심시간</span>
                    <span>13:00 - 14:00</span>
                  </div>
                  <p className="text-primary-400 text-xs mt-2">일요일/공휴일 휴진</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div className="text-center md:text-left">
              <p>상호: 서울플란트치과의원 | 대표: 김서울 | 사업자등록번호: 123-45-67890</p>
              <p className="mt-1">{t('footer.copyright')}</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
