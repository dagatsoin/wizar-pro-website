import { graphql } from 'gatsby'
import React from 'react'
import Helmet from "react-helmet"

import { Page } from '~/components/page'
import { ModuleNode, PageNode } from '~/types'
import { Layout } from '../components'

export default function factory({
  data : { page, modulesData: { nodes: modules } }
}: {
  data: {
    page: PageNode
    modulesData: {
      nodes: ModuleNode[]
    }
  }
}) {
  return (
    <Layout>
      <Helmet
        title={`${page.frontmatter.title} | Wizar - Jeu vidéo d'exploration touristique.`}
        meta={[
          { name: 'description', content: page.frontmatter.metaDescription },
          { name: 'keywords', content: page.frontmatter.metaKeywords },
        ]}
      />
      <Page
        page={{
          ...page.frontmatter,
          content: page.rawMarkdownBody,
          modules: modules.map(m => ({
            ...m.frontmatter,
            content: m.rawMarkdownBody
          }))
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    page: markdownRemark(id: {eq: $id }) {
      ...Page
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
