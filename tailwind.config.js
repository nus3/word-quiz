module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/, /^border-/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      DEFAULT: ['Lato', 'Noto Sans JP', 'san-serif'],
    },
    colors: {
      primary: '#4ECCA3',
      primaryLight: '#ABF1DA',
      accentYellow: '#FFD369',
      bgBase: '#222831',
      bgHeader: '#393E46',
      textBase: '#EEEEEE',
      textDark: '#C0C0C0',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
