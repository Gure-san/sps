/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#1E1E1E',
        white: '#F8F8F8',
        dark: {
          50: '#f1f2f3',
          100: '#d8d8d8',
          200: '#bdbdbd',
          300: '#a2a3a4',
          400: '#87898c',
          500: '#6d6f73',
          600: '#565759',
          700: '#3d3e3f',
          800: '#252526',
          900: '#0c0c0e'
        }
      }
    },

    colors: {
      black: colors.black,
      white: colors.white
    }
  },
  plugins: []
}
