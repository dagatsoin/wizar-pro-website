import * as React from 'react'

import { ThemeContext } from '~/ThemeContext'
import { Text } from '../text'

export function Em({ children }: { children: string }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Text
          style={{
            color: theme.palette.primary.main,
            fontStyle: 'italic'
          }}
        >
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  )
}
