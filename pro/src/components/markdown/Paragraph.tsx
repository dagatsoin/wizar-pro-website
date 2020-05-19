import { Styles } from '@sproutch/ui'
import * as React from 'react'

import { ThemeContext } from '~/ThemeContext'
import { Text } from '../text'

export type ParagraphProps = { children: string }

export function Paragraph({
  children,
  contrast,
}: {
  children: string
  contrast?: boolean
}) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Text
          style={Styles.createTextStyle({
            marginBottom: 12,
            color: contrast
              ? theme.business.text.contrast
              : theme.palette.text.primary,
          })}
        >
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  )
}
