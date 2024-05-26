import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "胖大威的数字花园",
  description: "总是播种，常常期待，有时收获",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.png' ,// 表示/public/avartar.png

    nav: [
      { text: '首页', link: '/' },
      { text: '注意力周报', link: '/docs/attention/' },
      { text: '生活指南', link: '/docs/guide/' }
    ],

    sidebar: {
      '/docs/attention': [
        {        
          text: '往期',
          items: [
            { text: '注意力周报#010', link: '/docs/attention/report/attention_010.md' },
            { text: '注意力周报#009', link: '/docs/attention/report/attention_009.md' },
            { text: '注意力周报#008', link: '/docs/attention/report/attention_008.md' },
            { text: '注意力周报#007', link: '/docs/attention/report/attention_007.md' },
            { text: '注意力周报#006', link: '/docs/attention/report/attention_006.md' },
            { text: '注意力周报#005', link: '/docs/attention/report/attention_005.md' },
            { text: '注意力周报#004', link: '/docs/attention/report/attention_004.md' },
            { text: '注意力周报#003', link: '/docs/attention/report/attention_003.md' },
            { text: '注意力周报#002', link: '/docs/attention/report/attention_002.md' },
            { text: '注意力周报#001', link: '/docs/attention/report/attention_001.md' },
          ]
        }

      ],
      '/docs/guide': [
        {        
          text: '生活指南',
          items: [
            { 
              text: '摄影', 
              items:[
                { 
                  text: '设备', 
                  items:[
                    { text: '华为手机', link: '/docs/guide/photo/device_huawei.md' },
                  ]
                }
              ]
            },
          ]
        }

      ]
    },
    footer: {
      copyright: 'Copyright © 2024-Now 胖大威',
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
