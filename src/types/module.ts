import { graphql } from 'gatsby'

import { BackgroundImageAttribute } from './BackgroundImageAttribute'
import { CTA, Image as ImageWidgetValue } from './widget'
import { ImageAttribute } from './ImageAttribute'

export type NetlifyModule = {
  layout: Layout
  cta?: CTA
  title: string
  titleLevel: number
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
      titleLevel
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