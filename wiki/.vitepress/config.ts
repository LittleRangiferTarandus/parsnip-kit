import { defineConfig } from 'vitepress'
import zh from './zh'
import en from './en'
import jp from './jp'

export default defineConfig({
  head: [
    [
      'link',
      { rel: 'icon', href: 'logo.svg' }
    ]
  ],
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleRangiferTarandus/parsnip-kit' }
    ],
    logo: '/logo.svg',
  },
  locales: {
    zh: { label: '中文', ...zh },
    en: { label: 'English', ...en },
    jp: { label: '日本語', ...jp },
  }
})
