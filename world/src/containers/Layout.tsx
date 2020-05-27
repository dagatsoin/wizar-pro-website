import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from 'gatsby-theme-warfog'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brandLogoUrl
        }
      }
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
  const menuItems = data.allMarkdownRemark.nodes.map(n => ({
    url: n.fields.slug,
    menuItemLabel: n.frontmatter.menuItem,
  }))
  return (
    <Layout
      logoUrl={data.site.siteMetadata.brandLogoUrl}
      menuItems={menuItems || []}
      {...props}
    />
  )
}
