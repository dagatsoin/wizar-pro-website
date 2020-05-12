import { graphql } from 'gatsby'
import React from 'react'
import { Option } from 'space-lift'

import { Page } from '~/components/page'
import { GatsbyData } from '~/types/graph'
import { isHome, isPage } from '~/utils'
import { Layout } from '../components'

const Home = ({ data }: { data: GatsbyData }) => (
  <Layout>
    {Option(
      data.allMarkdownRemark.edges
        .filter(isPage)
        .filter(edge => isHome(edge.node.frontmatter))
        .map(edge => edge.node)[0]
    )
      .map(() => (
        // tslint:disable-next-line: jsx-key
        <Page data={data} />
      ))
      .getOrElse(<></>)}
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
          ...Page
          ...Module
        }
      }
    }
  }
`
export default Home
