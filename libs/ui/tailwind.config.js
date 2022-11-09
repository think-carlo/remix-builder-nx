const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const colors = require('../tailwind/colors');
const boxShadow = require('../tailwind/boxShadow');
const fontFamily = require('../tailwind/fontFamily');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors,
      boxShadow,
      fontFamily,
    },
  },
  plugins: [],
};
