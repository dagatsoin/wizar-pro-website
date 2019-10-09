import { graphql } from 'gatsby'
import React from 'react'
import { Layout, Markdown, View } from '~/components'
import { Node } from '~/types/graph'
import { PageAttributes } from '~/types/page'

type Props = {
  allMarkdownRemark: {
    edges: Array<{
      node: Node<PageAttributes>
    }>
  }
}

function EULA({ data }: { data: Props}) {
  return (
    <Layout>
      <View style={{padding: 20, paddingTop: 100}}>
        <Markdown input={data.allMarkdownRemark.edges[0].node.rawMarkdownBody} />
      </View>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { id: { eq: "f4b9c26b-d030-562e-a8d1-03080a21d342" } }
    ) {
      edges {
        node {
          ...Page
        }
      }
    }
  }
`
export default EULA
