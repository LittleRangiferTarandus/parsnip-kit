<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import { inBrowser } from 'vitepress'
  if (inBrowser) {
    const lang = navigator.language
    document.cookie = `nf_lang=${lang}; path=/`
  }
</script>

<template>
  <DefaultTheme.Layout />
</template>