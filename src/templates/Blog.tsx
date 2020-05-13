import { graphql } from 'gatsby'
import React from 'react'
import Helmet from "react-helmet"

import { Layout } from '~/components'
import Blog from '~/components/blog/Blog'
import { BlogNode } from '~/types'

export default function factory({
  data: {
    allMarkdownRemark: { nodes },
  },
}: {
  data: {
    allMarkdownRemark: {
      nodes: BlogNode[]
    }
  }
}) {
  const node = nodes[0]
  return (
    <Layout>
      <Helmet
        title={`${node.frontmatter.title} | Wizar - Jeu vidéo d'exploration touristique.`}
        meta={[
          { name: 'description', content: node.frontmatter.description },
          { name: 'keywords', content: node.frontmatter.tags },
        ]}
      />
      <Blog
        blog={{
          ...node.frontmatter,
          slug: node.fields.slug,
          content: node.rawMarkdownBody,
        }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMarkdownRemark(filter: { id: { eq: $id } }) {
      nodes {
        ...Blog
      }
      edges {
        node {
          id
        }
      }
    }
  }
`
