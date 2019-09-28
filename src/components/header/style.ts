const theme = require('../../../src/theme').default

export default {
  root: {
    position: 'absolute',
    zIndex: 1,
    height: `${theme.spacing.unit * 8}px`,
    width: '100%',
    padding: `${theme.spacing.unit * 2}px`,
  },
  brand: {
    color: 'white'
  },
  logo: {
    height: `${theme.spacing.unit * 4}px`,
    margin: '21px 26px'
  }
} as {[key in string]: React.CSSProperties}
