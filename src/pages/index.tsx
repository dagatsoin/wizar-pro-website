import { BackgroundImage } from '@sproutch/ui'
import { graphql } from 'gatsby'
import React from 'react'
import { Option } from 'space-lift'

import { AvailableType, Edge, Node } from '~/types/graph'
import { ModuleAttributes } from '~/types/module'
import { PageAttributes, Section } from '~/types/page'
import { Layout, Module, View } from '../components'
import * as sproutchStyle from './_home.style'
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
      .map(edge => edge.node.frontmatter)
      .find(isHome)
  )
  const maybeHeroModule = maybeHomeNode
    .map(page =>
      moduleEdges.find(edge => edge.node.frontmatter.title === page.hero)
    )
    .map(({ node }) => node)

  return maybeHomeNode
    .map(node => (
      <Layout>
        {maybeHeroModule.map(moduleNode => (
          <View className={lessStyle.heroContainer}>
            <Module
              markdown={moduleNode.rawMarkdownBody}
              {...moduleNode.frontmatter}
            />
          </View>
        ))}
        <Sections sections={node.section_list} edges={moduleEdges}/>
      </Layout>
    ))
    .getOrElse(<></>)
}

function Sections({
  sections,
  edges,
}: {
  sections: Section[]
  edges: Array<Edge<ModuleAttributes>>
}) {
  return <>{sections.map(s => renderSection(s, edges))}</>
}

function renderSection(section: Section, edges: Array<Edge<ModuleAttributes>>) {
  return (
    <View className={`${lessStyle.section} ${lessStyle[section.layout]}`}>
      {section.modules
        .reduce<Array<Node<ModuleAttributes>>>(
          (nodes, id) =>
            Option(edges.find(edge => edge.node.frontmatter.title === id)).fold(
              () => nodes,
              edge => [...nodes, edge.node]
            ),
          []
        )
        .map(node => ({
          ...node.frontmatter,
          key: node.fileAbsolutePath,
          markdown: node.rawMarkdownBody,
        }))
        .map(({ key, ...props }) => (
          <Module key={key} {...props} />
        ))}
    </View>
  )
  
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
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
