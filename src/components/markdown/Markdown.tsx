import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Em } from './Em'
import { Heading, HeadingProps } from './Heading'
import { Image } from './Image'
import { LineBreak } from './LineBreak'
import { Link } from './Link'
import { List } from './List'
import { ListItem } from './ListItem'
import { Paragraph, ParagraphProps } from './Paragraph'
import { Strong } from './Strong'

function Markdown({ input, contrast }: { input: string, contrast?: boolean }) {
  return (
    <ReactMarkdown
      source={input}
      renderers={{
        emphasis: Em,
        image: Image,
        link: Link,
        list: List,
        heading: (props: HeadingProps) => <Heading {...props} contrast={contrast}/>,
        listItem: ListItem,
        paragraph: (props: ParagraphProps) => <Paragraph {...props} contrast={contrast}/>,
        break: LineBreak,
        strong: Strong
      }}
    />
  )
}

export default Markdown
