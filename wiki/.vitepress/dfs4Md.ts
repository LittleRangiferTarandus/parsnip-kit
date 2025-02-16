import fs from 'fs'
import { DefaultTheme } from 'vitepress'

const dfs = (files, prefix: string[], container: any[], titleMap: Record<string, string>) => {
  files.forEach(file => {
    if (file === '.vitepress' || file === 'index.md') {
      return
    }
    const fullPath = prefix.join('/') + `/${file}`
    if (fs.statSync(fullPath).isDirectory()) {
      const curFiles = fs.readdirSync(fullPath)
      prefix.push(file)
      const curContainer = []
      container.push({
        text: file, items: curContainer, collapsible: true, collapsed: false
      })
      dfs(curFiles, prefix, curContainer, titleMap)
      prefix.pop()
    } else {
      const [fileName, ext] = file.split('.')
      if (ext !== 'md') {
        return
      }
      container.push({
        text: titleMap[fileName] || fileName, link: '/' + prefix.slice(1).join('/') + `/${fileName}`
      })
    }
  })
}

export const dfs4Md = (lang: string, titleMap: Record<string, string>) => {
  const ans: DefaultTheme.Sidebar = []
  const files = fs.readdirSync('wiki/' + lang)
  dfs(files, ['wiki', lang], ans, titleMap)
  return ans
}