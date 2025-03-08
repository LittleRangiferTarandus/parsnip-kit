import { defineConfig } from 'vitepress'
import zh from './zh'
import en from './en'
import jp from './jp'

export default defineConfig({
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
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
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭搜索'
                }
              }
            }
          },
          jp: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '関連結果が見つかりません',
                resetButtonTitle: '検索条件をクリア',
                footer: {
                  selectText: '選択',
                  navigateText: '切り替え',
                  closeText: '検索を閉じる'
                }
              }
            }
          }
        }
      }
    }
  },
  locales: {
    zh: { label: '中文', ...zh },
    en: { label: 'English', ...en },
    jp: { label: '日本語', ...jp },
  },
  base: '/parsnip-kit/'
})
