import { Fixed, Fluid, GatsbyImage } from './image'

export type ImageAttribute<T extends string | GatsbyImage<Fluid | Fixed> = GatsbyImage<any>> = {
  hiddenHeaderContent?: string
  hiddenHeaderLevel?: number
  src: T
}

export type BackgroundImageAttribute<T extends string | GatsbyImage<Fluid | Fixed> = GatsbyImage<any>> = T
/* | (GatsbyImage<Fluid> & {
    original: {
      src: string
    }
  })
| string */

export type CTA = {
  palette: 'primary' | 'secondary'
  label: string
}

export type Layout = 'hero' | 'horizontal' | 'phone-screenshot' | 'vertical' | 'vertical-small'

export type Environment = 'netlify' | 'gatsby'

export type Module<E extends Environment = 'gatsby'> = {
  layout: Layout
  cta?: CTA
  title: string
  titleLevel: number
  isTitleDisplayed: boolean
  elevation: number
  imageFirst: boolean
  contrastText: boolean
  backgroundImage?: BackgroundImageAttribute<E extends 'netlify' ? string : GatsbyImage<any>>
  image?: ImageAttribute<E extends 'netlify' ? string : GatsbyImage<any>>
}

export type PageAttributes = {
  tags: string[];
  title: string;
  date: string;
  description: string;
  hero: string;
  section_list: Section[];
  is_home: boolean
}

export type Section = {
  title?: string,
  layout: SectionLayout,
  modules: string[]
}

export type ModuleLayout = 'hero' | 'horizontal' | 'vertical'
export type SectionLayout = 'horizontal' | 'vertical' | 'carousel'

export type BlogNode = {
  fields: {
    slug: string
  }
  fileAbsolutePath: string
  rawMarkdownBody: string
  frontmatter: BlogAttributes
}

export type BlogAttributes = {
  backgroundImage?: GatsbyImage<Fluid>
  title: string
  subhead?: string
  tags: string[]
  date: string
  author: string
  description: string
  cta?: CTA
  contrastText: boolean
}