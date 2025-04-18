import { defineConfig } from 'vitepress'
import zh from './zh'
import en from './en'
import ja from './ja'

export default defineConfig({
  markdown: {
    toc: {
      level: [1]
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/parsnip-kit/logo.svg' }
    ]
  ],
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/parsnip-kit' }
    ],
    logo: '/logo.svg',
    search: {
      provider: 'local'
    }
  },
  locales: {
    zh: { label: '中文', ...zh },
    en: { label: 'English', ...en },
    ja: { label: '日本語', ...ja },
  },
  base: '/parsnip-kit/'
})
