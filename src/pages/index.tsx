import { graphql } from 'gatsby'
import React from 'react'

import { Attributes } from 'src/types/module'
import { HeroShot, Layout } from '../components'
import { Module } from '../components/module/Module'
import { style } from './_home.style'

type Data = {
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
        html: string
        fileAbsolutePath: string
        attributes: Attributes
      }
    }>
  }
}

const Home = ({ data }: { data: Data }) => {
  const modules = data.allMarkdownRemark.edges
    .filter(edge => edge.node.fileAbsolutePath.indexOf('/modules/') > 0)
    .map(e => ({
      attributes: e.node.attributes,
      key: e.node.fileAbsolutePath,
      html: e.node.html,
    }))

  return (
    <Layout>
      <HeroShot style={style.heroShot} />
      {modules.map(({attributes, html, key}) => <Module key={key} {...attributes} html={html}/>)}
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
          html
          frontmatter {
            layout
            cta {
              label
              palette
            }
            title
            imagePosition
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