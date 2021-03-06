const path = require('path')
const { NODE_ENV } = process.env;

module.exports = {
  siteMetadata: {
    siteUrl: 'https://world.wizar.world',
    brandLogoUrl: 'header_logo.png',
  },
  plugins: [
    'gatsby-theme-warfog',
    {
      resolve: 'gatsby-plugin-netlify-cms-admin',
      options: {
        adminConfig: {
          backend: { name: "git-gateway" },
          publish_mode: "editorial_workflow"
        },
        monorepoFolder: "world",
        modulePath: path.resolve(__dirname, 'src/cms/cms.js'),
        contentFolders: [{
          name: "blog",
          path: path.resolve(__dirname, 'content/blog')
        }, {
          name: "modules",
          path: path.resolve(__dirname, 'content/modules')
        }, {
          name: "pages",
          path: path.resolve(__dirname, 'content/pages')
        }],
        uploadFolder: path.resolve(__dirname, 'static/images'),
        plugins: [
          {
            resolve: `gatsby-plugin-typescript`,
            options: {
              isTSX: true, // defaults to false
              allExtensions: true, // defaults to false
            },
          },
          {
            // Needed for resolve alias module in Netlify cms.js
            resolve: `gatsby-plugin-alias-imports`,
            options: {
              alias: {
                "~": path.resolve(__dirname, 'src'),
              },
              extensions: []
            }
          },
        ]
      },
    },
    {
      // Needed for resolve alias module in Netlify cms.js
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~": path.resolve(__dirname, 'src'),
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167419488-2",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NODE_ENV,
        env: {
          production: {
           // policy: [{ userAgent: '*' }]
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    }
  ],
}