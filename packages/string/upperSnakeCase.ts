import { splitToWords } from '../../script/string/splitToWords'

/**
 * {"zh": "把字符串转换到大写蛇形命名。", "en": "Convert the string to UPPERCASE_SNAKE_CASE."}
 * @param {string} arg {"zh": "待转换的字符串", "en": "The string to be converted."}
 * @returns {string}
 * @example
 * ```ts
 * upperSnakeCase('HelloWorld') // 'HELLO_WORLD'
 * upperSnakeCase('helloWorld') // 'HELLO_WORLD'
 * upperSnakeCase('hello-world') // 'HELLO_WORLD'
 * upperSnakeCase('hello_world') // 'HELLO_WORLD'
 * upperSnakeCase('HELLO_WORLD') // 'HELLO_WORLD'
 * upperSnakeCase('Hello World') // 'HELLO_WORLD'
 * upperSnakeCase('-_HELLO World -_') // 'HELLO_WORLD'
 * ```
 */
export function upperSnakeCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += words[i].toUpperCase() + (i < len - 1 ? '_' : '')
  }
  return ans
}
