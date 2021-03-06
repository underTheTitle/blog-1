// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Perade',
  siteDescription: 'Slowly, but steadily',
  siteUrl: 'https://perade.github.io',
  pathPrefix: '/blog',
  titleTemplate: `%s | perade`,

  templates: {
    Post: '/:path',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Gist'],
            }]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-155704951-1',
      },
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
