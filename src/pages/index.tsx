import { Text } from '@sproutch/ui'
import { graphql } from 'gatsby'
import React from 'react'

import { SectionType } from 'src/types/section'
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
        frontmatter: SectionType
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
              backgroundImage: backgroundImage ?
                `url(${
                  typeof backgroundImage === 'string'
                    ? backgroundImage
                    : backgroundImage.childImageSharp.fluid.src
                })`
                : undefined
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
                {image && <img
                  src={
                    typeof image === 'string'
                      ? image
                      : image.src.childImageSharp.fixed.src
                  }
                  alt={title}
                />}
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
