const colors = require('../../libs/tailwind/colors');
const boxShadow = require('../../libs/tailwind/boxShadow');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
    },
  },
  plugins: [],
};
