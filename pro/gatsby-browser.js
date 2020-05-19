/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'typeface-roboto'
import React from 'react'
import { Provider as ThemeProvider } from 'gatsby-theme-warfog'
import 'gatsby-theme-warfog/src/reset.css'

import './src/assets/fonts/charlemagne/css/charlemagne.css'

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}