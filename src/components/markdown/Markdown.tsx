import React from 'react'
import ReactMarkdown from 'react-markdown'

import { textStyles as defaultTextStyles } from '~/textStyles'
import { TextStyles } from '~/types/TextStyles'
import { Em } from './Em'
import { Heading, HeadingProps } from './Heading'
import { Image } from './Image'
import { LineBreak } from './LineBreak'
import { Link } from './Link'
import { List } from './List'
import { ListItem } from './ListItem'
import { Paragraph, ParagraphProps } from './Paragraph'
import { Strong, StrongProps } from './Strong'

function Markdown({
  input,
  contrast,
  textStyles = defaultTextStyles,
}: {
  input: string
  contrast?: boolean
  textStyles?: TextStyles
}) {
  return (
    <ReactMarkdown
      source={input}
      renderers={{
        emphasis: Em,
        image: Image,
        link: Link,
        list: List,
        heading: (props: HeadingProps) => (
          <Heading
            {...props}
            contrast={contrast}
            style={textStyles && textStyles.heading}
          />
        ),
        listItem: ListItem,
        paragraph: (props: ParagraphProps) => (
          <Paragraph {...props} contrast={contrast} />
        ),
        break: LineBreak,
        strong: (props: StrongProps) => (
          <Strong {...props} style={textStyles && textStyles.strong} />
        ),
      }}
    />
  )
}

export default Markdown
