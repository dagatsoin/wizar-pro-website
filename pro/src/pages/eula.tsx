import { graphql } from 'gatsby'
import React from 'react'
import { Layout, Markdown, View } from '~/components'
import { PageAttributes } from '~/types'
import { Node } from '~/types/graph'

type Props = {
  allMarkdownRemark: {
    edges: Array<{
      node: Node<PageAttributes>
    }>
  }
}

function EULA({ data }: { data: Props }) {
  return (
    <Layout>
      <View style={{ padding: 20, paddingTop: 100 }}>
        <Markdown
          input={data.allMarkdownRemark.edges[0].node.rawMarkdownBody}
        />
      </View>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        id: {}
        frontmatter: { title: { eq: "Conditions générales d'utilisation" } }
      }
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
