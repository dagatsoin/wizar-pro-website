import React from 'react'

import { ModuleAttributes } from '../../types/module'
import { Hero, Horizontal, PhoneScreenshot, Vertical, VerticalSmall } from './layout'

type Props = { markdown: string, noMargin: boolean } & ModuleAttributes

export default function Module(props: Props): JSX.Element {
  switch (props.layout) {
    case 'hero':
      return <Hero {...props}/>
    
    case 'vertical':
      return <Vertical {...props}/> 

    case 'vertical-small':
      return <VerticalSmall {...props}/> 

    case 'horizontal':
      return <Horizontal {...props}/>
    
    case 'phone-screenshot':
    default:
      return <PhoneScreenshot {...props}/>
    }
}
