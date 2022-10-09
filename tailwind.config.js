/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      heading: ['Roboto Condensed', 'sans-serif'],
      text: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#ffe6c6',
          100: '#ffd6a3',
          200: '#ffc781',
          300: '#ffb85f',
          400: '#ffa83c',
          500: '#ff991a',
          600: '#d98216',
          700: '#b36b12',
          800: '#8c540e',
          900: '#663d0a',
        },
        secondary: {
          50: '#c6c7cc',
          100: '#a4a5ad',
          200: '#82848f',
          300: '#606270',
          400: '#3e4152',
          500: '#1c1f33',
          600: '#181a2b',
          700: '#141624',
          800: '#0f111c',
          900: '#0b0c14',
        },
        tertiary: {
          50: '#ebe9ed',
          100: '#dedce2',
          200: '#d2cfd7',
          300: '#c6c2cc',
          400: '#b9b5c1',
          500: '#ada8b6',
          600: '#938f9b',
          700: '#79767f',
          800: '#5f5c64',
          900: '#454349',
        },
      },
      maxWidth: {
        6.5: '1170px',
      },
    },
  },
  plugins: [],
};
