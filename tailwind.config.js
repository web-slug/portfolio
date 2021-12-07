module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primarycolor:'#686a6d'
      },
      maxHeight: {
        '800': '800px',
       // serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '1.5': '1.5px',
       // serif: ['Merriweather', 'serif'],
      },
    },
    
    containerWrap: {
        'margin': '2rem'
    },
    fontFamily: {
      sans: ['Amatic SC', 'sans-serif'],
     // serif: ['Merriweather', 'serif'],
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
