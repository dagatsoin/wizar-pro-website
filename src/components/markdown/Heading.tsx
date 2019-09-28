import * as React from 'react'

import { Title } from '../title'

export type HeadingProps = {
  level: number
  children: React.ReactNode
  contrast?: boolean
}

export function Heading({children, level, contrast}: HeadingProps) {
  return React.createElement(Title['h' + level], {contrast}, children)
}