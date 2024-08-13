import {  addDynamicIconSelectors } from "@iconify/tailwind"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#74A942',
        primaryLight:'rgba(0, 147, 15, 0.17)',
        secondary:'#1083AC',
        layer:'#FBFBFB',
        warning:'#C64130',
        tertiary:'#422B0D',
        surface:'#C8EAA7',
        button: '#56A4BD',
        hover:'#3f8ba6',
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
