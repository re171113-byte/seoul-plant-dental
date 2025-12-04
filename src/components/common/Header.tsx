'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Phone, ChevronDown, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

const branches = [
  { name: '강남본원', tel: '02-555-1234' },
  { name: '잠실점', tel: '02-555-5678' },
  { name: '분당점', tel: '031-555-9012' },
  { name: '일산점', tel: '031-555-3456' },
];

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'about',
      label: '병원소개',
      href: '/about',
      children: [
        { href: '/about', label: '인사말' },
        { href: '/about', label: '의료진 소개' },
        { href: '/about', label: '병원 둘러보기' },
        { href: '/location', label: '오시는 길' },
      ],
    },
    {
      id: 'implant',
      label: '임플란트',
      href: '/services/implant',
      children: [
        { href: '/services/implant', label: '임플란트란?' },
        { href: '/services/implant', label: '네비게이션 임플란트' },
        { href: '/services/implant', label: '전악 임플란트' },
        { href: '/services/implant', label: '즉시 임플란트' },
        { href: '/services/implant', label: '뼈이식 임플란트' },
      ],
    },
    {
      id: 'denture',
      label: '틀니/보철',
      href: '/services',
      children: [
        { href: '/services', label: '정밀 틀니' },
        { href: '/services', label: '임플란트 틀니' },
        { href: '/services', label: '크라운/브릿지' },
      ],
    },
    {
      id: 'cosmetic',
      label: '심미치료',
      href: '/services',
      children: [
        { href: '/services', label: '라미네이트' },
        { href: '/services', label: '올세라믹' },
        { href: '/services', label: '치아미백' },
        { href: '/services', label: '잇몸성형' },
      ],
    },
    {
      id: 'general',
      label: '일반/교정',
      href: '/services',
      children: [
        { href: '/services', label: '충치치료' },
        { href: '/services', label: '신경치료' },
        { href: '/services', label: '치주치료' },
        { href: '/services', label: '치아교정' },
        { href: '/services', label: '소아치과' },
      ],
    },
    {
      id: 'community',
      label: '커뮤니티',
      href: '/reviews',
      children: [
        { href: '/gallery', label: '전후사진' },
        { href: '/reviews', label: '치료후기' },
        { href: '/board', label: '상담게시판' },
        { href: '/pricing', label: '비용안내' },
      ],
    },
    {
      id: 'reservation',
      label: '상담예약',
      href: '/reservation',
      children: [
        { href: '/reservation', label: '온라인 상담' },
        { href: '/reservation', label: '카카오톡 상담' },
        { href: '/reservation', label: '전화 상담' },
      ],
    },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'shadow-lg' : ''
      )}>
        {/* Top Bar - Contact Info */}
        <div className="bg-secondary-800 text-white text-sm hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10">
              {/* Branch Selector */}
              <div className="flex items-center gap-6">
                {branches.map((branch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBranch(idx)}
                    className={cn(
                      'flex items-center gap-1 transition-colors',
                      selectedBranch === idx ? 'text-primary-400' : 'text-white/70 hover:text-white'
                    )}
                  >
                    <MapPin size={12} />
                    <span>{branch.name}</span>
                  </button>
                ))}
              </div>

              {/* Right Info */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary-400" />
                  <span>평일 09:30~18:30 | 토 09:30~14:00</span>
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={cn(
          'bg-white transition-all duration-300',
          isScrolled ? 'shadow-md' : 'border-b border-gray-100'
        )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-secondary-800">
                    서울플란트치과
                  </span>
                  <span className="text-xs text-gray-500 tracking-wider">
                    SEOUL PLANT DENTAL
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-colors',
                      pathname.startsWith(item.href)
                        ? 'text-primary-500'
                        : 'text-secondary-800 hover:text-primary-500'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Phone & CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={`tel:${branches[selectedBranch].tel}`}
                  className="flex items-center gap-2 text-secondary-800"
                >
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">{branches[selectedBranch].name}</span>
                    <span className="font-bold text-lg">{branches[selectedBranch].tel}</span>
                  </div>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-secondary-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 transition-all duration-300',
          isMobileMenuOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/50 transition-opacity',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 w-[280px] h-full bg-white shadow-xl transition-transform duration-300 overflow-y-auto',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-bold text-secondary-800">메뉴</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-gray-500"
            >
              <X size={24} />
            </button>
          </div>

          {/* Branch Selector */}
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <p className="text-xs text-gray-500 mb-2">지점 선택</p>
            <div className="grid grid-cols-2 gap-2">
              {branches.map((branch, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBranch(idx)}
                  className={cn(
                    'text-sm py-2 px-3 rounded transition-colors text-left',
                    selectedBranch === idx
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  )}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="py-2">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full px-4 py-3 text-secondary-800"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      size={18}
                      className={cn(
                        'transition-transform text-gray-400',
                        activeDropdown === item.id && 'rotate-180'
                      )}
                    />
                  )}
                </button>
                {item.children && (
                  <div
                    className={cn(
                      'bg-gray-50 overflow-hidden transition-all duration-300',
                      activeDropdown === item.id ? 'max-h-96' : 'max-h-0'
                    )}
                  >
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.href}
                        className="block px-8 py-2.5 text-sm text-gray-600 hover:text-primary-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact */}
          <div className="p-4 border-t border-gray-100">
            <a
              href={`tel:${branches[selectedBranch].tel}`}
              className="flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-lg font-medium"
            >
              <Phone size={18} />
              {branches[selectedBranch].tel}
            </a>
            <Link
              href="/reservation"
              className="flex items-center justify-center gap-2 bg-secondary-800 text-white py-3 rounded-lg font-medium mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              온라인 상담예약
            </Link>
          </div>

          {/* Language */}
          <div className="p-4 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
