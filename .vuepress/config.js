module.exports = {
    title: 'ShibaInu\'s Blog',
    description: '記錄各種事情的vuepress-blog',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: "shortcut icon", href: "/assets/icon/favicon.ico"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/icon/favicon-16x16.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/icon/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/icon/favicon-96x96.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/icon/favicon-180x180.png"}]
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        logo: '/assets/icon/logo.png',
        authorAvatar: '/assets/icon/logo.png',
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'RSS', link: '/rss.xml', icon: 'reco-bokeyuan' }
        ],
        noFoundPageByTencent: false
    },
    plugins: {
        "@vuepress-reco/vuepress-plugin-rss": {
            site_url: 'https://blog.dshibainu.com'
        }
    }
}