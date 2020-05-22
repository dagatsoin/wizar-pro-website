import { createThemeContext } from '@sproutch/ui'
import deepmerge from 'deepmerge'
import React from 'react'

import theme, { Theme } from './theme'

export const ThemeContext = createThemeContext<Theme>(theme)

type ThemeSetter = (themeConfig: Partial<Theme>) => void

export const ThemeSetterContext = React.createContext<{
  theme: Theme
  setTheme: ThemeSetter
}>({
  theme: theme as Theme,
  setTheme(_: Partial<Theme>) {},
})

export const Provider = function({ children, themeConfig = {} }: { children: React.ReactNode, themeConfig: Partial<Theme> }) {
  const [state, setState] = React.useState({
    theme: deepmerge(theme, themeConfig),
    setTheme(config: Partial<Theme>) {
      setState({
        ...state,
        theme: deepmerge(theme, config),
      })
    },
  })

  return (
    <ThemeSetterContext.Provider value={state}>
      <ThemeContext.Provider value={state.theme}>
        {children}
      </ThemeContext.Provider>
    </ThemeSetterContext.Provider>
  )
}