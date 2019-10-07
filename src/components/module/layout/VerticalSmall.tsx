import { Paper } from '@sproutch/ui'
import { navigate } from 'gatsby'
import React from 'react'

import {
  BackgroundImage,
  Cta,
  Image,
  Markdown,
  Title,
  View,
} from '~/components'
import { textStyles } from '~/textStyles'
import { ModuleAttributes } from '~/types/module'
import layoutStyle from '../layout.module.less'

type Props = { markdown: string; noMargin: boolean } & ModuleAttributes
// todo extract navigation url
export default function({
  cta,
  title,
  isTitleDisplayed,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  elevation,
  markdown,
  noMargin,
}: Props): JSX.Element {
  const module = (
    <View
      className={`
        ${layoutStyle.verticalSmall}
        ${layoutStyle.root}
        ${imageFirst ? layoutStyle.imageFirst : ''}
      `}
    >
      {backgroundImage && (
        <>
          <View
            style={{
              position: 'absolute',
              height: '100vh',
              top: 0,
              right: 0,
              left: 0,
            }}
            className={`
              ${layoutStyle.hidden_l}
            `}
          >
            <BackgroundImage
              src={(backgroundImage as any).childImageSharp.original.src}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            className={`
              ${layoutStyle.visible_l}
            `}
          >
            <BackgroundImage src={backgroundImage} />
          </View>
        </>
      )}
      <View
        className={`
        ${layoutStyle.contentWrapper}
        ${noMargin ? layoutStyle.noMargin : ''}
      `}
      >
        <View className={layoutStyle.content}>
          {isTitleDisplayed && (
            <Title.h2 contrast={contrastText}>{title}</Title.h2>
          )}
          {markdown && (
            <Markdown
              input={markdown}
              contrast={contrastText}
              textStyles={textStyles}
            />
          )}
          {cta && (
            <Cta
              style={{ root: { marginTop: 30 } }}
              {...cta}
              onPress={() => navigate('/askDemo/')}
            />
          )}
        </View>
        {image && (
          <View className={layoutStyle.image}>
            <Image {...image} />
          </View>
        )}
      </View>
    </View>
  )
  return elevation ? wrapInPaper(module, elevation) : module
}

function wrapInPaper(children: React.ReactNode, elevation: number) {
  return (
    <Paper
      elevation={elevation}
      style={{
        root: {
          marginTop: elevation,
          marginRight: elevation * 2,
          marginBottom: elevation * 4,
          marginLeft: elevation * 2
        },
      }}
    >
      {children}
    </Paper>
  )
}
