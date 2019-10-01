import React from 'react'

import { ModuleAttributes } from '../../types/module'
import { Hero, Horizontal, HorizontalSplit, Vertical, VerticalSmall } from './layout'

type Props = { markdown: string } & ModuleAttributes

export default function Module(props: Props): JSX.Element {
  switch (props.layout) {
    case 'hero':
      return <Hero {...props}/>
    
    case 'vertical':
      console.log(props)
      return <Vertical {...props}/> 

    case 'vertical-small':
      console.log(props)
      return <VerticalSmall {...props}/> 

    case 'horizontal':
      return <Horizontal {...props}/>
    
    case 'horizontal-split':
    default:
      return <HorizontalSplit {...props}/>
    }
}
