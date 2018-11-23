import { Link } from 'gatsby'
import React from 'react'

import style from './style'

type Props = {
  brandLogoUrl?: string
  brandName?: string
}

const Header = ({ brandLogoUrl, brandName }: Props) => (
  <div style={style.root}>
    <div style={style.brand}>
      {brandName && (
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            {brandName}
          </Link>
        </h1>
      )}
      {brandLogoUrl && (
        <Link to="/">
          <img style={style.logo} src={brandLogoUrl} alt={brandName} />
        </Link>
      )}
    </div>
  </div>
)

export default Header
