'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-secondary-800 text-white pb-20 lg:pb-0">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        {/* Clinic Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Branch */}
          <div className="bg-secondary-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary-400 mb-4 flex items-center gap-2">
              <MapPin size={20} />
              강남본원
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/90">서울특별시 강남구 테헤란로 123 서울빌딩 5층</p>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                <a href="tel:02-555-1234" className="text-white hover:text-primary-400 transition-colors font-medium">
                  02-555-1234
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-primary-400 mt-0.5" />
                <div className="text-white/80">
                  <p>평일 09:30 - 18:30 / 토 09:30 - 14:00</p>
                  <p>점심시간 13:00 - 14:00</p>
                  <p className="text-primary-400">일요일/공휴일 휴진</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Branch */}
          <div className="bg-secondary-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary-400 mb-4 flex items-center gap-2">
              <MapPin size={20} />
              잠실분원
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/90">서울특별시 송파구 올림픽로 456 롯데월드타워 10층</p>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                <a href="tel:02-555-5678" className="text-white hover:text-primary-400 transition-colors font-medium">
                  02-555-5678
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-primary-400 mt-0.5" />
                <div className="text-white/80">
                  <p>평일 09:30 - 18:30 / 토 09:30 - 14:00</p>
                  <p>점심시간 13:00 - 14:00</p>
                  <p className="text-primary-400">일요일/공휴일 휴진</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/about" className="text-white/70 hover:text-primary-400 transition-colors">
            병원소개
          </Link>
          <Link href="/doctors" className="text-white/70 hover:text-primary-400 transition-colors">
            의료진소개
          </Link>
          <Link href="/services/implant" className="text-white/70 hover:text-primary-400 transition-colors">
            임플란트
          </Link>
          <Link href="/gallery" className="text-white/70 hover:text-primary-400 transition-colors">
            전후사진
          </Link>
          <Link href="/reviews" className="text-white/70 hover:text-primary-400 transition-colors">
            고객후기
          </Link>
          <Link href="/reservation" className="text-white/70 hover:text-primary-400 transition-colors">
            온라인예약
          </Link>
          <Link href="/location" className="text-white/70 hover:text-primary-400 transition-colors">
            오시는길
          </Link>
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
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/40 text-sm">
              COPYRIGHT © 2024. SEOUL PLANT DENTAL CLINIC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
