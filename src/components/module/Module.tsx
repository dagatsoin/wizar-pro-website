import { View } from '@sproutch/ui'
import React from 'react'

import { Attributes } from '../../types/module'
import { Hero } from './layout'

type Props = { markdown: string } & Attributes

export default function Module(props: Props): JSX.Element {
  switch (props.layout) {
    case 'hero':
    default:
      return <Hero {...props}/>
  }
}
