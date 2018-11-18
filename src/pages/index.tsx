import { graphql } from 'gatsby'
import React from 'react'

import { HeroShot, Layout } from '../components'

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
        frontmatter: {
          title: string
          image: string,
          imagePosition: string,
          backgroundImage: string,
        }
      }
    }>
  }
}

const Home = ({ data }: { data: Data }) => {
  const sections = data.allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    image: e.node.frontmatter.image,
    imagePosition: e.node.frontmatter.imagePosition,
    backgroundImage: e.node.frontmatter.backgroundImage,
    content: e.node.html,
  }))

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: sections[0].content}}/>
      {data.site.siteMetadata.title}
      <HeroShot backgroundImageURL="./hero.jpg" />
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
          html
          frontmatter {
            title
            image
            imagePosition
            backgroundImage
          }
        }
      }
    }
  }
`
/*
export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        image
        imagePosition
        backgroundImage
      }
    }
  }
`*/
export default Home
