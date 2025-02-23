import { capitalize } from './capitalize'
import { splitToWords } from './splitToWords'

/**
 * @zh 把字符串转换到标题命名，单词之间用空格间隔，首字母大写。
 * @en Convert the string to Title Case, with words separated by spaces and each word capitalized.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @version 0.0.1
 * @example
 * ```ts
 * import { titleCase } from 'parsnip-kit'
 *
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
