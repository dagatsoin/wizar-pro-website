import { TextStyle } from '@sproutch/ui'
import * as React from 'react'

import { Text } from '../text'

export type StrongProps = {
  style?: TextStyle
  children: React.ReactNode
}

export function Strong({ children, style }: StrongProps) {
  // Determine if it is a nested Text
  // If so, we must inherit style from the parent
  // Take the first child key eg: text-1-62-0 and extract the third part (here 62)
  // This is the column number. In Markdown, a strong element is surrounded by **
  // So if the column number > 1, this means the Strong is not at the begining of the text and
  // is nested in another Text/Header/.etc
  const key: string | undefined = children && children[0].key
  const regexMatchArray = key!.match(/[^-.]+/g)
  const inherited = key
    ? Number(regexMatchArray![2]) > 1
    : false

  return (
    <Text
      inherited={inherited}
      style={style}
    >
      {children}
    </Text>
  )
}
