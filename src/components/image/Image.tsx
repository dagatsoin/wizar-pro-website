import Img from 'gatsby-image'
import React from 'react'
import { Image } from 'reactxp'

import { isFluid } from '../../types/image'
import { ImageAttribute } from '../../types/module'
import * as styles from './style'

type Props = ImageAttribute

function wrapInHeader(level: string, children: React.ReactNode) {
  switch (level) {
    default:
    case '1':
      return <h1>{children}</h1>
    case '2':
      return <h2>{children}</h2>
    case '3':
      return <h3>{children}</h3>
    case '4':
      return <h4>{children}</h4>
    case '5':
      return <h5>{children}</h5>
    case '6':
      return <h6>{children}</h6>
  }
}

function renderImage(src: ImageAttribute['src'], title?: string) {
  return typeof src === 'string' ? (
    <Image source={src} style={styles.imageBackgroundPreview} title={title} />
  ) : (
    <Img
      fluid={isFluid(src.childImageSharp) ? src.childImageSharp.fluid : undefined}
      fixed={!isFluid(src.childImageSharp) ? src.childImageSharp.fixed : undefined}
      title={title}
    />
  )
}

export default function({
  hiddenHeaderContent,
  hiddenHeaderLevel,
  src,
}: Props) {
  return hiddenHeaderContent
    ? wrapInHeader(
        hiddenHeaderLevel || '1',
        renderImage(src, hiddenHeaderContent)
      )
    : renderImage(src, hiddenHeaderContent)
}