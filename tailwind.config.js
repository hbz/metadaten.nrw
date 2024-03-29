const colors = require('tailwindcss/colors')

// delete deprecated colors to suppress warning, see https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220
delete colors['lightBlue']
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...colors,
      gray: colors.neutral,
      linkBg: "#192271",
      linkText: "#74EE71",
      activitesBg: "#EDEDED"
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif',],
      },
      backgroundImage: {
        'gradient-114': 'linear-gradient(114deg, var(--tw-gradient-stops))',
        'gradient-172': 'linear-gradient(172deg, var(--tw-gradient-stops))',

      },

    },
  },
  plugins: [],
}

