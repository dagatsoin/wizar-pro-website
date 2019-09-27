import { Styles } from '@sproutch/ui'
import { Layout } from '../../types/module'

export const root = Styles.createViewStyle({
  flex: 1,
})

export const hero = {
  root: Styles.createViewStyle({
    paddingTop: 120,
  }),
  content: Styles.createViewStyle({
    overflow: 'visible'
  }),
  image: Styles.createViewStyle({
    marginLeft: 42
  })
}

export function contentWrapper(layout: Layout, imageFirst: boolean) {
  function getFlexDirection() {
    switch (layout) {
      case 'hero':
      case 'horizontal':
        return imageFirst ? 'row-reverse' : 'row'
      case 'vertical':
      default:
        return imageFirst ? 'column-reverse' : 'column'
    }
  }
  return Styles.createViewStyle(
    {
      flex: 1,
      flexDirection: getFlexDirection(),
      alignSelf: 'center',
      alignItems: 'center',
    },
    false
  )
}
