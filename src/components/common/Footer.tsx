'use client';

import { Link } from '@/i18n/routing';
import { Phone, MapPin, Clock, Mail, Instagram, Youtube } from 'lucide-react';

const branches = [
  {
    name: '강남본원',
    address: '서울특별시 강남구 테헤란로 123 서울빌딩 5층',
    tel: '02-555-1234',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
  },
  {
    name: '잠실점',
    address: '서울특별시 송파구 올림픽로 456 롯데월드타워 10층',
    tel: '02-555-5678',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
  },
  {
    name: '분당점',
    address: '경기도 성남시 분당구 정자일로 789 분당타워 3층',
    tel: '031-555-9012',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
  },
  {
    name: '일산점',
    address: '경기도 고양시 일산동구 중앙로 234 일산메디컬센터 7층',
    tel: '031-555-3456',
    hours: '평일 09:30~18:30 | 토 09:30~14:00',
  },
];

const quickLinks = [
  { href: '/about', label: '병원소개' },
  { href: '/doctors', label: '의료진소개' },
  { href: '/services/implant', label: '임플란트' },
  { href: '/services', label: '진료안내' },
  { href: '/gallery', label: '전후사진' },
  { href: '/reviews', label: '치료후기' },
  { href: '/reservation', label: '상담예약' },
  { href: '/location', label: '오시는길' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white pb-20 lg:pb-0">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        {/* Logo & Description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          <div className="lg:max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SP</span>
              </div>
              <div>
                <span className="text-xl font-bold">서울플란트치과</span>
                <span className="text-xs text-white/60 block">SEOUL PLANT DENTAL</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              20년 경력의 임플란트 전문의가 최신 장비와 기술로 정밀하게 진료합니다.
              강남, 잠실, 분당, 일산 4개 지점에서 동일한 수준의 진료를 받으실 수 있습니다.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FEE500] hover:bg-[#FDD835] rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3C1E1E]">
                  <path d="M12 3c-5.2 0-9.4 3.5-9.4 7.8 0 2.7 1.8 5.1 4.5 6.5l-1.1 4.1c-.1.3.3.5.5.3l4.9-3.2c.2 0 .4 0 .6.1.3 0 .7 0 1 0 5.2 0 9.4-3.5 9.4-7.8S17.2 3 12 3z"/>
                </svg>
              </a>
              <a href="mailto:info@seoulplant.com" className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden lg:block">
            <h4 className="font-bold text-primary-400 mb-4">바로가기</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Contact */}
          <div className="hidden lg:block">
            <h4 className="font-bold text-primary-400 mb-4">대표전화</h4>
            <a href="tel:02-555-1234" className="text-2xl font-bold hover:text-primary-400 transition-colors">
              02-555-1234
            </a>
            <p className="text-sm text-white/60 mt-2">
              평일 09:30~18:30 | 토 09:30~14:00<br />
              일요일/공휴일 휴진
            </p>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-secondary-700/50 rounded-lg p-5">
              <h4 className="font-bold text-primary-400 mb-3 flex items-center gap-2">
                <MapPin size={16} />
                {branch.name}
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/80">{branch.address}</p>
                <a
                  href={`tel:${branch.tel}`}
                  className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors font-medium"
                >
                  <Phone size={14} className="text-primary-400" />
                  {branch.tel}
                </a>
                <div className="flex items-start gap-2 text-white/60 text-xs">
                  <Clock size={14} className="text-primary-400 mt-0.5" />
                  <span>{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 lg:hidden text-sm">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-primary-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div className="text-center lg:text-left">
              <p>상호: 서울플란트치과의원 | 대표: 김서울 | 사업자등록번호: 123-45-67890</p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                이용약관
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-primary-400 transition-colors font-medium">
                개인정보처리방침
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/40 text-xs">
              COPYRIGHT © 2024. SEOUL PLANT DENTAL CLINIC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
