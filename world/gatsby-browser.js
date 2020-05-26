/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { Provider as ThemeProvider } from 'gatsby-theme-warfog'

import theme from './src/theme'

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider themeConfig={theme}>
      {element}
    </ThemeProvider>
  )
}