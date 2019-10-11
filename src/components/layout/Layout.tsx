import { View } from '@sproutch/ui'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Option } from 'space-lift'

import { Node } from '~/types/graph'
import { PageAttributes } from '~/types/page'
import { Footer } from '..'
import { Header } from '../header'
import favicon64 from './favicon.png'
import * as style from './style'

export type Props = {
  children: React.ReactNode
  data: Data
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

declare const dataLayer: any

const Layout = ({ children, data }: Props) => {
  const { title, keywords, description } = Option(data.allMarkdownRemark.edges.find(({node}) => node.frontmatter.is_home))
    .map(edge => ({
      title: edge.node.frontmatter.title,
      keywords: edge.node.frontmatter.tags.join(', '),
      description: edge.node.frontmatter.description
    }))
    .getOrElse({
      title: '',
      keywords: '',
      description: ''
    })

  return (
    <View style={style.root}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
        link={[
          { rel: 'icon', type: 'image/png', sizes: "64x64", href: `${favicon64}` },
        ]}
      >
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KR1NP9FX30"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-KR1NP9FX30');
        </script>
        <html lang="fr" />
      </Helmet>
      <Header
        brandLogoUrl={withPrefix(
          `./images/${data.site.siteMetadata.brandLogoUrl}`
        )}
        brandName={"Wizar"}
      />
      {children}
      <Footer />
    </View>
  )
}

export default props => (
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
    render={(data: Data) => <Layout data={data} {...props} />}
  />
)
