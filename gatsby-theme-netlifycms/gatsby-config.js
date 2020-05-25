const path = require('path')

/**
 * Options:
 * - contentFolders: Array<{
 *  name: string // the collection name
 *  folder: string // absolute path where are stored the MD files.
 * }>
 * - uploadFolder: string // the location where uploaded assets are stored
 */
module.exports = ({ useDefault = true, contentFolders, uploadFolder }) => {
  const config = {}
  if (useDefault) {
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
  } else {
    if (contentFolders) {
      config.plugins = contentFolders.map(options => ({
        resolve: 'gatsby-source-filesystem',
        options,
      }))
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
  }

  config.plugins = [
    ...config.plugins,
   /*  {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-plugin-netlify-paths'],
      },
    }, */
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
  ]

  return config
}
