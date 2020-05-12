import { Link } from 'gatsby'
import React from 'react'

import { textStyles } from '~/textStyles'
import { Title } from '../title'
import style from './style'

type Props = {
  brandLogoUrl?: string
  brandName?: string
}

const Header = ({ brandLogoUrl, brandName }: Props) => (
  <header style={style.root}>
    <div style={style.brand}>
      {brandLogoUrl && (
        <Link to="/">
          <img style={style.logo} src={brandLogoUrl} alt={brandName} />
        </Link>
      )}
    </div>
    <div style={style.menu}>
      {(
        <div style={{ paddingRight: 16 }}>
          <Link to="/blog">
            <Title.h4
              contrast
              style={{
                ...(textStyles.heading && textStyles.heading.h4),
              }}
            >
              Blog
            </Title.h4>
          </Link>
        </div>
      )}
    </div>
  </header>
)

export default Header
