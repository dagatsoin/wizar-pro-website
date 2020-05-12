const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/")
      }
    }
  })
}

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
            fileAbsolutePath
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

      const posts = result.data.allMarkdownRemark.edges.map(edge => edge.node)
      const component = path.resolve(`src/components/blog/Blog.tsx`)

      posts
        .filter(isBlog)
        .forEach(node => {
          createPage({
            path: node.fields.slug,
            component,
            context: {
              id: node.id,
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
    const type = getType(node)
    if (type) {
      const path = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value: `/${type}${path}`
      })
    }
  }
} 

exports.onCreateNode = nodeContext => {
  createNodeFieldMarkdownRemark(nodeContext)
}

function getType(node) {
  if (isPage(node)) {
    return 'page'
  } else if (isBlog(node)) {
    return 'blog'
  }
}

function isBlog(node) {
  return node.fileAbsolutePath.includes('/blog/')
}

function isPage(node) {
  return node.fileAbsolutePath.includes('/pages/')
}