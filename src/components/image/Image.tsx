import Img from 'gatsby-image'
import React from 'react'
import { Image } from 'reactxp'

import { ImageAttribute } from '../../types'
import { GatsbyImage, isFluid } from '../../types/image'
import * as styles from './style'

function wrapInHeader(level: number, children: React.ReactNode) {
  switch (level) {
    default:
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
  }
}

function renderImage({
  src,
  title,
  width = "100%",
  height = "100%"
}: {
  src: GatsbyImage<any> | string
  title?: string
  width?: string
  height?: string
}) {
  return typeof src === 'string' ? (
    <Image
      source={src}
      style={styles.imageBackgroundPreview}
      title={title}
      accessibilityLabel={title}
    />
  ) : (
    <Img
      alt={title}
      style={{ width, height }}
      fluid={
        isFluid(src.childImageSharp) ? src.childImageSharp.fluid : undefined
      }
      fixed={
        !isFluid(src.childImageSharp) ? src.childImageSharp.fixed : undefined
      }
      title={title}
    />
  )
}

export default function<T extends GatsbyImage<any> | string>({
  hiddenHeaderContent,
  hiddenHeaderLevel,
  src
}: ImageAttribute<T>) {
  return hiddenHeaderContent
    ? wrapInHeader(
        hiddenHeaderLevel || 1,
        renderImage({ src, title: hiddenHeaderContent })
      )
    : renderImage({ src, title: hiddenHeaderContent })
}
