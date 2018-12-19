const amber = require('@material-ui/core/colors/amber').default
const purple = require('@material-ui/core/colors/purple').default
const createMuiTheme = require('@material-ui/core/styles').createMuiTheme

const theme = {
  palette: {
    primary: amber,
    secondary: purple,
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