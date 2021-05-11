module.exports = {
  theme: {
    extend: {
      screens: {
        'print': {
          'raw': 'print'
        },
        // => @media print { ... }
      }
    }
  },
  purge: false,
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}