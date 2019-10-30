import { graphql } from 'gatsby'

import { Fixed, Fluid, GatsbyImage } from './image'
import { CTA, Image as ImageWidgetValue } from './widget'

export type NetlifyModule = {
  layout: Layout
  cta?: CTA
  title: string
  isTitleDisplayed: boolean
  elevation: number
  imageFirst: boolean
  contrastText: boolean
  backgroundImage?: string
  image?: ImageWidgetValue
}

export type Layout = 'hero' | 'horizontal' | 'phone-screenshot' | 'vertical' | 'vertical-small'

export type ModuleAttributes = NetlifyModule & {
  image?: ImageAttribute
  backgroundImage?: BackgroundImageAttribute
}

export type ImageAttribute = ImageWidgetValue | ImageWidgetValue & { src: GatsbyImage<Fluid | Fixed> }

export type BackgroundImageAttribute = (GatsbyImage<Fluid> & {original: {
  src: string}}) | string

export const query = graphql`
  fragment Module on MarkdownRemark {
    fileAbsolutePath
    rawMarkdownBody
    frontmatter {
      layout
      cta {
        label
        palette
      }
      title
      elevation
      isTitleDisplayed
      imageFirst
      contrastText
      image {
        hiddenHeaderContent
        hiddenHeaderLevel
        src {
          childImageSharp {
            fluid(maxWidth: 335) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      backgroundImage {
        childImageSharp {
          original {
            src
          }
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`