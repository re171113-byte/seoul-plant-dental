/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 굿데이 스타일 티얼/터쿼이즈 테마
        primary: {
          DEFAULT: '#25bcc5',
          50: '#e6f9fa',
          100: '#ccf3f5',
          200: '#99e7eb',
          300: '#66dbe1',
          400: '#33cfd7',
          500: '#25bcc5',
          600: '#1e969e',
          700: '#177176',
          800: '#104b4f',
          900: '#082627',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
        accent: {
          DEFAULT: '#ff6b35',
          50: '#fff5f0',
          100: '#ffe5db',
          200: '#ffccb8',
          300: '#ffb294',
          400: '#ff9971',
          500: '#ff6b35',
          600: '#cc562a',
          700: '#994020',
          800: '#662b15',
          900: '#33150b',
        },
        teal: {
          DEFAULT: '#25bcc5',
          light: '#e6f9fa',
          dark: '#1e969e',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#f8f9fa',
          dark: '#1a1a1a',
        },
        text: {
          primary: '#111111',
          secondary: '#666666',
          light: '#999999',
        },
        border: {
          DEFAULT: '#e7e7e7',
          dark: '#ddd',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        pretendard: ['Pretendard', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
