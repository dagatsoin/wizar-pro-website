import { Button, ButtonProps, Styles } from '@sproutch/ui'
import React from 'react'

import { CTA } from 'src/types'

export default ({ label, palette, onPress, style }: CTA & ButtonProps) => {
  const _style = {
    root: Styles.createViewStyle({
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
