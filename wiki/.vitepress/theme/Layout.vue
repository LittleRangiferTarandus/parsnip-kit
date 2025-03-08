<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import { inBrowser } from 'vitepress'
  if (inBrowser) {
    const lang = navigator.language
    document.cookie = `nf_lang=${lang}; path=/`
    if (['/', '/index', '', '/index/'].includes(location.pathname)) {
      const langTag = lang === 'zh-CN' ? 'zh' : lang === 'ja' ? 'jp' : 'en'
      const aTag = document.createElement('a')
        aTag.href = langTag
        document.body.appendChild(aTag)
        aTag.click()
    }
  }
</script>

<template>
  <DefaultTheme.Layout />
</template>