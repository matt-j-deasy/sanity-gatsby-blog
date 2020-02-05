export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3b039dcc5644b69f579e5e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qviyss74',
                  apiId: '5a722d8f-c9d1-4100-b1ba-70feacfcd71b'
                },
                {
                  buildHookId: '5e3b039d8d6adf04b5edf79b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d36jzxvz',
                  apiId: 'cf36ee9e-13bc-4fbf-8099-c1ebb842956b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt-j-deasy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d36jzxvz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
