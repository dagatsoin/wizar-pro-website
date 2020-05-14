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
import { Environment, ModuleType } from '~/types'
import layoutStyle from '../layout.module.less'

type Props<E extends Environment> = { noMargin: boolean } & ModuleType<E>
// todo extract navigation url
export default function<E extends Environment>({
  cta,
  title,
  titleLevel,
  isTitleDisplayed,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  elevation,
  content,
  noMargin,
}: Props<E>): JSX.Element {
  const H = Title['h' + titleLevel]
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
        {(content.length || isTitleDisplayed) && (
          <View className={layoutStyle.content}>
            {isTitleDisplayed && (
              <H style={textStyles.heading && textStyles.heading.h2} contrast={contrastText}>{title}</H>
            )}
            {content && (
              <Markdown
                input={content}
                contrast={contrastText}
                textStyles={textStyles}
              />
            )}
            {cta && (
              <View className={layoutStyle.cta}>
                <Cta
                  style={{ root: { marginTop: 30, flex: 1 } }}
                  {...cta}
                  onPress={() => navigate('/order/')}
                />
              </View>
            )}
          </View>
        )}
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
          marginLeft: elevation * 2,
        },
      }}
    >
      {children}
    </Paper>
  )
}
