import { graphql } from 'gatsby'
import React from 'react'
import { Option } from 'space-lift'

import { AvailableType, Edge, Node } from '~/types/graph'
import { ModuleAttributes } from '~/types/module'
import { PageAttributes, Section as SectionType } from '~/types/page'
import { Layout, Markdown, Module, Section, View } from '../components'
import lessStyle from './home.style.module.less'

type GatsbyModuleData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allMarkdownRemark: {
    edges: Array<{
      node: Node<AvailableType>
    }>
  }
}

function isModule(edge: {
  node: { fileAbsolutePath: string }
}): edge is Edge<ModuleAttributes> {
  return edge.node.fileAbsolutePath.indexOf('/modules/') > 0
}

function isPage(edge: Edge<any>): edge is Edge<PageAttributes> {
  return edge.node.fileAbsolutePath.indexOf('/pages/') > 0
}

function isHome(attributes: PageAttributes): boolean {
  return attributes.is_home
}

const Home = ({ data }: { data: GatsbyModuleData }) => {
  const edges = data.allMarkdownRemark.edges
  const moduleEdges = edges.filter(isModule)
  const maybeHomeNode = Option(
    edges
      .filter(isPage)
      .filter(edge => isHome(edge.node.frontmatter))
      .map(edge => edge.node)[0]
  )
  const maybeHeroModule = maybeHomeNode
    .map(page =>
      moduleEdges.find(
        edge => edge.node.frontmatter.title === page.frontmatter.hero
      )
    )
    .map(({ node }) => node)

  return maybeHomeNode
    .map(node => node.frontmatter)
    .map(page => (
      <Layout>
        {maybeHeroModule.map(moduleNode => (
          <View key={moduleNode.frontmatter.title} className={lessStyle.heroContainer}>
            <Module
              markdown={moduleNode.rawMarkdownBody}
              {...moduleNode.frontmatter}
            />
          </View>
        ))}
        {maybeHomeNode
          .map(node => node.rawMarkdownBody)
          .map(markdown => (
            <View key={markdown} className={`${lessStyle.section} ${lessStyle.content}`}>
              <Markdown input={markdown} />
            </View>
          ))}
        <Sections sections={page.section_list} edges={moduleEdges} />
      </Layout>
    ))
    .getOrElse(<></>)
}

export function Sections({
  sections,
  edges,
}: {
  sections: SectionType[]
  edges: Array<Edge<ModuleAttributes>>
}) {
  return <>{sections.map(s => <Section key={s.modules.join()} section={s} edges={edges}/>)}</>
}

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
