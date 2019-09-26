import { Fixed, Fluid, Image } from './image'
import { CTA, Image as ImageWidgetValue } from './widget'

export type Section = {
  layout: string
  cta?: CTA
  title: string
  imagePosition: string
  contrastText: boolean
  body: string
  backgroundImage?: string
  image?: ImageWidgetValue
}

export type SectionType = Section & {
  image?: ImageWidgetValue & { src: Image<Fixed> }
  backgroundImage?: Image<Fluid>
}