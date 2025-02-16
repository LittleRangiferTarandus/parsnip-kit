import { splitToWords } from './splitToWords'

/**
 * {"zh": "把字符串转换到短横线命名。","en":"Convert the string to kebab-case."}
 * @param {string} arg {"zh": "待转换的字符串", "en": "The string to be converted."}
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
