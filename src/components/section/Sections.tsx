import React from 'react'

import { ModuleAttributes, Section as SectionType } from '~/types'
import Section from './Section'

export function Sections({
  sections,
  modules,
}: {
  sections: SectionType[]
  modules: ModuleAttributes[]
}) {
  return (
    <>
      {sections.map(s => (
        <Section key={s.modules.join()} section={s} modules={modules} />
      ))}
    </>
  )
}
