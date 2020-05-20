import React from 'react'

type Props = {
  content: string
  className?: string
}

const HTMLContent = ({ content, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export default HTMLContent
