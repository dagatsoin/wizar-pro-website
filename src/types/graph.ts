import { BlogAttributes, Environment, ModuleAttributes, PageAttributes } from '.'

export type AvailableType<E extends Environment = 'gatsby'> = ModuleAttributes<E> | PageAttributes | BlogAttributes

export type Edge<T extends AvailableType> = {
  node: Node<T extends ModuleAttributes<any>
    ? ModuleAttributes<any>
    : T extends PageAttributes
    ? PageAttributes
    : BlogAttributes
  >
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
