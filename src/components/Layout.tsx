import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import './layout.css'

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
    }
  }
}

const Layout = ({ children, data }: Props) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle="Wizar" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: Data) => <Layout data={data} {...props} />}
  />
)
