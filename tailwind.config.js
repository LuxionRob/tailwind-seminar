/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/index.html'],
  theme: {
    wordSpacing: {
      1: '0.125rem',
      2: '0.25rem',
      4: '0.5rem',
      8: '1rem',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'word-spacing': (value) => ({
            wordSpacing: value,
          }),
        },
        {values: theme('wordSpacing')}
      )
    }),
    plugin(function({addUtilities}) {
      addUtilities({
        '.hashtag': {
          marginInline: '0.125rem',
          marginBlock: '0.125rem',
        }
      })      
    })
  ],
}
