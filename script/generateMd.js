import fs from 'fs'
import { fileURLToPath } from 'url'
import { jsdocToMD } from './jsdoc2Md.js'

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const merged = []
  for (const interval of intervals) {
    if(merged[merged.length - 1] && merged[merged.length - 1][1] >= interval[0]){
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
    } else {
      merged.push(interval)
    }
  }
  return merged
}

function calculateLineCoverage(coverageMap) {
  const statementMap = coverageMap.statementMap || {}
  const s = coverageMap.s || {}

  const interval = []
  const totalInterval = []

  Object.keys(statementMap).forEach(statementId => {
    const statement = statementMap[statementId]
    const startLine = statement.start.line
    const endLine = statement.end.line

    const executionCount = s[statementId] || 0

    totalInterval.push([startLine, endLine])
    if (executionCount > 0) {
      interval.push([startLine, endLine])
    }
  })

  const intervalMerged = mergeIntervals(interval)
  const totalIntervalMerged = mergeIntervals(totalInterval)
  
  const coveredLines = intervalMerged.reduce((pre, cur) => pre + cur[1] - cur[0] + 1, 0)
  const totalLines = totalIntervalMerged.reduce((pre, cur) => pre + cur[1] - cur[0] + 1, 0)

  const lineCoverage = (coveredLines / totalLines) * 100 || 0

  return lineCoverage.toFixed(2) + '%'
}

function generateMD(lang, testReport) {
  const examplePath = fileURLToPath(new URL('../packages', import.meta.url))
  const docsPath = fileURLToPath(new URL('../wiki' + (!lang ? '' : ('/' + lang)), import.meta.url))
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
        if (file.endsWith('.test.ts')) {
          return
        }
        const input = fs.readFileSync(fullPath, 'utf-8')
        let output = jsdocToMD({
          input,
          extname,
          lang,
          needContent: fullPath.includes('/common/')
        })
        
        if (!output) {
          return
        }
    
        const path = fullPath.replace(/\//g, '\\')
        const fileData = testReport.coverageMap[path]

        if (fileData && !fullPath.includes('/common/')) {
          const statement = `${(Object.keys(fileData.s).filter(key => fileData.s[key] > 0).length / Object.keys(fileData.statementMap).length * 100).toFixed(2)}%`
          const branch = `${(Object.keys(fileData.b).filter(key => fileData.b[key][0] > 0).length / Object.keys(fileData.branchMap).length * 100).toFixed(2)}%`
          const fn = `${(Object.keys(fileData.f).filter(key => fileData.f[key] > 0).length / Object.keys(fileData.fnMap).length * 100).toFixed(2)}%`
          const line = calculateLineCoverage(fileData)

          output.replace('\r\n', '\n')
          const idx = output.indexOf('\n')
          output = output.slice(0, idx) + `\n![Static Badge](https://img.shields.io/badge/Statement%20Coverage-${
            statement
          }-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-${
            branch
          }-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-${
            fn
          }-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-${
            line
          }-brightgreen)` + output.slice(idx)
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

['en', 'zh'].forEach(item => {
  const data = JSON.parse(fs.readFileSync('coverage/coverage.json'))
  generateMD(item, data)
})
