import { createThemeContext } from '@sproutch/ui'
import React from 'react'

import theme, { Theme } from './theme'

export const ThemeContext = createThemeContext<Theme>(theme)

export const Provider = function({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}