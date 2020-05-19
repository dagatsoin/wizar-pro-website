import React from 'react'

import { Environment, ModuleType } from '~/types'
import { Hero, Horizontal, PhoneScreenshot, Vertical, VerticalSmall } from './layout'

type Props<E extends Environment> = { noMargin: boolean } & ModuleType<E>

export default function Module<E extends Environment>(props: Props<E>): JSX.Element {
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
