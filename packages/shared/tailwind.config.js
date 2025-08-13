/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Shared package content only
    './src/**/*.{js,ts,jsx,tsx}',

    // Specific app source files (avoid scanning dist and node_modules)
    '../../apps/header/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/main/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/footer/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/vision360/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/personalData/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/assetsProducts/src/**/*.{js,ts,jsx,tsx}',

    // Public HTML files
    '../../apps/*/public/index.html',
    './public/index.html',
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
        ],
      },
      colors: {
        primary: {
          50: '#ffe6f1',
          100: '#ffb3d2',
          200: '#ff80b3',
          300: '#ff4d94',
          400: '#ff1a75',
          500: '#d70664',
          600: '#b00557',
          700: '#8a0445',
          800: '#640334',
          900: '#3e0222',
          950: '#210112',
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
        },
        gray: {
          50: '#2E364191',
          DEFAULT: '#2E364191',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
