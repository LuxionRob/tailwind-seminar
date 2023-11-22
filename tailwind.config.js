/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html'],
  presets: [require('./myPreset.js')],
  theme: {
    extend: {},
  },
  plugins: [],
}
