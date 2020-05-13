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
import { Environment, ModuleType } from '~/types'
import { GatsbyImage } from '~/types/image'
import layoutStyle from '../layout.module.less'

type Props<E extends Environment> = ModuleType<E>
// todo extract navigation url
export default function<E extends Environment>({
  cta,
  title,
  titleLevel,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  content,
}: Props<E>): JSX.Element {
  const H = Title['h' + titleLevel]
  return (
    <View
      className={`${layoutStyle.hero} ${layoutStyle.root} ${
        imageFirst ? layoutStyle.imageFirst : ''
      }`}
    >
      {backgroundImage && (
        <>
          <View
            className={`${layoutStyle.hidden_l} ${layoutStyle.backgroundImage}`}
          >
            <BackgroundImage
              src={(backgroundImage as GatsbyImage<any>).childImageSharp.original.src}
            />
          </View>
          <View
            className={`${layoutStyle.visible_l} ${layoutStyle.backgroundImage}`}
          >
            <BackgroundImage src={backgroundImage} />
          </View>
        </>
      )}
      <View className={layoutStyle.contentWrapper}>
        <View className={layoutStyle.content}>
          <View
            className={`
            ${layoutStyle.hidden_l}
            ${layoutStyle.title}
          `}
          >
            <H
              contrast={contrastText}
              style={{ ...textStyles.heading && textStyles.heading.h2, overflow: 'visible', marginVertical: 0, fontSize: 24 }}
            >
              {title}
            </H>
          </View>
          <View
            className={`
            ${layoutStyle.visible_l}
            ${layoutStyle.title}
          `}
          >
            <H
              contrast={contrastText}
              style={{ overflow: 'visible', marginVertical: 0, fontSize: 34 }}
            >
              {title}
            </H>
          </View>
          <Markdown input={content} contrast={contrastText} />
          {cta && (
            <View className={layoutStyle.cta}>
              <Cta
                style={{ root: { marginTop: 30 } } as any}
                {...cta}
                onPress={() => navigate('/askDemo/')}
              />
              <Cta
                style={{ root: { marginTop: 30 } } as any}
                label="TÉLÉCHARGER SUR ANDROID"
                palette="secondary"
                onPress={() =>
                  window.open(
                    'https://play.google.com/store/apps/details?id=com.warfog.wizar.adventure.map',
                    '_blank'
                  )
                }
              />
            </View>
          )}
        </View>
        {image && (
          <View className={layoutStyle.image}>
            <BackgroundImage
              resizeMode="cover"
              src={withPrefix('./images/canvas-phone.png')}
            />

            <View className={layoutStyle.screenshot}>
              <Image {...image} />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
