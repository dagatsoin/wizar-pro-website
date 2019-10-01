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
import * as styles from '../style'

type Props = { markdown: string } & ModuleAttributes
// todo extract navigation url
export default function({
  cta,
  title,
  isTitleDisplayed,
  backgroundImage,
  contrastText,
  imageFirst,
  image,
  markdown,
}: Props): JSX.Element {
  return (
    <View className={`${layoutStyle.horizontalSplit} ${layoutStyle.root}`}>
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
      <View
        className={`
          ${layoutStyle.contentWrapper}
          ${imageFirst ? layoutStyle.imageFirst : ''}
        `}
      >
        <View className={layoutStyle.content}>
          {isTitleDisplayed && (
            <Title.h2 contrast={contrastText}>
              {title}
            </Title.h2>
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
