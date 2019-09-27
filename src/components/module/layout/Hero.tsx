import { View } from '@sproutch/ui'
import { navigate } from 'gatsby'
import React from 'react'

import { BackgroundImage, Cta, Image, Markdown, Title } from '~/components'
import { Attributes } from '~/types/module'
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
  return (
    <View style={[styles.root, styles.hero.root]}>
      {backgroundImage && <BackgroundImage src={backgroundImage} />}
      <View style={styles.contentWrapper(layout, imageFirst)}>
        <View style={styles.hero.content}>
          <Title.h2
            contrast={contrastText}
            style={{ overflow: 'visible', marginVertical: 0, fontSize: 34 }}
          >
            {title}
          </Title.h2>
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
          <View style={styles.hero.image}>
            <Image {...image} />}
          </View>
        )}
      </View>
    </View>
  )
}
