import { splitToWords } from './splitToWords'

/**
 * 把字符串转换到蛇形命名。
 * @param {string} - 待转换的字符串
 * @returns {string}
 * @example
 * ```ts
 * snakeCase('HelloWorld') // 'hello_world'
 * snakeCase('helloWorld') // 'hello_world'
 * snakeCase('hello-world') // 'hello_world'
 * snakeCase('hello_world') // 'hello_world'
 * snakeCase('HELLO_WORLD') // 'hello_world'
 * snakeCase('Hello World') // 'hello_world'
 * snakeCase('-_HELLO World -_') // 'hello_world'
 * ```
 */
export function snakeCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += words[i].toLowerCase() + (i < len - 1 ? '_' : '')
  }
  return ans
}
