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

const createNodeFieldMarkdownRemark = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const type = getType(node)
    if (type) {
      const path = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value: type === 'page' ? `${path}` : `/${type}${path}`
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