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
import { ModuleAttributes } from '~/types/module'
import layoutStyle from '../layout.module.less'

type Props = { markdown: string } & ModuleAttributes
// todo extract navigation url
export default function({
  cta,
  title,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  markdown,
}: Props): JSX.Element {
  return (
    <View className={`${layoutStyle.hero} ${layoutStyle.root} ${imageFirst ? layoutStyle.imageFirst : ''}`}>
      {backgroundImage && (
        <>
          <View className={`${layoutStyle.hidden_l} ${layoutStyle.backgroundImage}`}>
            <BackgroundImage
              src={(backgroundImage as any).childImageSharp.original.src}
            />
          </View>
          <View className={`${layoutStyle.visible_l} ${layoutStyle.backgroundImage}`}>
            <BackgroundImage src={backgroundImage} />
          </View>
        </>
      )}
      <View
        className={layoutStyle.contentWrapper}
      >
        <View className={layoutStyle.content}>
          <View
            className={`
            ${layoutStyle.hidden_l}
            ${layoutStyle.title}
          `}
          >
            <Title.h2
              contrast={contrastText}
              style={{ overflow: 'visible', marginVertical: 0, fontSize: 24 }}
            >
              {title}
            </Title.h2>
          </View>
          <View
            className={`
            ${layoutStyle.visible_l}
            ${layoutStyle.title}
          `}
          >
            <Title.h2
              contrast={contrastText}
              style={{ overflow: 'visible', marginVertical: 0, fontSize: 34 }}
            >
              {title}
            </Title.h2>
          </View>
          {markdown && <Markdown input={markdown} contrast={contrastText} />}
          {cta && (
            <View className={layoutStyle.cta}>
              <Cta
                style={{ root: { marginTop: 30 } }}
                {...cta}
                onPress={() => navigate('/askDemo/')}
              />
            </View>
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
