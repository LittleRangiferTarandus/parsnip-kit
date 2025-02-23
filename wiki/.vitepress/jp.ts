import { defineConfig } from 'vitepress'
import { dfs4Md } from './dfs4Md'

const titleMap = {
  'starting': 'はじめに',
  'guide': '入門'
}
const additionMap = {
  'string': '文字列',
  'typed': '型チェック',
  'array': '配列',
  'number': '数値',
  'common': '共通',
  'statistic': '統計',
  'object': 'オブジェクト',
}

const sidebar = dfs4Md('jp', titleMap, additionMap)

export default defineConfig({
  title: "Parsnip-Kit wiki",
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/jp' },
      { text: 'ドキュメント', link: '/jp/guide/starting' }
    ],
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' }
    ]
  }
})
