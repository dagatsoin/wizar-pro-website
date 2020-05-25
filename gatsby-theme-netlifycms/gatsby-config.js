const path = require('path')

/**
 * Options:
 * - source folders
 */
module.exports = ({

}) => ({
  plugins: [
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../pro/static/images`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../pro/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../pro/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../pro/content/modules`,
        name: 'modules',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-netlify-paths',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
    }
  ],
})