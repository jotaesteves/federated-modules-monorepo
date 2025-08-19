/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Shared package content only
    './src/**/*.{js,ts,jsx,tsx}',
    './packages/*/src/**/*.{js,ts,jsx,tsx,mdx}',
    './apps/*/src/**/*.{js,ts,jsx,tsx,mdx}',

    // Specific app source files (avoid scanning dist and node_modules)
    '../../apps/header/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/main/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/footer/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/vision360/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/personalData/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/assetsProducts/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/channelsAndServices/src/**/*.{js,ts,jsx,tsx}',
    '../../apps/historyInteractions/src/**/*.{js,ts,jsx,tsx}',

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
          600: '#D1005D',
          700: '#8a0445',
          800: '#640334',
          900: '#3e0222',
          950: '#210112',
          DEFAULT: '#d70664',
        },

        gray: {
          100: '#F3F3F8',
          200: '#E5E7EB', // used
          300: '#D9D9D9', // used scroll-bar bg
          400: '#9CA3AF',
          500: '#7C7F86', // used
          600: '#5E5E5E', // used
          700: '#374151',
          800: '#2E3641', // font color primary
          900: '#111827',
          DEFAULT: '#7C7F86',
        },
        green: {
          DEFAULT: '#25B917',
        },
        blue: {
          DEFAULT: '#0052B4',
        },
        teal: {
          DEFAULT: '#14A9B9',
        },
        orange: {
          500: '#FF810A',
          DEFAULT: '#FF5900',
        },
        purple: {
          DEFAULT: '#9747FF',
        },
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
      fontSize: {
        '2xs': '0.625rem',
        base: '0.9375rem',
        '2xl': '1.5625rem',
      },
    },
  },
  plugins: [
    /*
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar.thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "#D1005D"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            width: "4px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "#f1f1f1"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "#D1005D",
            borderRadius: "20px",
            border: "1px solid white"
          },
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    } */
  ],
};
