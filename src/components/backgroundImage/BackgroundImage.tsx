import { BackgroundImage, View } from '@sproutch/ui'
import Img from 'gatsby-image'
import React from 'react'

import { Fluid, GatsbyImage } from '../../types/image'
import * as styles from './style'

type Props = {
  src: GatsbyImage<Fluid> | string
  resizeMode?: 'cover' | 'contain'
}
export default function({ src, resizeMode }: Props) {
  return typeof src === 'string'
    ? <BackgroundImage uri={src} resizeMode={resizeMode}/>
    : (
      <View style={styles.backgroundImageContainer}>
        <Img fluid={src.childImageSharp.fluid} alt="background image"/>
      </View>
    )
}
