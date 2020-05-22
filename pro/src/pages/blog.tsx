import { graphql } from 'gatsby'
import { BlogItem } from 'gatsby-theme-warfog'
import React from 'react'

import { Layout } from '~/containers'
import { BlogAttributes, BlogItemType } from '~/types'
import { Edge, GatsbyData } from '../types/graph'

const BlogList = ({ data }: { data: GatsbyData }) => (
  <Layout>
    {data.allMarkdownRemark.edges
      .filter(edge => edge.node.fileAbsolutePath.indexOf('/blog/') > 0)
      .map((edge: Edge<BlogAttributes>) => toBlogItem(edge))
      .map(blog => <BlogItem key={blog.slug} blog={blog} isFirst/>)
    }
  </Layout>
)

function toBlogItem(edge: Edge<BlogAttributes>): BlogItemType {
  return {
    backgroundImage: edge.node.frontmatter.backgroundImage,
    title: edge.node.frontmatter.title,
    subhead: edge.node.frontmatter.subhead,
    date: edge.node.frontmatter.date,
    author: edge.node.frontmatter.author,
    contrastText: edge.node.frontmatter.contrastText,
    slug: edge.node.fields.slug,
    hero: edge.node.frontmatter.hero,
  }
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          ...Blog
        }
      }
    }
  }
`
export default BlogList
