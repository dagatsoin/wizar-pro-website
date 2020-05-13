import { BlogAttributes, PageAttributes } from './types'
import { Edge } from './types/graph'

export function isPage(edge: Edge<any>): edge is Edge<PageAttributes> {
  return edge.node.fileAbsolutePath.indexOf('/pages/') > 0
}

export function isHome(attributes: PageAttributes): boolean {
  return attributes.is_home
}

export function isBlog(edge: Edge<any>): edge is Edge<BlogAttributes> {
  return edge.node.fileAbsolutePath.indexOf('/blog/') > 0
}