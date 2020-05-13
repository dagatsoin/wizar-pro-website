import { Fixed, Fluid, GatsbyImage } from './image'

export type ImageAttribute<
  T extends string | GatsbyImage<Fluid | Fixed> = GatsbyImage<any>
> = {
  hiddenHeaderContent?: string
  hiddenHeaderLevel?: number
  src: T
}

export type BackgroundImageAttribute<
  T extends string | GatsbyImage<Fluid | Fixed> = GatsbyImage<any>
> = T

export type CTA = {
  palette: 'primary' | 'secondary'
  label: string
}

export type Layout =
  | 'hero'
  | 'horizontal'
  | 'phone-screenshot'
  | 'vertical'
  | 'vertical-small'

export type Environment = 'netlify' | 'gatsby'

export type ModuleNode = {
  rawMarkdownBody: string
  frontmatter: ModuleAttributes
}

export type ModuleAttributes<E extends Environment = 'gatsby'> = {
  layout: Layout
  cta?: CTA
  title: string
  titleLevel: number
  isTitleDisplayed: boolean
  elevation: number
  imageFirst: boolean
  contrastText: boolean
  backgroundImage?: BackgroundImageAttribute<
    E extends 'netlify' ? string : GatsbyImage<any>
  >
  image?: ImageAttribute<E extends 'netlify' ? string : GatsbyImage<any>>
}

export type PageNode = {
  fields: {
    slug: string
  }
  fileAbsolutePath: string
  rawMarkdownBody: string
  frontmatter: PageAttributes
}
export type PageAttributes = {
  title: string
  date: string
  metaDescription: string
  metaKeywords: string[]
  hero: string
  section_list: Section[]
  is_home: boolean
}

export type Section = {
  title?: string
  layout: SectionLayout
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
  hero: string
  author: string
  metaDescription: string
  metaKeywords: string[]
  contrastText: boolean
  section_list: Section[]
}

export type BlogItemType = {
  backgroundImage?: GatsbyImage<Fluid>
  title: string
  subhead?: string
  date: string
  author: string
  hero: string
  contrastText: boolean
  section_list: Section[]
  slug: string
}

export type BlogType = {
  backgroundImage?: GatsbyImage<Fluid>
  title: string
  subhead?: string
  tags: string[]
  date: string
  author: string
  hero: string
  slug: string
  content: string
  section_list: Section[]
  modules: ModuleType[]
}

export type PageType = {
  title: string
  date: string
  metaDescription: string
  metaKeywords: string[]
  hero: string
  section_list: Section[]
  modules: ModuleType[]
  is_home: boolean
  content: string
}

export type ModuleType<E extends Environment = 'gatsby'> = ModuleAttributes<
  E
> & {
  content: string
}
