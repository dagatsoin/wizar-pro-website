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
      tags
      date
      description
    }
  }
`