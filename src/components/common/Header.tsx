'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/about', label: '병원소개', id: 'about' },
    {
      href: '/services',
      label: '진료안내',
      id: 'services',
      children: [
        { href: '/services/implant', label: '임플란트' },
        { href: '/services', label: '일반진료' },
        { href: '/services', label: '심미치료' },
      ],
    },
    { href: '/doctors', label: '의료진소개', id: 'doctors' },
    { href: '/gallery', label: '전후사진', id: 'gallery' },
    { href: '/reviews', label: '고객후기', id: 'reviews' },
    { href: '/pricing', label: '비용안내', id: 'pricing' },
    { href: '/location', label: '오시는길', id: 'location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-secondary-800 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary-400" />
                <span>02-555-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary-400" />
                <span>평일 09:30-18:30 / 토 09:30-14:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary-400" />
                <span>서울 강남구 테헤란로 123</span>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          'bg-white transition-all duration-300 border-b border-border',
          isScrolled ? 'shadow-lg' : ''
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-secondary-800 font-serif-logo">
                  서울플란트치과
                </span>
                <span className="text-xs text-primary-500 font-medium tracking-wider">
                  SEOUL PLANT DENTAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-5 py-7 text-secondary-700 hover:text-primary-500 transition-colors font-medium border-b-3 border-transparent hover:border-primary-500',
                      pathname === item.href && 'text-primary-500 border-primary-500'
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={cn(
                        'absolute top-full left-0 bg-white shadow-xl rounded-b-lg py-2 min-w-[180px] transition-all duration-200 border-t-2 border-primary-500',
                        activeDropdown === item.id
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      )}
                    >
                      {item.children.map((child, idx) => (
                        <Link
                          key={idx}
                          href={child.href}
                          className="block px-5 py-3 text-secondary-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/reservation"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                온라인 상담예약
              </Link>
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

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[80px] bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-border">
                <Link
                  href={item.href}
                  className={cn(
                    'block py-4 text-secondary-700 hover:text-primary-500 transition-colors font-medium',
                    pathname === item.href && 'text-primary-500'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.href}
                        className="block py-2 text-sm text-secondary-500 hover:text-primary-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/reservation"
              className="mt-4 bg-primary-500 text-white text-center py-4 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              온라인 상담예약
            </Link>

            {/* Mobile Info */}
            <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm text-secondary-500">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary-500" />
                <span>02-555-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary-500" />
                <span>평일 09:30-18:30</span>
              </div>
            </div>

            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
