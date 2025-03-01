import { defineConfig } from 'vitepress'
import { dfs4Md } from './dfs4Md'

const titleMap = {
  'starting': 'Quickly Starting'
}
const sidebar = dfs4Md('en', titleMap)

export default defineConfig({
  title: "Parsnip-Kit wiki",
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en' },
      { text: 'Doc', link: '/en/guide/starting' }
    ],
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' }
    ]
  }
})
