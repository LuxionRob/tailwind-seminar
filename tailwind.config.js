/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          to: {visibility: 'hidden'},
        },
        fadeIn: {
          '0%, 90%': {visibility: 'hidden'},
          '100%': {visibility: 'visible'},
        },
      },
      animation: {
        loadingFadeOut: 'pulse 1.5s linear infinite, fadeOut 1s ease-in 2s forwards',
        fadeIn: 'fadeIn 0.1s ease 3s forwards',
      },
    },
  },
  plugins: [],
}
