/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'typeface-roboto'
import React from 'react'
import { Provider as ThemeProvider } from './src/ThemeContext'
import './src/reset.css'

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}