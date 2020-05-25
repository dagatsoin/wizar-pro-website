import React from 'react'

import { Environment, ModuleType } from '~/types'
import { Hero, Horizontal, PhoneScreenshot, Vertical, VerticalSmall } from './layout'

type Props<E extends Environment> = { noMargin: boolean } & ModuleType<E>

export default function Module<E extends Environment>(props: Props<E>): JSX.Element {
  // Clean props
  const cleanProps = {...props}
  if (!cleanProps.cta?.label) {
    delete cleanProps.cta
  }
  switch (props.layout) {
    case 'hero':
      return <Hero {...cleanProps}/>
    
    case 'vertical':
      return <Vertical {...cleanProps}/> 

    case 'vertical-small':
      return <VerticalSmall {...cleanProps}/> 

    case 'horizontal':
      return <Horizontal {...cleanProps}/>
    
    case 'phone-screenshot':
    default:
      return <PhoneScreenshot {...cleanProps}/>
    }
}
