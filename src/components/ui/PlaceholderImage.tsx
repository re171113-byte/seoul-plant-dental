'use client';

import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  type: 'doctor' | 'clinic' | 'treatment' | 'hero' | 'gallery' | 'logo';
  className?: string;
  text?: string;
}

const gradients = {
  doctor: 'from-blue-100 to-blue-200',
  clinic: 'from-teal-100 to-teal-200',
  treatment: 'from-green-100 to-green-200',
  hero: 'from-primary-400 to-primary-600',
  gallery: 'from-gray-100 to-gray-200',
  logo: 'from-primary-500 to-secondary-500',
};

const icons = {
  doctor: (
    <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C9.243 2 7 4.243 7 7c0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.757-2.243-5-5-5zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"/>
      <path d="M10 4h4v2h-4zM15 6h2v2h-2zM7 6h2v2H7z" opacity="0.3"/>
    </svg>
  ),
  clinic: (
    <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>
      <path d="M11 7h2v4h4v2h-4v4h-2v-4H7v-2h4z"/>
    </svg>
  ),
  treatment: (
    <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  hero: (
    <svg className="w-24 h-24 text-white/70" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
      <circle cx="12" cy="9" r="2.5" opacity="0.3"/>
    </svg>
  ),
  gallery: (
    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
    </svg>
  ),
  logo: (
    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  ),
};

export default function PlaceholderImage({ type, className, text }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-gradient-to-br',
        gradients[type],
        className
      )}
    >
      {icons[type]}
      {text && <span className="mt-2 text-sm text-gray-500">{text}</span>}
    </div>
  );
}
