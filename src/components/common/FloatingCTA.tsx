'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Phone, MessageCircle, Calendar, ChevronUp, MapPin } from 'lucide-react';

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Right Side Quick Menu */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col">
          {/* Quick Menu Header */}
          <div className="bg-secondary-800 text-white px-4 py-3 text-center">
            <span className="text-sm font-medium">Quick Menu</span>
          </div>

          {/* Menu Items */}
          <a
            href="tel:02-555-1234"
            className="bg-primary-500 hover:bg-primary-600 text-white p-4 flex flex-col items-center gap-1 transition-colors border-b border-primary-400"
          >
            <Phone size={22} />
            <span className="text-xs font-medium">전화상담</span>
          </a>

          <Link
            href="/reservation"
            className="bg-white hover:bg-gray-50 text-secondary-800 p-4 flex flex-col items-center gap-1 transition-colors border-b border-gray-200"
          >
            <Calendar size={22} />
            <span className="text-xs font-medium">온라인예약</span>
          </Link>

          <a
            href="#"
            className="bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] p-4 flex flex-col items-center gap-1 transition-colors border-b border-[#E5CF00]"
          >
            <MessageCircle size={22} />
            <span className="text-xs font-medium">카카오톡</span>
          </a>

          <Link
            href="/location"
            className="bg-white hover:bg-gray-50 text-secondary-800 p-4 flex flex-col items-center gap-1 transition-colors"
          >
            <MapPin size={22} />
            <span className="text-xs font-medium">오시는길</span>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-pb">
        <div className="grid grid-cols-4 divide-x divide-gray-200">
          <a
            href="tel:02-555-1234"
            className="flex flex-col items-center justify-center py-3 text-secondary-700 hover:bg-primary-50 transition-colors"
          >
            <Phone size={20} className="text-primary-500" />
            <span className="text-xs mt-1">전화상담</span>
          </a>
          <Link
            href="/reservation"
            className="flex flex-col items-center justify-center py-3 text-secondary-700 hover:bg-primary-50 transition-colors"
          >
            <Calendar size={20} className="text-primary-500" />
            <span className="text-xs mt-1">예약</span>
          </Link>
          <a
            href="#"
            className="flex flex-col items-center justify-center py-3 text-secondary-700 hover:bg-primary-50 transition-colors"
          >
            <MessageCircle size={20} className="text-[#FEE500]" />
            <span className="text-xs mt-1">카카오톡</span>
          </a>
          <Link
            href="/location"
            className="flex flex-col items-center justify-center py-3 text-secondary-700 hover:bg-primary-50 transition-colors"
          >
            <MapPin size={20} className="text-primary-500" />
            <span className="text-xs mt-1">오시는길</span>
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden lg:flex fixed bottom-8 right-24 w-12 h-12 bg-secondary-800 hover:bg-secondary-700 text-white rounded-sm items-center justify-center shadow-lg transition-all z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
