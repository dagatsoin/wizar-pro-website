export type Fluid = {
  fluid: {
    src: string
  }
}

export type Fixed = {
  fixed: {
    src: string
  }
}

export type Image<T> = {
  childImageSharp: T
}
