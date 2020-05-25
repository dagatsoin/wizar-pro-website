const path = require('path')

/**
 * Options:
 * - contentFolders: Array<{
 *  name: string // the collection name
 *  folder: string // absolute path where are stored the MD files.
 * }>
 * - uploadFolder: string // the location where uploaded assets are stored
 */
module.exports = ({ contentFolders, uploadFolder, cmsConfigPath }) => {
  const config = {}
  if (contentFolders) {
    config.plugins = contentFolders.map(options => ({
      resolve: 'gatsby-source-filesystem',
      options,
    }))
  } else {
    config.plugins = [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'blog',
          path: `${__dirname}/defaultContent/blog`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'modules',
          path: `${__dirname}/defaultContent/modules`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: `${__dirname}/defaultContent/pages`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/static/images`,
          name: 'uploads',
        },
      },
    ]
  }
  
  if (uploadFolder) {
    config.plugins = [
      ...config.plugins,
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: uploadFolder,
          name: 'uploads',
        },
      },
    ]
  }

  config.plugins = [
    ...config.plugins,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: cmsConfigPath
    },
  ]

  return config
}
