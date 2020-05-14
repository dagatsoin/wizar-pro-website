import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import { textStyles } from '~/textStyles'
import { Title } from '../title'
import style from './style'

type Props = {
  brandLogoUrl?: string
  brandName?: string
}

const Header = ({ brandLogoUrl, brandName }: Props) => {
  const menuItemsQuery = useStaticQuery(graphql`
    query MenuItems {
      allMarkdownRemark(filter: { frontmatter: { menuItem: { ne: null } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            menuItem
          }
        }
      }
    }
  `)
  const menuItems = menuItemsQuery.allMarkdownRemark.nodes.map(n => ({
    url: n.fields.slug,
    menuItemLabel: n.frontmatter.menuItem
  }))

  return (
    <header style={style.root}>
      <div style={style.brand}>
        {brandLogoUrl && (
          <Link to="/">
            <img style={style.logo} src={brandLogoUrl} alt={brandName} />
          </Link>
        )}
      </div>
      <div style={style.menu}>
        {menuItems.map(({url, menuItemLabel}) => (
          <div style={{ paddingRight: 16 }}>
            <Link to={url}>
              <Title.h4
                contrast
                style={{
                  ...(textStyles.heading && textStyles.heading.h4),
                }}
              >
                {menuItemLabel}
              </Title.h4>
            </Link>
          </div>
        ))}
        {/* {
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
        } */}
      </div>
    </header>
  )
}
export default Header
