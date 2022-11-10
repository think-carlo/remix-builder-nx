const colors = require('../../libs/tailwind/colors');
const boxShadow = require('../../libs/tailwind/boxShadow');
const fontFamily = require('../../libs/tailwind/fontFamily');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
      fontFamily,
    },
  },
  plugins: [],
};
