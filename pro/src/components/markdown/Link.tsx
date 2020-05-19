import * as Sproutch from '@sproutch/ui'
import * as React from 'react'
import { Types } from 'reactxp'

import { Theme } from '~/theme'
import { ThemeContext } from '~/ThemeContext'
import * as styles from './styles'

type Props = {
  title: string
  href: string
}

type State = {
  isHovered: boolean
}

export class Link extends React.PureComponent<Props, State> {
  public state: State = {
    isHovered: false
  }

  public render() {
    const { children, href, title } = this.props
    const { isHovered } = this.state
    return (
      <ThemeContext.Consumer>
        {(theme: Theme) => {
          const linkStyle = styles.createLinkStyle({ theme, isHovered })
          return (
          <Sproutch.Link
            title={title}
            onHoverStart={this.onHoverStart}
            onHoverEnd={this.onHoverEnd}
            accessibilityId={title}
            url={href}
            onPress={this.navigateTo}
            style={linkStyle}
          >
            {children}
          </Sproutch.Link>
        )}}
      </ThemeContext.Consumer>
    )
  }

  public onHoverStart = () => {
    this.setState({ isHovered: true })
  }

  public onHoverEnd = () => {
    this.setState({ isHovered: false })
  }

  private navigateTo(e: Types.SyntheticEvent, href: string) {
    e.preventDefault()
    window.open(href, '_blank', 'location=yes')
  }
}