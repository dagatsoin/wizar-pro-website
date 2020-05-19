import { FixedObject, FluidObject } from 'gatsby-image'

export type Fluid = {
  fluid: FluidObject
}

export type Fixed = {
  fixed: FixedObject
}

export type GatsbyImage<T extends Fixed | Fluid> = {
  childImageSharp: T
}

export function isFluid(childImageSharp: Fluid | Fixed): childImageSharp is Fluid {
  return (childImageSharp as any).fluid !== undefined
}