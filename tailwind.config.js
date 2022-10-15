/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html'],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 480px) { ... }
      md: '790px',
      // => @media (min-width: 790px) { ... }
      lg: '970px',
      // => @media (min-width: 970px) { ... }
      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {
      serif: ['PT serif', 'serif'],
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        'imperial-red': '#e63946',
        honeydew: '#f1faee',
        'powder-blue': '#a8dadc',
        'celadon-blue': '#457b9d',
        'prussian-blue': '#1d3557',
      },
    },
  },
  plugins: [],
}
