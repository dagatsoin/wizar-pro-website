import { graphql } from 'gatsby'

export type NetlifyPage = {
  tags: string[]
  title: string
  is_home: boolean
  date: string
  description: string
  hero: string
  section_list: Section[]
}

export type PageAttributes = NetlifyPage

export type Section = {
  title?: string,
  layout: SectionLayout,
  modules: string[]
}

export type ModuleLayout = 'hero' | 'horizontal' | 'vertical'
export type SectionLayout = 'horizontal' | 'vertical' | 'carousel'

export type ModuleAttributes = NetlifyPage

export const query = graphql`
  fragment Page on MarkdownRemark {
    fileAbsolutePath
    rawMarkdownBody
    frontmatter {
      hero
      title
      section_list {
        title
        layout
        modules
      }
      is_home
      tags
      date
      description
    }
    fileAbsolutePath
    rawMarkdownBody
  }
`