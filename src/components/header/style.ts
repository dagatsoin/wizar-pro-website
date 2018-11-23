const theme = require('../../../src/theme').default

export default {
  root: {
    position: 'fixed',
    height: `${theme.spacing.unit * 8}px`,
    width: '100%',
    padding: `${theme.spacing.unit * 2}px`,
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },
  brand: {
    color: 'white'
  },
  logo: {
    height: `${theme.spacing.unit * 4}px`,
  }
} as {[key in string]: React.CSSProperties}
