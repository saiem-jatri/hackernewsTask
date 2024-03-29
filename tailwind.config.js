const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        'robato': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}