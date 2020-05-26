## gatsby-plugin-netlify-cms-admin

A plugin to integrate Netlify to Gatsby with some default collections: blog, page, module (like Wordpress widget) which can
fit the majority of website needs.

Only usable on monorepo for now, did not test as NPM package.

## Default config
By default, the plugin will generate a config.yml to configure the admin in test mode.

```
backend:
  name: test-repo

publish_mode: editorial_workflow

media_folder: static/images # Media files will be stored in the repo under static/images
public_folder: /images # The src attribute for uploaded media will begin with /images

collections:
  - name: modules
    label: Modules
    folder: content/modules
    create: true
    fields:
      - label: Type
        name: type
        widget: hidden
        default: module

      - label: Layout # Module layout (hero takes the whole width)
        name: layout
        widget: select
        options: [hero, horizontal, phone-screenshot, vertical, vertical-small]
        default: horizontal

      - label: Elevation # Module visual elevation as specified in material design
        name: elevation
        widget: number
        valueType: int
        min: 0
        max: 24
        required: false

      - label: CTA # The Call To Action configuration. 
        name: cta
        widget: object
        required: false
        fields:
          - label: Label
            name: label
            required: false
            widget: string

          - label: Palette
            name: palette
            widget: select
            options: [primary, secondary]
            default: primary

      - label: Title
        name: title
        widget: string

      - label: Show title
        name: isTitleDisplayed
        widget: boolean
        default: true

      - label: Hn level
        name: titleLevel
        widget: number
        default: 1
        valueType: int
        min: 1
        max: 6

      - label: Featured image #The image of the module. Can be a title in a Header for SEO purpose.
        name: image
        widget: object
        required: false
        fields:
          - label: Featured Image
            name: src
            widget: image
            media_library:
              config:
                multiple: false

          - label: Hidden header content
            name: hiddenHeaderContent
            widget: string
            required: false

          - label: Header level
            name: hiddenHeaderLevel
            widget: select
            options: [1, 2, 3, 4, 5, 6]
            default: 1
        
      - label: Contrast text
        name: contrastText
        widget: boolean
        default: false
        
      - label: Text
        name: body
        widget: markdown
        required: false

      - label: Background Image
        name: backgroundImage
        widget: image
        required: false

  - name: pages
    label: Pages
    folder: content/pages
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    fields:
      - label: Menu item
        name: menuItem
        widget: string
        required: false
      
      - label: Is the home page
        name: is_home
        widget: boolean
        default: false
      
      - label: Meta keywords
        name: metaKeywords
        widget: list
        
      - label: Title
        name: title
        widget: string

      - label: Publish Date
        name: date
        widget: datetime

      - label: Meta description
        name: metaDescription
        widget: text

      - label: Body
        name: body
        widget: markdown

      - label: Hero
        name: hero
        required: false
        widget: relation
        collection: modules
        searchFields: [title]
        valueField: title
        displayFields: [title]

      - label: Section list
        name: section_list
        required: false
        widget: list
        fields:
          - label: Title
            name: title
            widget: string
            required: false

          - label: Layout
            name: layout
            widget: select
            options: [horizontal, vertical, carousel]
            default: horizontal

          - label: Module list
            name: modules
            widget: list
            field:
              label: Module
              name: module
              widget: relation
              collection: modules
              searchFields: [title]
              valueField: title
              displayFields: [title]
  
  - name: blog
    label: Blog
    folder: content/blog
    create: true
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    fields:
      - label: Meta keywords
        name: metaKeywords
        widget: list
        
      - label: Tags
        name: tags
        widget: list
        
      - label: Title
        name: title
        widget: string

      - label: Publish Date
        name: date
        widget: datetime

      - label: Meta description
        name: metaDescription
        widget: text

      - label: Body
        name: body
        widget: markdown

      - label: Background Image
        name: backgroundImage
        widget: image
        required: false

      - label: Hero
        name: hero
        required: false
        widget: relation
        collection: modules
        searchFields: [title]
        valueField: title
        displayFields: [title]

      - label: Section list
        name: section_list
        required: false
        widget: list
        fields:
          - label: Title
            name: title
            widget: string
            required: false

          - label: Layout
            name: layout
            widget: select
            options: [horizontal, vertical, carousel]

          - label: Module list
            name: modules
            widget: list
            field:
              label: Module
              name: module
              widget: relation
              collection: modules
              searchFields: [title]
              valueField: title
              displayFields: [title]

```

## Add your own config.yml
You can write your own config.yml like in [normal Netlify CMS context](https://www.netlifycms.org/docs/add-to-your-site/#configuration). Put it in your site folder and
Configure the plugin with `cmsConfigPath: path.resolve(__dirname, 'config.yml')` (see below)

## Customize the admin
You can add a cms.js file to customize your admin panel and preview like in [normal Netlify CMS context](https://www.netlifycms.org/docs/customization/#registerpreviewtemplate).
Configure the plugin with `modulePath: path.resolve(__dirname, 'src/cms/cms.js')` (see below)

## Configuration
By default, the configuration is in test-repo mode, that means that no data will be written to disk.
You need, to follow the Netlify documentation to configure your account with a repo provider.
Then, configure the plugin in `gatsby-config.js`

```
plugins: [
  {
    resolve: 'gatsby-plugin-netlify-cms-admin',
    options: {
      // (optional) The asolute path to your config.yml
      cmsConfigPath: path.resolve(__dirname, 'config.yml'),
      // (optional) The absolute path to the admin cms.js custom file
      modulePath: path.resolve(__dirname, 'src/cms/cms.js'),
      // (mandatory) Map you content folders with the collection names.
      // It will be used to source the MD files.
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
      // (mandatory) Set the folder path where netlify will store uploaded assets.
      // It must be the same as the `media_folder` in the config.yml.
      // It will be used to source the assets files.
      uploadFolder: path.resolve(__dirname, 'static/images'),
      
      // (optional) Pass any revelant plugins needed
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