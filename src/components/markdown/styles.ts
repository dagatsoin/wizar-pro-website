import { Styles } from '@sproutch/ui'
import { Theme } from '~/theme'

export function createLinkStyle({
  theme,
  isHovered
}: {
  theme: Theme
  isHovered: boolean
}) {
  return Styles.createLinkStyle(
    {
      color: theme.palette.secondary.main,
      textDecorationLine: isHovered ? 'underline' : 'none'
    },
    false
  )
}
