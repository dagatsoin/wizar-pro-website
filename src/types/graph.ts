import { BlogAttributes } from './blog'
import { ModuleAttributes } from './module'
import { PageAttributes } from './page'

export type AvailableType = ModuleAttributes | PageAttributes | BlogAttributes

export type Edge<T extends AvailableType> = {
  node: Node<T>
}

export type Node<T extends AvailableType> = {
  rawMarkdownBody: string
  fileAbsolutePath: string
  frontmatter: T
  fields: T extends PageAttributes | BlogAttributes ? {
    slug: string
  } : never
}

export type GatsbyData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allMarkdownRemark: {
    edges: Array<Edge<AvailableType>>
  }
}
