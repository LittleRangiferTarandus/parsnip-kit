import { defineConfig } from 'vitepress'
import { dfs4Md } from './dfs4Md'

const titleMap = {
  'starting': '快速开始'
}

const sidebar = dfs4Md('zh', titleMap)

export default defineConfig({
  title: "Parsnip-Kit 文档",
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh' },
      { text: '文档', link: '/zh/starting' }
    ],
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' }
    ]
  }
})
