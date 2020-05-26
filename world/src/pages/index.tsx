import { graphql } from 'gatsby'

import { default as Home } from '../templates/Page'

export default function(data: any) {
  return Home(data)
}

export const query = graphql`
  query {
    page: markdownRemark(frontmatter: { is_home: { eq: true } }) {
      ...Page
    }
    modulesData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/modules/" } }
    ) {
      nodes {
        ...Module
      }
    }
  }
`