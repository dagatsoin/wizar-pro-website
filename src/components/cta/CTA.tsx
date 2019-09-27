import { Button, ButtonStyleOverride, Styles } from '@sproutch/ui'
import React from 'react'

import { CTA } from 'src/types/widget'

export default ({ label, palette, onPress, style }: CTA & { onPress: () => void, style?: ButtonStyleOverride }) => {
  const _style = {
    root: Styles.createViewStyle({
        alignSelf: 'flex-start',
        borderRadius: 4,
        ...style && style.root as Object
      }),
    }
  return (
    <Button
      style={_style}
      variant="contained"
      palette={palette}
      label={label}
      onPress={onPress}
    />
  )
}
