import { Fluid, GatsbyImage } from './image'
export type BackgroundImageAttribute =
  | (GatsbyImage<Fluid> & {
      original: {
        src: string
      }
    })
  | string
