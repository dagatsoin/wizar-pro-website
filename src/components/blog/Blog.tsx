import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { BlogNode } from '~/types/blog'
import { Layout, Markdown, Title, View } from '..'
import { Image } from '../image'
import { Paragraph } from '../markdown/Paragraph'
import { ImageAttribute } from '~/types/ImageAttribute'

/**
 * @credits https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149#gistcomment-2659294
 */
function toKebabCase(s: string): string {
  return s
    .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, '-') // replace all spaces and low dash
    .toLowerCase() // convert to lower case
}

export default function Blog({
  data: {
    allMarkdownRemark: { nodes },
  },
}: {
  data: { allMarkdownRemark: { nodes: BlogNode[] } }
}) {
  const blog = nodes[0]
  const { frontmatter } = blog
  const { title, description, tags } = frontmatter

  return (
    <Layout>
      <Helmet
        title={`${title} | Wizar - Jeu vidéo d'exploration touristique.`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: tags },
        ]}
      />
      {blog.frontmatter.backgroundImage && (
          <Image src={blog.frontmatter.backgroundImage as ImageAttribute} />
        )}
      <View style={{margin: 16}}>
        <Title.h2>{blog.frontmatter.title}</Title.h2>
        {blog.frontmatter.subhead && (
          <Title.h3>{blog.frontmatter.subhead}</Title.h3>
        )}
        <Paragraph>
          {`${new Date(blog.frontmatter.date).toLocaleDateString('fr-Fr')} - ${
            blog.frontmatter.author
          }`}
        </Paragraph>
        <Markdown input={blog.rawMarkdownBody} />
      </View>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMarkdownRemark(filter: { id: { eq: $id } }) {
      nodes {
        ...Blog
      }
      edges {
        node {
          id
        }
      }
    }
  }
`
