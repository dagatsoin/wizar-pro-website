import { View } from '@sproutch/ui'
import Img from 'gatsby-image'
import React from 'react'
import { Image } from 'reactxp'

import { Fluid, GatsbyImage } from '../../types/image'
import * as styles from './style'

type Props = {
  src: GatsbyImage<Fluid> | string
}

export default function({ src }: Props) {
  return (
    <View style={styles.backgroundImageContainer}>
      {
        typeof src === 'string'
          ? <Image source={src} style={styles.imageBackgroundPreview}/>
          : <Img fluid={src.childImageSharp.fluid}/>
      }
    </View>
  )
}
