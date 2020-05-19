import * as React from 'react'

import { TextStyles } from "~/types/TextStyles"
import { Title } from '../title'

export type HeadingProps = {
  level: number
  children: React.ReactNode
  contrast?: boolean
  style?: TextStyles['heading']
}

export function Heading({children, level, contrast, style}: HeadingProps) {
  return React.createElement(Title['h' + level], {contrast, style: style && style['h' + level]}, children)
}