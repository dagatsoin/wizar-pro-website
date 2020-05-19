import { withTheme } from '@sproutch/ui'
import React from 'react'

import { Option } from 'space-lift'
import { Theme } from '~/theme'
import { PageType } from '~/types'
import { Markdown, Module, View } from '..'
import { Sections } from '../section/Sections'
import lessStyle from './page.style.module.less'

function Page({ page, theme }: { page: PageType } & {theme?: Theme}) {
  const modules = page.modules
  const maybeHeroModule = Option(modules.find(m => m.title === page.hero))

  return (
    <>
      {maybeHeroModule.map(moduleNode => (
        <View key={moduleNode.title} className={lessStyle.heroContainer}>
          <Module noMargin {...moduleNode} />
        </View>
      ))}
      {page.content && (
        <View
          className={`${lessStyle.section} ${lessStyle.content}`}
          style={!maybeHeroModule.isDefined() ? {paddingTop: theme!.business.layout.appBar.height} : undefined}
        >
          <Markdown input={page.content} />
        </View>
      )}
      <Sections sections={page.section_list} modules={page.modules} />
    </>
  )
}

export default withTheme(Page)