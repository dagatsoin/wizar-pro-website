import { View } from '@sproutch/ui'
import React from 'react'

import { ModuleAttributes } from '../../types/module'
import { Hero, Vertical } from './layout'

type Props = { markdown: string } & ModuleAttributes

export default function Module(props: Props): JSX.Element {
  switch (props.layout) {
    case 'hero':
      return <Hero {...props}/>
    
    case 'vertical':
    default:
      console.log(props)
      return <Vertical {...props}/> 
  }
}
