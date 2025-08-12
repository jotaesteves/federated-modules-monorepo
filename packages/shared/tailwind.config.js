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
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: 'oklch(var(--card) / <alpha-value>)',
        'card-foreground': 'oklch(var(--card-foreground) / <alpha-value>)',
        popover: 'oklch(var(--popover) / <alpha-value>)',
        'popover-foreground': 'oklch(var(--popover-foreground) / <alpha-value>)',
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
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        },
        gray: {
          50: '#2E364191',
          DEFAULT: '#2E364191',
        },
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'oklch(var(--secondary-foreground) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        'muted-foreground': 'oklch(var(--muted-foreground) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        'accent-foreground': 'oklch(var(--accent-foreground) / <alpha-value>)',
        destructive: 'oklch(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'oklch(var(--destructive-foreground) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        'chart-1': 'oklch(var(--chart-1) / <alpha-value>)',
        'chart-2': 'oklch(var(--chart-2) / <alpha-value>)',
        'chart-3': 'oklch(var(--chart-3) / <alpha-value>)',
        'chart-4': 'oklch(var(--chart-4) / <alpha-value>)',
        'chart-5': 'oklch(var(--chart-5) / <alpha-value>)',
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'sidebar-foreground': 'oklch(var(--sidebar-foreground) / <alpha-value>)',
        'sidebar-primary': 'oklch(var(--sidebar-primary) / <alpha-value>)',
        'sidebar-primary-foreground': 'oklch(var(--sidebar-primary-foreground) / <alpha-value>)',
        'sidebar-accent': 'oklch(var(--sidebar-accent) / <alpha-value>)',
        'sidebar-accent-foreground': 'oklch(var(--sidebar-accent-foreground) / <alpha-value>)',
        'sidebar-border': 'oklch(var(--sidebar-border) / <alpha-value>)',
        'sidebar-ring': 'oklch(var(--sidebar-ring) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      gridTemplateColumns: {
        // Add 24-column grid
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        // Add spans for 24-column grid
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
