import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Lostar的数字花园",
  description: "记录、思考、分享",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.png' ,// 表示/public/avartar.png

    nav: [
      { text: '首页', link: '/' },
      { text: '注意力周报', link: '/docs/attention/' }
    ],

    sidebar: {
      '/docs/attention': [
        {        
          text: '注意力记录',
          items: [
          ]
        }

      ]

    },
    footer: {
      copyright: 'Copyright © 2024-Now Lostar',
      message: 'Power By <a href="https://vitepress.dev/zh/">VitePress</a>',
    },

    sidebarMenuLabel: "目录",
    returnToTopLabel: "回到开头",
    outline: [3,4],
    outlineTitle: '当前页面',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lostar96/lostar96.github.io' }
    ],
  }
})
