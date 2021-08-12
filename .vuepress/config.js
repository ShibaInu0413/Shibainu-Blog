module.exports = {
    title: 'ShibaInu\'s Blog',
    description: '\n',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'shortcut icon', href: '/assets/icon/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/favicon-180x180.png' }],

        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }],
        ['script', { src: 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js' }],

        ['script', { 'data-ad-client':'ca-pub-2021556311985834', async: true, src:'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
    ],
    theme: 'reco',
    themeConfig: {
        author: 'ShibaInu',
        type: 'blog',
        logo: '/assets/icon/logo.png',
        authorAvatar: '/assets/icon/logo.png',
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'RSS', link: 'https://dshibainu.com/rss.xml', icon: 'reco-rss' }
        ],
        noFoundPageByTencent: false,
        friendLink: []
    },
    plugins: {
        '@vuepress-reco/vuepress-plugin-rss': {
            site_url: 'https://dshibainu.com'
        },
        'dynamic-title': {
            showText: '(ฅ>ω<*ฅ)欢迎回来！',
            hideText: '( ๑ˊ•̥▵•)੭₎₎不要走呀！',
            recoverTime: 2000,
        },
        'cursor-effects': {
            size: 2, // size of the particle, default: 2
            shape: ['star'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }
    }
}