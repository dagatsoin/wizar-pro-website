import React from 'react'
import { Option } from 'space-lift'

import { ModuleType, Section } from '~/types'
import { Carousel, Module, View } from '..'
import { Title } from '../title'
import lessStyle from './section.module.less'

type Props = {
  section: Section
  modules: ModuleType[]
}

export default function renderSection({ section, modules }: Props) {
  const moduleNames = section.modules
    .reduce<ModuleType[]>(
      (nodes, id) =>
        Option(modules.find(module => module.title === id)).fold(
          () => nodes,
          module => [...nodes, module]
        ),
      []
    )
    .map((module, _i, { length }) => (
      <Module key={module.title} {...module} noMargin={length > 1} />
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
            moduleNames.length === 1 || section.layout === 'vertical'
              ? lessStyle.noMargin
              : ''
          }`}
        >
          {children}
        </View>
      </>
    )
  }

  if (moduleNames.length) {
    switch (section.layout) {
      case 'carousel':
        return wrapInContainer(<Carousel slides={moduleNames} />)

      default:
        return wrapInContainer(moduleNames)
    }
  } else {
    return <></>
  }
}
