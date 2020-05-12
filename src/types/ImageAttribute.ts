import { Fixed, Fluid, GatsbyImage } from './image'
import { Image as ImageWidgetValue } from './widget'
export type ImageAttribute =
  | ImageWidgetValue
  | ImageWidgetValue & {
      src: GatsbyImage<Fluid | Fixed>
    }
