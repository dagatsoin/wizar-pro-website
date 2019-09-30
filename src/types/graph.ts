import { ModuleAttributes } from './module'
import { PageAttributes } from './page'

export type AvailableType = ModuleAttributes | PageAttributes

export type Edge<T extends AvailableType> = {
  node: Node<T>
}

export type Node<T extends AvailableType> = {
  rawMarkdownBody: string
  fileAbsolutePath: string
  frontmatter: T
}