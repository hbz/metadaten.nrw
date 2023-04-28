const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...colors,
      hbzorange: "#F5821F",
      headlineBlue: "#192271",
      customBlueBg: "#1D2DB9",
      linkBg: "#192271",
      linkText: "#74EE71",
      activitesBg: "#FFF9F9"
    },
    extend: {
      fontFamily: {
        barlowCondensed: ["Barlow Condensed"],
        robotoMono: ["Roboto Mono"]
      }

    },
  },
  plugins: [],
}

