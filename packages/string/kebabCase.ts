import { splitToWords } from './splitToWords'

/**
 * 把字符串转换到短横线命名。
 * @param {string} - 待转换的字符串
 * @returns {string}
 * @example
 * ```ts
 * camelCase('HelloWorld') // 'hello-world'
 * ```
 */
export function kebabCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += words[i].toLowerCase() + (i < len - 1 ? '-' : '')
  }
  return ans
}
