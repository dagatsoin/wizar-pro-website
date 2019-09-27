import { graphql } from 'gatsby'
import React from 'react'

import { Attributes } from 'src/types/module'
import { Module, Layout } from '../components'

type GatsbyModuleData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allMarkdownRemark: {
    edges: Array<{
      node: {
        rawMarkdownBody: string
        fileAbsolutePath: string
        frontmatter: Attributes
      }
    }>
  }
}

const Home = ({ data }: { data: GatsbyModuleData }) => {
  const modules = data.allMarkdownRemark.edges
    .filter(edge => edge.node.fileAbsolutePath.indexOf('/modules/') > 0)
    .map(e => ({
      attributes: e.node.frontmatter,
      key: e.node.fileAbsolutePath,
      markdown: e.node.rawMarkdownBody,
    }))

  return (
    <Layout>
      {modules.map(({attributes, markdown, key}) => <Module key={key} {...attributes} markdown={markdown}/>)}
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          fileAbsolutePath
          rawMarkdownBody
          frontmatter {
            layout
            cta {
              label
              palette
            }
            title
            imageFirst
            contrastText
            image {
              hiddenHeaderContent
              src {
                childImageSharp {
                  fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Home