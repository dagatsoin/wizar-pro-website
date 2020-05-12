import { graphql } from 'gatsby'

export type PageAttributes = {
  tags: string[];
  title: string;
  date: string;
  description: string;
  hero: string;
  section_list: Section[];
  is_home: boolean
}

export type Section = {
  title?: string,
  layout: SectionLayout,
  modules: string[]
}

export type ModuleLayout = 'hero' | 'horizontal' | 'vertical'
export type SectionLayout = 'horizontal' | 'vertical' | 'carousel'

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
  }
`