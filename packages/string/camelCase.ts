import { splitToWords } from './splitToWords'

/**
 * 把字符串转换到小驼峰命名。
 * @param {string} - 待转换的字符串
 * @returns {string}
 * @example
 * ```ts
 * camelCase('HelloWorld') // 'helloWorld'
 * camelCase('helloWorld') // 'helloWorld'
 * camelCase('hello-world') // 'helloWorld'
 * camelCase('hello_world') // 'helloWorld'
 * camelCase('HELLO_WORLD') // 'helloWorld'
 * camelCase('Hello World') // 'helloWorld'
 * camelCase('-_HELLO World -_') // 'helloWorld'
 * ```
 */
export function camelCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans +=
      i > 0
        ? words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        : words[i].toLowerCase()
  }
  return ans
}
