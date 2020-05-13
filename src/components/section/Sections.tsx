import React from 'react'

import { Module, Section as SectionType } from '~/types'
import { Edge } from '~/types/graph'
import Section from './Section'

export function Sections({
  sections,
  edges,
}: {
  sections: SectionType[]
  edges: Array<Edge<Module>>
}) {
  return (
    <>
      {sections.map(s => (
        <Section key={s.modules.join()} section={s} edges={edges} />
      ))}
    </>
  )
}
