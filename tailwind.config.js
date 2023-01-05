module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        xs: '2px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
