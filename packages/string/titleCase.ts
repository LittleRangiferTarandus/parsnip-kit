import { capitalize } from './capitalize'
import { splitToWords } from './splitToWords'

/**
 * 把字符串转换到标题命名，单词之间用空格间隔，首字母大写。
 * @param {string} - 待转换的字符串
 * @returns {string}
 * @example
 * ```ts
 * titleCase('HelloWorld') // 'Hello World'
 * titleCase('helloWorld') // 'Hello World'
 * titleCase('hello-world') // 'Hello World'
 * titleCase('hello_world') // 'Hello World'
 * titleCase('HELLO_WORLD') // 'Hello World'
 * titleCase('Hello World') // 'Hello World'
 * titleCase('-_HELLO World -_') // 'Hello World'
 * ```
 */
export function titleCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += capitalize(words[i]) + (i < len - 1 ? ' ' : '')
  }
  return ans
}
