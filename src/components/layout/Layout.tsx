import { View } from '@sproutch/ui'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { Footer } from '..'
import { Header } from '../header'
import * as style from './style'

export type Props = {
  children: React.ReactNode
  data: Data
}

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      brandLogoUrl: string
    }
  }
}

const Layout = ({ children, data }: Props) => (
  <View style={style.root}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header
      brandLogoUrl={withPrefix(
        `./images/${data.site.siteMetadata.brandLogoUrl}`
      )}
    />
    {children}
    <Footer/>
  </View>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            brandLogoUrl
          }
        }
      }
    `}
    render={(data: Data) => <Layout data={data} {...props} />}
  />
)
