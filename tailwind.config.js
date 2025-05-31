/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ 'class' ],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        'xl': '75rem',
        '3xl': '120rem',
      },
      colors: {
        primary: '#FF692B',
        yellow: '#d0ff00',
        gray: '#EAEAEA',
        grayLight: '#F7F7F7',
      },
      maxWidth: {
        'xl': '75rem',
        '3xl': '120rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [ require('tailwindcss-animate') ],
}
