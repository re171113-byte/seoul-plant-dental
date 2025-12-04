'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'ko' | 'en' | 'zh' });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-current opacity-70" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              'px-2 py-1 text-sm rounded transition-colors',
              locale === lang.code
                ? 'bg-accent-500 text-white'
                : 'hover:bg-white/20 text-current'
            )}
            title={lang.label}
          >
            {lang.code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
