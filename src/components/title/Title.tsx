import { TextStyle } from '@sproutch/ui'
import * as React from 'react'

import { Theme } from '~/theme'
import { ThemeContext } from '~/ThemeContext'
import { Text } from '../text'
import { createTitleStyle } from './styles'

type Props = {
  children: string
  onPress?: () => void
  style?: TextStyle
  palette?: 'primary' | 'secondary'
  contrast?: boolean
}

export function h1(props: Props) {
  return Title({
    heading: 'h1',
    ...props,
  })
}

export function h2(props: Props) {
  return Title({
    heading: 'h2',
    ...props,
  })
}

export function h3(props: Props) {
  return Title({
    heading: 'h3',
    ...props,
  })
}

export function h4(props: Props) {
  return Title({
    heading: 'h4',
    ...props,
  })
}

export function h5(props: Props) {
  return Title({
    heading: 'h5',
    ...props,
  })
}

export function h6(props: Props) {
  return Title({
    heading: 'h6',
    ...props,
  })
}

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

function Title({
  children,
  palette,
  contrast,
  style,
  heading,
  onPress
}: Props & { heading: Heading }) {
  return (
    <ThemeContext.Consumer>
      {(theme: Theme) => {
        const textStyle = createTitleStyle({
          theme,
          palette,
          contrast,
          style,
        })
        return (
          <Text style={textStyle[heading]} onPress={onPress}>
            {React.createElement(
              heading,
              { style: { margin: 0, padding: 0 } },
              children
            )}
          </Text>
        )
      }}
    </ThemeContext.Consumer>
  )
}
