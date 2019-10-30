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

type Props = { markdown: string } & ModuleAttributes
// todo extract navigation url
export default function({
  cta,
  title,
  titleLevel,
  isTitleDisplayed,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  markdown,
}: Props): JSX.Element {
  const H = Title['h' + titleLevel]
  return (
    <View className={`${layoutStyle.vertical} ${layoutStyle.root} ${imageFirst ? layoutStyle.imageFirst : ''}`}>
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
              ${layoutStyle.backgroundImage}
            `}
          >
            <BackgroundImage
              src={backgroundImage}
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
              ${layoutStyle.backgroundImage}
            `}
          >
            <BackgroundImage src={backgroundImage} />
          </View>
        </>
      )}
      <View
        className={layoutStyle.contentWrapper}
      >
        <View className={layoutStyle.content}>
          {isTitleDisplayed && (
            <H style={textStyles.heading && textStyles.heading.h2} contrast={contrastText}>
              {title}
            </H>
          )}
          {markdown && <Markdown input={markdown} contrast={contrastText} />}
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
}
