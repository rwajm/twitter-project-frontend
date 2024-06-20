/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'tblack': '#0f1419',
        'tdarkgray': '#536471',
        'tgray': '#CFD9DE',
        'tlightgray': '#EFF3F4',
        'tblue': '#1D9BF0'
      },
    }
  },
  plugins: [],
};

