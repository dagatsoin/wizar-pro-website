import * as React from 'react'
import * as RX from 'reactxp'

type Props = { 
  alt: string
  title: string
  src: string
}

type State = {
  width: number
  height: number
}

export class Image extends React.PureComponent<Props, State> {
  public state: State = {
    width: 0,
    height: 0
  }

  public render() {
    const {
      alt,
      title,
      src
    } = this.props

    const {
      width,
      height
    } = this.state

    return (
      <RX.Image
        source={src}
        accessibilityLabel={alt}
        resizeMode="auto"
        resizeMethod="auto"
        title={title}
        style={{
          width,
          height
        }}
        onLoad={dimensions => this.setState({
          width: dimensions.width,
          height: dimensions.height
        })}
      />
    )
  }
}