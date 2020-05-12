import { graphql } from 'gatsby'
import React from 'react'

import { BlogItem } from '~/components/blog'
import { isBlog } from '~/utils'
import { Layout } from '../components'
import { GatsbyData } from '../types/graph'

const BlogList = ({ data }: { data: GatsbyData }) => (
  <Layout>
    {data.allMarkdownRemark.edges
      .filter(edge => isBlog(edge))
      // tslint:disable-next-line: jsx-key
      .map((edge: any) => <BlogItem data={edge} isFirst/>)
    }
  </Layout>
)

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
