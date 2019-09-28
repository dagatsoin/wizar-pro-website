import * as React from 'react'

import { Text } from '../text'

export function Strong({ children }: { children: string }) {
  return (
    <Text
      style={{
        fontWeight: 'bold'
      }}
    >
      {children}
    </Text>
  )
}
