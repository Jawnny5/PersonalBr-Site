module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)'
    },
    colors: {
      'brown': 'hsl(46, 19%, 30%)',
      'green': 'hsl(144, 25%, 34%)',
      'blue': 'hsl(190, 86%, 88%)',
      'gray': 'hsl(0, 0%, 76%)'
    },
    animation: {
      'spin': 'spin .75s linear 1'
    },
    keyframes: {
      'spin': {
        'from': { 'transform': 'rotateY(0deg)' },
        'to': { 'transform': 'rotateY(360deg)' }
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
