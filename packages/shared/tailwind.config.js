/** @type {import('tailwindcss').Config} */
export const content = [
  // Shared package content only
  './src/**/*.{js,ts,jsx,tsx}',

  // Specific app source files (avoid scanning dist and node_modules)
  '../../apps/header/src/**/*.{js,ts,jsx,tsx}',
  '../../apps/app1/src/**/*.{js,ts,jsx,tsx}',
  '../../apps/app2/src/**/*.{js,ts,jsx,tsx}',
  '../../apps/main/src/**/*.{js,ts,jsx,tsx}',
  '../../apps/footer/src/**/*.{js,ts,jsx,tsx}',

  // Public HTML files
  '../../apps/*/public/index.html',
  '../../apps/footer/public/index.html',
  './public/index.html',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: [
        'Inter',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
    },
    colors: {
      // Add your brand colors here
      primary: {
        50: '#ffe6f1',
        100: '#ffb3d2',
        200: '#ff80b3',
        300: '#ff4d94',
        400: '#ff1a75',
        500: '#D70664',
        600: '#b00557',
        700: '#8a0445',
        800: '#640334',
        900: '#3e0222',
        950: '#210112',
      },
    },
  },
};
export const plugins = [];
