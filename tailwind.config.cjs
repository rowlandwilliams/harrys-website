/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      fontSize:{
      "ss":"0.8125rem"
    },
            lineHeight:{
      "ss": "1.5rem"
            },
            spacing:{
      "ss": "3rem"
                    }
  },
  },
  plugins: [],
}
