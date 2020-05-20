import * as React from 'react'

type Props = {
  start: number | null
  ordered: boolean
  tight: boolean
  depth: number
  children: React.ReactNode
  "data-sourcepos": object
}

type Attributs = Partial<{
  "data-sourcepos": object
  start: number
}>

export function List(props: Props) {
  const { children, ordered, start } = props
  
  const startPos = start && start > 1 ? start : undefined

  const attrs: Attributs = {
    ...getCoreProps(props),
    start: startPos
  }

  return ordered
    ? <ol {...attrs}>{children}</ol>
    : <ul {...attrs}>{children}</ul>
}

function getCoreProps(props: Props) {
  return props['data-sourcepos'] ? {'data-sourcepos': props['data-sourcepos']} : undefined
}