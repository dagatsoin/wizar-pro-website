import React from 'react'

import { BlogType } from '~/types'
import { Markdown, Module, Title, View } from '..'
import { Image } from '../image'
import { Paragraph } from '../markdown/Paragraph'
import { Sections } from '../section/Sections'
import lessStyle from './layout.module.less'

export default function Blog({ blog }: { blog: BlogType }) {
  const { author, backgroundImage, content, date, title, subhead } = blog

  const modules = blog.modules
  const heroModule = modules.find(m => m.title === blog.hero)

  return (
    <>
      {heroModule && (
        <View key={heroModule.title} className={lessStyle.heroContainer}>
          <Module noMargin {...heroModule} />
        </View>
      )}
      {backgroundImage && <Image src={backgroundImage} />}
      <View style={{ margin: 16 }}>
        <Title.h2>{title}</Title.h2>
        {subhead && <Title.h3>{subhead}</Title.h3>}
        <Paragraph>
          {`${new Date(date).toLocaleDateString('fr-Fr')} - ${author}`}
        </Paragraph>
        <Markdown input={content} />
      </View>
      <Sections sections={blog.section_list} modules={blog.modules} />
    </>
  )
}
