import { graphql } from 'gatsby'
import React from 'react'

import { HeroShot, Layout } from '../components'

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const Home = ({ data }: { data: Data }) => (
  <Layout>
   {data.site.siteMetadata.title}
    <HeroShot backgroundImageURL="./hero.jpg" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Home
