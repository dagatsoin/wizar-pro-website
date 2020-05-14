import { SceneTransition } from '@sproutch/ui'
import React from 'react'

import { View } from '../view'
import * as style from './style'

type Props = {
  slides: React.ReactNode[]
}

type State = {
  activeId: number
}

export default class WithoutRouter extends React.Component<Props, State> {
  public state: State = {
    activeId: 0,
  }

  private interval: any

  public componentDidMount() {
    this.interval = window.setInterval(
      () => {
        if (this.props.slides.length > 1) {
          this.setState({ activeId: this.state.activeId === this.props.slides.length - 1 ? 0 :  this.state.activeId + 1})
        }
      },
      5000
    )
  }

  public componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  public render() {
    return (
      <View style={style.sceneContainer}>
        <SceneTransition
          style={style.sceneTransition}
          render={() => this.props.slides[this.state.activeId]}
        />
      </View>
    )
  }
}