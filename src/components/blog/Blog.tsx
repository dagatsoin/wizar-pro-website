import React from 'react'

import { BlogType } from '~/types'
import { Markdown, Title, View } from '..'
import { Image } from '../image'
import { Paragraph } from '../markdown/Paragraph'

export default function Blog({ blog }: { blog: BlogType }) {
  const {
    author,
    backgroundImage,
    content,
    date,
    title,
    subhead
  } = blog

  return (
    <>
      {backgroundImage && <Image src={backgroundImage} />}
      <View style={{ margin: 16 }}>
        <Title.h2>{title}</Title.h2>
        {subhead && <Title.h3>{subhead}</Title.h3>}
        <Paragraph>
          {`${new Date(date).toLocaleDateString('fr-Fr')} - ${author}`}
        </Paragraph>
        <Markdown input={content} />
      </View>
    </>
  )
}