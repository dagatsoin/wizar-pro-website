import { Styles } from '@sproutch/ui'
import { SceneTransitionOverride } from '@sproutch/ui/lib/components/sceneTransition/style'

export const sceneContainer = {
  flex: 1,
}

export const scene = Styles.createViewStyle({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

export const sceneTransition: SceneTransitionOverride = {
  currentSceneContainer: {
    backgroundColor: 'white'
  },
  nextSceneContainer: {
    backgroundColor: 'white'
  }
}