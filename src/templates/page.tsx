import { graphql, Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { HTMLContent, Layout } from '../../src/components'

/**
 * @credits https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149#gistcomment-2659294
 */
function toKebabCase(s: string): string {
  return s
  .replace(/([a-z])([A-Z])/g, '$1-$2')    // get all lowercase letters that are near to uppercase ones
  .replace(/[\s_]+/g, '-')                // replace all spaces and low dash
  .toLowerCase()                          // convert to lower case
}

export default function Template({
  data,
}: {
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        title: string
        description: string
        date: string
        tags: string[]
      }
    }
  }
}) {
  const { html, frontmatter } = data.markdownRemark
  const { title, description, tags } = frontmatter

  return (
    <Layout>
      <section className="section">
        <Helmet titleTemplate="%s | Blog">
          <title>{`${title}`}</title>
          <meta
            name="description"
            content={`${description}`}
          />
        </Helmet>
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <p>{description}</p>
              <HTMLContent content={html}/>
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${toKebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
      }
    }
  }
`
