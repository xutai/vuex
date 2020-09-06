module.exports = {



    // base
    title: 'Vuex',
    description: 'Vuex Docs',
    // host: '0.0.0.0',
    // port: 8080
    // temp: 
    // dest
    // locales
    // shouldPrefetch
    // cache
    // extraWatchFiles
    // patterns


    configureWebpack: {
        resolve: {
            alias: {
                '@': '/'
            }
        }
    },


    theme: undefined,
    // theme: 'vuepress-theme-xx',
    themeConfig: {
        navbar: true,
        logo: '/assets/img/logo.png',
        nav: [
            // { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            // { text: 'External', link: 'https://baidu.com' }
        ],
        sidebar: [
            {
                title: 'Introduction',   // required
                path: '/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    {
                        title: 'What is Vuex?',
                        path: '/'
                    },
                    {
                        title: 'What is Vuex? note',
                        path: '/README-note'
                    },
                    {
                        title: 'Installation',
                        path: '/installation'
                    },
                    {
                        title: 'Installation note',
                        path: '/installation-note'
                    },
                    {
                        title: 'Getting Started',
                        path: '/guide/'
                    },
                    {
                        title: 'Getting Started note',
                        path: '/guide/README-note'
                    }
                ]
            },
            {
                title: 'Core Concepts',   // required
                path: '/guide/state',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    {
                        title: 'state',
                        path: '/guide/state'
                    },
                    {
                        title: 'state note',
                        path: '/guide/state-note'
                    },
                    {
                        title: 'getters',
                        path: '/guide/getters'
                    },
                    {
                        title: 'getters note',
                        path: '/guide/getters-note'
                    },
                    {
                        title: 'mutations',
                        path: '/guide/mutations'
                    },
                    {
                        title: 'mutations note',
                        path: '/guide/mutations-note'
                    },
                    {
                        title: 'actions',
                        path: '/guide/actions'
                    },
                    {
                        title: 'actions note',
                        path: '/guide/actions-note'
                    },
                    {
                        title: 'modules',
                        path: '/guide/modules'
                    },
                    {
                        title: 'modules note',
                        path: '/guide/modules-note'
                    }
                ]
            },
            // {
            //     title: 'Core Concepts',
            //     children: [
            //         '/guide/state',
            //         '/guide/getters',
            //     ],
            //     initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
            // },
            // {
            //     title: 'Advanced',
            //     children: [ /* ... */],
            //     initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
            // },
            // '/',
            // '/guide/',
            // ['/guide/', 'Explicit link text']
        ]
    },





    // head: [
    //     ['link', { rel: 'icon', href: '/logo.png' }],
    //     ['guide', { href: '/guide/' }]
    // ],

    // markdown: {
    //     anchor: {
    //         permalink: true,
    //         permalinkBefore: true,
    //         permalinkSymbol: '#'
    //     },
    //     externalLinks: {
    //         target: '_blank', rel: 'noopener noreferrer'
    //     }
    // },
    // // permalink: '/:year/:month/:day/:slug'
}