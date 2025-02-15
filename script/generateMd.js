import fs from 'fs'
import { fileURLToPath } from 'url'
import { jsdocToMD } from './jsdoc2Md.js'

function generateMD() {
  const examplePath = fileURLToPath(new URL('../packages', import.meta.url))
  const docsPath = fileURLToPath(new URL('../docs', import.meta.url))
  const exampleFiles = fs.readdirSync(examplePath)

  const dfs = (fileNames, prefixPath = []) => {
    fileNames.forEach((file) => {
      const [fileName, extname] = file.split('.')
      const fullPath = `${
        examplePath
      }/${
        prefixPath.join('/')
      }${
        prefixPath.length ? '/' : ''
      }${file}`
      if (fs.statSync(fullPath).isDirectory()) {
        const nextFileNames = fs.readdirSync(fullPath)
        prefixPath.push(file)
        dfs(nextFileNames, prefixPath)
        prefixPath.pop()
      } else {
        const input = fs.readFileSync(fullPath, 'utf-8')
        const output = jsdocToMD({ input, extname })
        
        if (!output) {
          return
        }
    
        const dirPath = `${
          docsPath
        }/${
          prefixPath.join('/')
        }`
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath)
        }
        fs.writeFileSync(`${
          dirPath
          }/${fileName}.md`, output
        )
      }
    })
  }

  dfs(exampleFiles)
}

generateMD()
