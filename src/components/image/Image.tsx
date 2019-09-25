import React from 'react'
import * as RX from 'reactxp'

import { Value } from '../../cms/ImageControl'

type Props = Value

function wrapInHeader(level: string, children: React.ReactNode) {
  switch (level) {
    default:
    case '1': return <h1>{children}</h1>
    case '2': return <h2>{children}</h2>
    case '3': return <h3>{children}</h3>
    case '4': return <h4>{children}</h4>
    case '5': return <h5>{children}</h5>
    case '6': return <h6>{children}</h6>
  }
}

function renderImage(src: string, title?: string) {
  return <img src={src} title={title}/>
}

export default function({hiddenHeaderContent, hiddenHeaderLevel, src}: Props) {
  return hiddenHeaderContent
    ? wrapInHeader(hiddenHeaderLevel || '1', renderImage(src, hiddenHeaderContent))
    : renderImage(src, hiddenHeaderContent)
}