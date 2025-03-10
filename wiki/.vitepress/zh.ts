import { defineConfig } from 'vitepress'
import { dfs4Md } from './dfs4Md'

const titleMap = {
  'starting': '快速开始',
  'guide': '开始',
  'intro': '简介',
}
const additionMap = {
  'string': '字符串',
  'typed': '类型检查',
  'array': '数组',
  'number': '数字',
  'common': '通用',
  'statistic': '统计',
  'object': '对象',
  'random': '随机',
  'function': '函数',
  'async': '异步'
}

const sidebar = dfs4Md('zh', titleMap, additionMap)

export default defineConfig({
  title: "Parsnip-Kit 文档",
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh' },
      { text: '文档', link: '/zh/guide/intro' }
    ],
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' }
    ]
  }
})
