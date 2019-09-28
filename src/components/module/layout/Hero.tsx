import { navigate } from 'gatsby'
import React from 'react'

import { BackgroundImage, Cta, Image, Markdown, Title, View } from '~/components'
import { Attributes } from '~/types/module'
import layoutStyle from '../layout.module.less'
import * as styles from '../style'

type Props = { markdown: string } & Attributes
// todo extract navigation url
export default function({
  cta,
  title,
  backgroundImage,
  contrastText,
  imageFirst,
  layout,
  image,
  markdown,
}: Props): JSX.Element {
  console.log(backgroundImage)
  return (
    <View className={`${layoutStyle.hero} ${layoutStyle.root}`}>
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
            <BackgroundImage src={(backgroundImage as any).childImageSharp.original.src} />
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
          ${imageFirst ? layoutStyle.imageFirst : ''}
        `}
      >
        <View className={layoutStyle.content}>
          <View className={layoutStyle.hidden_l}>
            <Title.h2
              contrast={contrastText}
              style={{ overflow: 'visible', marginVertical: 0, fontSize: 24 }}
            >
              {title}
            </Title.h2>
          </View>
          <View className={layoutStyle.visible_l}>
            <Title.h2
              contrast={contrastText}
              style={{ overflow: 'visible', marginVertical: 0, fontSize: 34 }}
            >
              {title}
            </Title.h2>
          </View>
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
