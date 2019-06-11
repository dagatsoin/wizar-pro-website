import { ThemeContext } from '@sproutch/ui'
import React from 'react'

import theme from './theme'

export default function({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}