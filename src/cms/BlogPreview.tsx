import React from "react"

import { Blog } from "../components/blog"

type Props = {
  entry: any,
}
export function BlogPreview(props: Props) {
  return (
    <Blog
      blog={{
        title: props.entry.getIn(['data', 'title']),
        backgroundImage: props.entry.getIn(['data', 'backgroundImage']),
        subhead: props.entry.getIn(['data', 'subhead']),
        tags: props.entry.getIn(['data', 'tags']),
        date: props.entry.getIn(['data', 'date']),
        author: props.entry.getIn(['data', 'author']),
        content: props.entry.getIn(['data', 'body']),
        description: props.entry.getIn(['data', 'description']),
        slug: props.entry.getIn(['data', 'slug']),
      }}
    />
  )
}