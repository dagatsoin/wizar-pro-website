import { TextStyle, View } from '@sproutch/ui'
import * as React from 'react'

import { Text } from '../text'

export type BlockquoteProps = {
  style?: TextStyle
  children: string
}

export function Blockquote({ style, children }: BlockquoteProps) {
  return (
    <View style={{ overflow: 'visible' }}>
      <Text
        style={{
          fontSize: 96,
          position: 'absolute',
          top: -32,
          left: -42,
          fontFamily: 'serif',
        }}
      >
        “
      </Text>
      <View style={{ overflow: 'visible' }}>
        <Text style={style}>{children}</Text>
        <Text
          style={{
            fontSize: 96,
            position: 'absolute',
            lineHeight: 1,
            bottom: -16,
            right: -42,
            fontFamily: 'serif',
          }}
        >
          „
        </Text>
      </View>
    </View>
  )
}
