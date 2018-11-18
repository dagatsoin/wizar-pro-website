import React, { ReactNode } from 'react'

type Props = {
  content: ReactNode
  className: string
}

const Content = ({ content, className }: Props) => (
  <div className={className}>{content}</div>
)

export default Content
