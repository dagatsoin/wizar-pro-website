const purple = require('@material-ui/core/colors/purple').default
const createMuiTheme = require('@material-ui/core/styles').createMuiTheme

const theme = {
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
  business: {},
  typography: {
    useNextVariants: true,
  },
}

module.exports = {
  theme,
  default: createMuiTheme(theme),
}