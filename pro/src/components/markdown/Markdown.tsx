import React from 'react'
import ReactMarkdown from 'react-markdown'

import { textStyles as defaultTextStyles } from '~/textStyles'
import { TextStyles } from '~/types/TextStyles'
import { Blockquote, BlockquoteProps } from './Blockquote'
import { Em } from './Em'
import { Heading, HeadingProps } from './Heading'
import { Image } from './Image'
import { LineBreak } from './LineBreak'
import { Link } from './Link'
import { List } from './List'
import { ListItem } from './ListItem'
import { Paragraph, ParagraphProps } from './Paragraph'
import { Strong, StrongProps } from './Strong'

type SourcePosition = {
  end: {
    line: number
    column: number
    offset: number
  }
  start: {
    line: number
    column: number
    offset: number
  }
}

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
      sourcePos
      rawSourcePos
      renderers={{
        emphasis: Em,
        blockquote: (
          props: BlockquoteProps & { sourcePosition: SourcePosition }
        ) => (
          <Blockquote
            children={getSource(input, props.sourcePosition)}
            style={textStyles && textStyles.blockquote}
          />
        ),
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

function getSource(input: string, sourcePos: SourcePosition) {
  const lines = input.split(/\n/g)

  const chunkOfFirstLine = lines[sourcePos.start.line - 1].slice(
    sourcePos.start.column,
    sourcePos.end.line !== sourcePos.start.line
      ? sourcePos.end.column
      : undefined
  )
  const chunkOfIntermediateLines =
    sourcePos.end.line - sourcePos.start.line > 1
      ? '\n' +
        lines.slice(sourcePos.start.line, sourcePos.end.line - 1).join('\n')
      : ''

  const chunkOfLastLine =
    sourcePos.start.line === sourcePos.end.line
      ? ''
      : '\n' + lines[sourcePos.end.line - 1].slice(0, sourcePos.end.column)

  return chunkOfFirstLine + chunkOfIntermediateLines + chunkOfLastLine
}

export default Markdown
