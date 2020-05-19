import { graphql } from 'gatsby'
import React from 'react'

import { BlogItem } from '~/components/blog'
import { BlogAttributes, BlogItemType } from '~/types'
import { isBlog } from '~/utils'
import { Layout } from '../components'
import { Edge, GatsbyData } from '../types/graph'

const BlogList = ({ data }: { data: GatsbyData }) => (
  <Layout>
    {data.allMarkdownRemark.edges
      .filter(edge => isBlog(edge))
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
    section_list: edge.node.frontmatter.section_list,
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
