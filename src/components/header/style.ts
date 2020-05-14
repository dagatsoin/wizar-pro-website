const theme = require('../../../src/theme').default

export default {
  root: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    height: `${theme.business.layout.appBar.height}px`,
    width: '100%',
    alignItems: 'center'
  },
  brand: {
    color: 'white',
    marginLeft: `${theme.spacing * 2}px`
  },
  logo: {
    
  },
  menu: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  menuButton: {
    fontSize: 20,
    color: 'white'
  }
} as {[key in string]: React.CSSProperties}
