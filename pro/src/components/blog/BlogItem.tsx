import { withTheme } from '@sproutch/ui'
import { navigateTo } from 'gatsby'
import React from 'react'

import { Theme } from '~/theme'
import { BlogItemType } from '~/types'
import { BackgroundImage } from '../backgroundImage'
import { Paragraph } from '../markdown/Paragraph'
import { Title } from '../title'
import { View } from '../view'
import layoutStyle from './layout.module.less'
import style from './styles'

type Props = {
  blog: BlogItemType
  isFirst?: true
} & {
  theme?: Theme
}

function BlogItem({ blog, isFirst, theme }: Props) {

  return (
    <View
      style={{
        ...style.root,
        paddingTop: isFirst ? theme!.business.layout.appBar.height : undefined,
      }}
    >
      {blog.backgroundImage && (
      <>
        <View
          className={`${layoutStyle.hidden_l} ${layoutStyle.backgroundImage}`}
        >
          <BackgroundImage
            src={(blog.backgroundImage as any).childImageSharp.original.src}
          />
        </View>
        <View
          className={`${layoutStyle.visible_l} ${layoutStyle.backgroundImage}`}
        >
          <BackgroundImage resizeMode="cover" src={blog.backgroundImage} />
        </View>
      </>
      )}
      <Title.h2
        contrast={blog.contrastText}
        onPress={() => navigateTo(blog.slug)}
      >
        {blog.title}
      </Title.h2>
      {blog.subhead && (
        <Title.h3
          contrast={blog.contrastText}
          onPress={() => navigateTo(blog.slug)}
        >
          {blog.subhead}
        </Title.h3>
      )}
      <Paragraph contrast={blog.contrastText}>
        {`${new Date(blog.date).toLocaleDateString('fr-Fr')} - ${blog.author}`}
      </Paragraph>
    </View>
  )
}

export default withTheme(BlogItem)
