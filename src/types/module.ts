import { Fixed, Fluid, GatsbyImage } from './image'
import { CTA, Image as ImageWidgetValue } from './widget'

export type NetlifyModule = {
  layout: Layout
  cta?: CTA
  title: string
  imageFirst: boolean
  contrastText: boolean
  body: string
  backgroundImage?: string
  image?: ImageWidgetValue
}

export type Layout = 'hero' | 'horizontal' | 'vertical'

export type Attributes = Omit<NetlifyModule, 'body'> & {
  image?: ImageAttribute
  backgroundImage?: BackgroundImageAttribute
}

export type ImageAttribute = ImageWidgetValue | ImageWidgetValue & { src: GatsbyImage<Fluid | Fixed> }

export type BackgroundImageAttribute = GatsbyImage<Fluid> | string