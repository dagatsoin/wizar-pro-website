/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { Provider as ThemeProvider } from 'gatsby-theme-warfog'

import theme, { setGlobal } from './src/theme'

setGlobal()

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider themeConfig={theme}>
      {element}
    </ThemeProvider>
  )
}