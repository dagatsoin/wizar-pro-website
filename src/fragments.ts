import { graphql } from 'gatsby'

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
  fragment Blog on MarkdownRemark {
    fields {
      slug
    }
    fileAbsolutePath
    rawMarkdownBody
    frontmatter {
      hero
      title
      subhead
      section_list {
        title
        layout
        modules
      }
      tags
      date
      author
      metaKeywords
      metaDescription
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

  fragment Page on MarkdownRemark {
    fileAbsolutePath
    rawMarkdownBody
    frontmatter {
      hero
      title
      section_list {
        title
        layout
        modules
      }
      is_home
      date
      metaKeywords
      metaDescription
    }
  }
`