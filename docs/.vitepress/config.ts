import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'WuElementPlus组件文档',
  description: '基于Element-plus组件封装使用',
  lang: 'cn-ZH',
  base: '/wu-element-plus/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'WuElementPlus组件文档',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wukingbow/wu-element-plus' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/WuButton/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/Wukingbow/wu-element-plus',
      },
      {
        text: 'Gitee码云地址',
        link: 'https://gitee.com/wujinbao/wu-element-plus',
      },
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/weixin_44384778' },
        ],
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: 'Button组件', link: '/components/WuButton/base.md' },
            { text: 'Tabs组件', link: '/components/WuTabs/base.md' },
          ],
        },
        {
          text: '复杂组件',
          items: [
            { text: 'Chart图表组件', link: '/components/WuChart/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
