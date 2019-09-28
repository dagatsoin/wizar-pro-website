import { View } from '@sproutch/ui'
import * as React from 'react'

import { Text } from '../text'

type Props = {
  checked: boolean | null
  ordered: boolean
  tight: boolean
  index: number
  children: React.ReactNode
  "data-sourcepos": object
}

export function ListItem(props: Props) {
  const { checked, children, index, ordered } = props
  const checkbox = checked !== null && <input type={'checkbox'} checked={checked} readOnly={true}/>
  const decoration =  ordered ? '- ' + index : '• '

  return <View><Text>{decoration}{checkbox}{children}</Text></View>
}