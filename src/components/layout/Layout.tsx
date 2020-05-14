import { View } from '@sproutch/ui'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { PageAttributes } from '~/types'
import { Node } from '~/types/graph'
import { Footer } from '..'
import { Header } from '../header'
import * as style from './style'

export type Props = {
  children: React.ReactNode
}

type Data = {
  site: {
    siteMetadata: {
      brandLogoUrl: string
    }
  }
  allMarkdownRemark: {
    edges: Array<{
      node: Node<PageAttributes>
    }>
  }
}

const Layout = ({ children, data }: Props & { data: Data}) => {
  return (
    <View style={style.root}>
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            href: `${'/favicon.png'}`,
          },
        ]}
      >
        <html lang="fr" />
      </Helmet>
      <Header
        brandLogoUrl={withPrefix(
          `./images/${data.site.siteMetadata.brandLogoUrl}`
        )}
        brandName={'Wizar'}
      />
      {children}
      <Footer />
    </View>
  )
}

export default (props: Props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            brandLogoUrl
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
        ) {
          edges {
            node {
              ...Page
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout data={data} {...props} />
    )}
  />
)
