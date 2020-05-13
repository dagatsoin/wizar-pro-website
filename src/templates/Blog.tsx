import { graphql } from 'gatsby'
import React from 'react'
import Helmet from "react-helmet"

import { Layout } from '~/components'
import Blog from '~/components/blog/Blog'
import { BlogNode, ModuleNode } from '~/types'

export default function factory({
  data : { blog, modulesData: { nodes: modules } }
}: {
  data: {
    blog: BlogNode
    modulesData: {
      nodes: ModuleNode[]
    }
  }
}) {  
  return (
    <Layout>
      <Helmet
        title={`${blog.frontmatter.title} | Wizar - Jeu vidéo d'exploration touristique.`}
        meta={[
          { name: 'description', content: blog.frontmatter.metaDescription },
          { name: 'keywords', content: blog.frontmatter.metaKeywords },
        ]}
      />
      <Blog
        blog={{
          ...blog.frontmatter,
          slug: blog.fields.slug,
          content: blog.rawMarkdownBody,
          modules: modules.map(m => ({
            ...m.frontmatter,
            content: m.rawMarkdownBody
          }))
        }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    blog: markdownRemark(id: {eq: $id }) {
      ...Blog
    }
    modulesData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/modules/" } }
    ) {
      nodes {
        ...Module
      }
    }
  }
`
