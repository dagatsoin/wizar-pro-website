import { Styles, TextStyle } from '@sproutch/ui'
import { Theme } from '~/theme'

export function createTitleStyle({
  contrast,
  palette,
  style,
  theme
}: {
  contrast?: boolean
  palette?: 'primary' | 'secondary'
  theme: Theme
  style?: TextStyle
}) {
  const color = palette
    ? contrast
      ? theme.palette[palette].contrastText
      : theme.palette[palette].main
    : contrast
      ? theme.business.text.contrast
      : theme.palette.text.primary

  const fontFamily = 'CharlemagneStd-Bold'

  return {
    h1: Styles.createTextStyle(
      {
        marginVertical: 17,
        fontSize: 34,
        color,
        fontFamily,
        ...style
      },
      false
    ),
    h2: Styles.createTextStyle(
      {
        marginVertical: 14,
        fontSize: 28,
        color,
        fontFamily,
        ...style
      },
      false
    ),
    h3: Styles.createTextStyle(
      {
        marginVertical: 12,
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: "100",
        color,
        ...style
      },
      false
    ),
    h4: Styles.createTextStyle(
      {
        marginVertical: 8,
        fontSize: 16,
        color,
        ...style
      },
      false
    ),
    h5: Styles.createTextStyle(
      {
        marginVertical: 7,
        fontSize: 14,
        color,
        fontFamily,
        ...style
      },
      false
    ),
    h6: Styles.createTextStyle(
      {
        marginVertical: 6,
        fontSize: 12,
        color,
        fontFamily,
        fontWeight: 'bold',
        ...style
      },
      false
    )
  }
}
