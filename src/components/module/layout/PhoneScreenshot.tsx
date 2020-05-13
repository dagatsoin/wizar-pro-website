import { navigate, withPrefix } from 'gatsby'
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
import { Environment, Module } from '~/types'
import layoutStyle from '../layout.module.less'

type Props<E extends Environment> = { markdown: string } & Module<E>
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
  markdown,
}: Props<E>): JSX.Element {
  const H = Title['h' + titleLevel]
  return (
    <View className={`${layoutStyle.phoneScreenshot} ${imageFirst ? layoutStyle.imageFirst : ''} ${layoutStyle.root}`}>
      <View
        className={`${layoutStyle.contentWrapper}`}
      >
        <View className={layoutStyle.content}>
          {isTitleDisplayed && (
            <H style={textStyles.heading && textStyles.heading.h2} contrast={contrastText}>{title}</H>
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
            {backgroundImage && (
              <>
                <View
                  className={`
              ${layoutStyle.hidden_l}
              ${layoutStyle.backgroundImage}
            `}
                >
                  <BackgroundImage
                    src={(backgroundImage as any).childImageSharp.original.src}
                  />
                </View>
                <View
                  className={`
              ${layoutStyle.visible_l}
              ${layoutStyle.backgroundImage}
            `}
                >
                  <BackgroundImage src={backgroundImage} />
                </View>
              </>
            )}

            <BackgroundImage resizeMode='cover' src={withPrefix("./images/canvas-phone.png")} />
            
            <View className={layoutStyle.screenshot}>
              <Image {...image} />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
