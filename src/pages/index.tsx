import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import React from 'react'

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
          image: string
          imagePosition: string
          backgroundImage: string
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
      imageUrl: e.node.frontmatter.image,
      imagePosition: e.node.frontmatter.imagePosition,
      backgroundImage: e.node.frontmatter.backgroundImage,
      content: e.node.html,
    }))

  return (
    <Layout>
      <HeroShot
        style={style.heroShot}
        backgroundImageURL="./images/heroShot.jpg"
      />
      {sections.map(
        ({
          title,
          imageUrl,
          imagePosition,
          backgroundImage,
          content,
          contrastText,
        }) => (
          <section
            key={title}
            style={{
              ...style.sectionRoot,
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div style={style.sectionContainer}>
              <Typography
                component="h2"
                variant="h2"
                style={{
                  ...style.sectionTitle,
                  color: contrastText ? 'white' : undefined,
                }}
              >
                {title}
              </Typography>
              <div
                style={{
                  ...style.sectionContent,
                  flexDirection:
                    imagePosition === 'left' ? 'row' : 'row-reverse',
                }}
              >
                <img src={imageUrl} alt={title} />
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
            image
            imagePosition
            backgroundImage
          }
        }
      }
    }
  }
`
export default Home
