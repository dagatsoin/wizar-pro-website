## gatsby-plugin-netlify-cms-admin

A plugin to integrate Netlify to Gatsby with some default collections: blog, page, module (like Wordpress widget) which can
fit the majority of website needs.

Only usable on monorepo for now, did not test as NPM package.

## Default config
By default

## Configuration
In `gatsby-config.js`

Add:
```
plugins: [
  {
    resolve: 'gatsby-plugin-netlify-cms-admin',
    options: {
      // The path to 
      cmsConfigPath: path.resolve(__dirname, 'config.yml'),
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
  }
]
```

## Limitations

I did not test as npm package yet. Maybe some paths won't be found.