'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/about', label: 'About us', sublabel: '병원소개', id: 'about' },
    {
      href: '/services/implant',
      label: '임플란트/틀니',
      sublabel: 'Implant',
      id: 'implant',
      children: [
        { href: '/services/implant', label: '임플란트' },
        { href: '/services', label: '전악 임플란트' },
        { href: '/services', label: '틀니' },
      ],
    },
    {
      href: '/services',
      label: '심미치료',
      sublabel: 'Cosmetic',
      id: 'cosmetic',
      children: [
        { href: '/services', label: '라미네이트' },
        { href: '/services', label: '치아미백' },
        { href: '/services', label: '잇몸성형' },
      ],
    },
    { href: '/doctors', label: '의료진소개', sublabel: 'Doctors', id: 'doctors' },
    { href: '/gallery', label: '전후사진', sublabel: 'Gallery', id: 'gallery' },
    {
      href: '/reviews',
      label: '상담/커뮤니티',
      sublabel: 'Community',
      id: 'community',
      children: [
        { href: '/reviews', label: '고객후기' },
        { href: '/board', label: '상담게시판' },
        { href: '/pricing', label: '비용안내' },
      ],
    },
    { href: '/location', label: '오시는길', sublabel: 'Location', id: 'location' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'shadow-lg' : ''
    )}>
      {/* Top Section - Logo Center + Phone Right */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Left - Language Switcher */}
            <div className="hidden lg:block w-40">
              <LanguageSwitcher />
            </div>

            {/* Center - Logo */}
            <Link href="/" className="flex flex-col items-center">
              <span className="text-xs text-primary-500 font-medium tracking-widest mb-1">
                임플란트 전문치과
              </span>
              <span className="text-2xl md:text-3xl font-bold text-secondary-800 font-serif-logo">
                서울플란트치과
              </span>
              <span className="text-xs text-gray-500 tracking-widest mt-1">
                SEOUL PLANT DENTAL CLINIC
              </span>
            </Link>

            {/* Right - Phone */}
            <div className="hidden lg:flex items-center gap-2 w-40 justify-end">
              <span className="text-gray-600 text-sm">TEL.</span>
              <a href="tel:02-555-1234" className="text-xl font-bold text-secondary-800 hover:text-primary-500 transition-colors">
                02-555-1234
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

      {/* Navigation Bar */}
      <nav className="bg-secondary-800 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center px-8 py-4 text-white hover:bg-primary-500 transition-all duration-200',
                    pathname === item.href && 'bg-primary-500'
                  )}
                >
                  <span className="text-base font-medium">{item.label}</span>
                  <span className="text-xs text-white/70 mt-0.5">{item.sublabel}</span>
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={cn(
                      'absolute top-full left-0 bg-white shadow-xl min-w-[200px] transition-all duration-200 z-50',
                      activeDropdown === item.id
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                    )}
                  >
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-primary-500 hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[96px] bg-white shadow-xl transition-all duration-300 overflow-y-auto',
          isMobileMenuOpen ? 'max-h-[calc(100vh-96px)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="py-2">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100">
              <Link
                href={item.href}
                className={cn(
                  'flex items-center justify-between px-6 py-4 text-secondary-800 hover:bg-primary-50 hover:text-primary-500 transition-colors',
                  pathname === item.href && 'text-primary-500 bg-primary-50'
                )}
                onClick={() => !item.children && setIsMobileMenuOpen(false)}
              >
                <div>
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-gray-400 ml-2">{item.sublabel}</span>
                </div>
                {item.children && <ChevronDown size={18} />}
              </Link>
              {item.children && (
                <div className="bg-gray-50">
                  {item.children.map((child, idx) => (
                    <Link
                      key={idx}
                      href={child.href}
                      className="block px-10 py-3 text-sm text-gray-600 hover:text-primary-500 transition-colors border-t border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact */}
          <div className="px-6 py-4 bg-primary-500">
            <a href="tel:02-555-1234" className="flex items-center justify-center gap-2 text-white font-medium">
              <Phone size={18} />
              02-555-1234
            </a>
          </div>

          <div className="px-6 py-4">
            <Link
              href="/reservation"
              className="block w-full bg-secondary-800 text-white text-center py-4 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              온라인 상담예약
            </Link>
          </div>

          <div className="px-6 py-3 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
