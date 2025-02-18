import fs from 'fs'

const dfs = (files, prefix: string[], container: any[], titleMap: Record<string, string>, additionMap?: Record<string, string>) => {
  files.forEach(file => {
    if (file === '.vitepress' || file === 'index.md') {
      return
    }
    const fullPath = prefix.join('/') + `/${file}`
    if (fs.statSync(fullPath).isDirectory()) {
      const curFiles = fs.readdirSync(fullPath)
      prefix.push(file)
      const curContainer = []
      const add = additionMap?.[file]
      
      container.push({
        key: file,
        text: titleMap[file] || (file.charAt(0).toUpperCase() + file.slice(1)) + (add ? `  ${add}` : ''),
        items: curContainer,
        collapsible: true,
        collapsed: false
      })
      dfs(curFiles, prefix, curContainer, titleMap)
      prefix.pop()
    } else {
      const [fileName, ext] = file.split('.')
      if (ext !== 'md') {
        return
      }
      const add = additionMap?.[fileName]
      container.push({
        text: titleMap[fileName] || fileName + (add ? `  ${add}` : ''),
        link: '/' + prefix.slice(1).join('/') + `/${fileName}`,
        key: fileName
      })
    }
  })
}

const order = [
  'guide',
  'array',
  'object',
  'function',
  'async',
  'string',
  'typed',
  'random',
  'math'
]

export const dfs4Md = (lang: string, titleMap: Record<string, string>, additionMap?: Record<string, string>) => {
  const ans: any[] = []
  const files = fs.readdirSync('wiki/' + lang)
  dfs(files, ['wiki', lang], ans, titleMap, additionMap)
  const orderedAns: any[] = []
  order.forEach(e => {
    const entity = ans.find(item => item.key?.toLowerCase() === e)
    if (entity) {
      orderedAns.push(entity)
    }
  })
  return orderedAns
}