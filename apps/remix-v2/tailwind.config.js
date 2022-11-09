const colors = require('../../libs/tailwind/colors');
const boxShadow = require('../../libs/tailwind/boxShadow');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // tracking TW utilities classes used in our app and component library
  content: ['./app/**/*.{js,ts,jsx,tsx}', '../../libs/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
    },
  },
  plugins: [],
};
