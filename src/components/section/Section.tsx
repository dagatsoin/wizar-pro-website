import React from 'react'
import { Option } from 'space-lift'
import { Edge, Node } from '~/types/graph'
import { ModuleAttributes } from '~/types/module'
import { Section } from '~/types/page'
import { Carousel, Module, View } from '..'
import { Title } from '../title'
import lessStyle from './section.module.less'

type Props = {
  section: Section
  edges: Array<Edge<ModuleAttributes>>
}

export default function renderSection({ section, edges }: Props) {
  const modules = section.modules
    .reduce<Array<Node<ModuleAttributes>>>(
      (nodes, id) =>
        Option(edges.find(edge => edge.node.frontmatter.title === id)).fold(
          () => nodes,
          edge => [...nodes, edge.node]
        ),
      []
    )
    .map(node => {
      return {
        ...node.frontmatter,
        key: node.frontmatter.title,
        markdown: node.rawMarkdownBody,
      }
    })
    .map(({ key, ...props }, _i, { length }) => (
      <Module key={key} {...props} noMargin={length > 1} />
    ))

  function wrapInContainer(children: React.ReactNode) {
    return (
      <>
        {section.title && (
          <View style={{ flex: 1, textAlign: 'center' }}>
            <Title.h2>{section.title}</Title.h2>
          </View>
        )}
        <View
          key={section.modules.join()}
          className={`${lessStyle.section} ${lessStyle[section.layout]} ${
            modules.length === 1 || section.layout === 'vertical'
              ? lessStyle.noMargin
              : ''
          }`}
        >
          {children}
        </View>
      </>
    )
  }

  if (modules.length) {
    switch (section.layout) {
      case 'carousel':
        return wrapInContainer(<Carousel slides={modules} />)

      default:
        return wrapInContainer(modules)
    }
  } else {
    return <></>
  }
}
