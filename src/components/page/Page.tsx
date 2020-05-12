import React from 'react'

import { Option } from 'space-lift'
import { Edge, GatsbyData } from '~/types/graph'
import { ModuleAttributes } from '~/types/module'
import { isHome, isPage } from '~/utils'
import { Markdown, Module, View } from '..'
import { Sections } from '../section/Sections'
import lessStyle from './page.style.module.less'

export default function Page({data}: {data: GatsbyData}) {
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
    
  return (
    <>
      {maybeHeroModule.map(moduleNode => (
        <View
          key={moduleNode.frontmatter.title}
          className={lessStyle.heroContainer}
        >
          <Module
            noMargin
            markdown={moduleNode.rawMarkdownBody}
            {...moduleNode.frontmatter}
          />
        </View>
      ))}
      {maybeHomeNode
        .map(node => node.rawMarkdownBody)
        .map(markdown => (
          <View
            key={markdown}
            className={`${lessStyle.section} ${lessStyle.content}`}
          >
            <Markdown input={markdown} />
          </View>
      ))}
      {maybeHomeNode
        // tslint:disable-next-line: jsx-key
        .map(node => <Sections sections={node.frontmatter.section_list} edges={moduleEdges} />)
        .getOrElse(<></>)
      }
    </>
  )
}

function isModule(edge: {
  node: { fileAbsolutePath: string }
}): edge is Edge<ModuleAttributes> {
  return edge.node.fileAbsolutePath.indexOf('/modules/') > 0
}