import { graphql } from 'gatsby'
import { ImageAttribute } from './ImageAttribute'
import { CTA } from './widget'

export type BlogNode = {
  fields: {
    slug: string
  }
  fileAbsolutePath: string
  rawMarkdownBody: string
  frontmatter: BlogAttributes
}

export type BlogAttributes = {
  backgroundImage?: ImageAttribute
  title: string
  subhead?: string
  tags: string[]
  date: string
  author: string
  description: string
  cta?: CTA
  contrastText: boolean
}

export const query = graphql`
  fragment Blog on MarkdownRemark {
    fields {
      slug
    }
    fileAbsolutePath
    rawMarkdownBody
    frontmatter {
      title
      subhead
      tags
      date
      author
      description
      contrastText
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
