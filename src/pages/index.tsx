import { Text } from '@sproutch/ui'
import { graphql } from 'gatsby'
import React from 'react'

import { Fixed, Fluid, Image } from 'src/types/image'
import { HeroShot, Layout } from '../components'
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
        frontmatter: {
          contrastText: boolean
          title: string
          image: Image<Fixed>
          imagePosition: string
          backgroundImage: Image<Fluid>
        }
      }
    }>
  }
}

const Home = ({ data }: { data: Data }) => {
  const sections = data.allMarkdownRemark.edges
    .filter(edge => edge.node.fileAbsolutePath.indexOf('/sections/') > 0)
    .map(e => ({
      contrastText: e.node.frontmatter.contrastText,
      title: e.node.frontmatter.title,
      image: e.node.frontmatter.image,
      imagePosition: e.node.frontmatter.imagePosition,
      backgroundImage: e.node.frontmatter.backgroundImage,
      content: e.node.html,
    }))

  return (
    <Layout>
      <HeroShot style={style.heroShot}/>
      {sections.map(
        ({
          title,
          image,
          imagePosition,
          backgroundImage,
          content,
          contrastText,
        }) => (
          <section
            key={title}
            style={{
              ...style.sectionRoot,
              backgroundImage: `url(${
                typeof backgroundImage === 'string'
                  ? backgroundImage
                  : backgroundImage.childImageSharp.fluid.src
              })`,
            }}
          >
            <div style={style.sectionContainer}>
              <Text>
                {title}
              </Text>
              <div
                style={{
                  ...style.sectionContent,
                  flexDirection:
                    imagePosition === 'left' ? 'row' : 'row-reverse',
                }}
              >
                <img
                  src={
                    typeof image === 'string'
                      ? image
                      : image.childImageSharp.fixed.src
                  }
                  alt={title}
                />
                <div
                  className={`markdown ${
                    contrastText ? 'contrast' : undefined
                  }`}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </section>
        )
      )}
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
            title
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
            imagePosition
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
