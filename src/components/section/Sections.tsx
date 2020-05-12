import React from 'react'

import { Edge } from '~/types/graph'
import { ModuleAttributes } from '~/types/module'
import { Section as SectionType } from '~/types/page'
import Section from './Section'

export function Sections({
  sections,
  edges,
}: {
  sections: SectionType[]
  edges: Array<Edge<ModuleAttributes>>
}) {
  return (
    <>
      {sections.map(s => (
        <Section key={s.modules.join()} section={s} edges={edges} />
      ))}
    </>
  )
}
