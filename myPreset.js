module.exports = {
  content: ['./src/index.html'],
  // prefix: 'tw-',
  // important: true,
  // separator: '_',
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
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
    },
  },
  corePlugins: ['flex', 'justifyContent', 'alignItems'],
  corePlugins: {
    aspectRatio: false,
  },
}
