const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pdGrey: {
        light: '#bbbbbb',
        DEFAULT: '##555555',
        dark: '#212121',
      },
      pdGreen: {
        light: '#85d7ff',
        DEFAULT: '#019C8D',
        dark: '#009eeb',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
