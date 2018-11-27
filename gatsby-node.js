const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges
      const component = path.resolve(`src/templates/page.tsx`)

      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component,
          context: {
            id,
          },
        })
      })
    })
    .catch(e => {
      console.error(e)
      return Promise.reject(e)
    })
}

const createNodeFieldMarkdownRemark = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateNode = nodeContext => {
  createNodeFieldMarkdownRemark(nodeContext)
}