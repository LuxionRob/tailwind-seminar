/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html'],
  presets: [require('./myPreset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
