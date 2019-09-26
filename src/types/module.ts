import { Fixed, Fluid, Image } from './image'
import { CTA, Image as ImageWidgetValue } from './widget'

export type Module = {
  layout: string
  cta?: CTA
  title: string
  imagePosition: string
  contrastText: boolean
  body: string
  backgroundImage?: string
  image?: ImageWidgetValue
}

export type Attributes = Omit<Module, 'body'> & {
  image?: ImageWidgetValue & { src: Image<Fixed> }
  backgroundImage?: Image<Fluid>
}