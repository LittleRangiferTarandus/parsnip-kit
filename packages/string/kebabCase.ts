import { splitToWords } from './splitToWords'

/**
 * @zh 把字符串转换到短横线命名。
 * @en Convert the string to kebab-case.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @version 0.0.1
 * @example
 * ```ts
 * import { kebabCase } from 'parsnip-kit'
 *
 * kebabCase('HelloWorld') // 'hello-world'
 * kebabCase('helloWorld') // 'hello-world'
 * kebabCase('hello-world') // 'hello-world'
 * kebabCase('hello_world') // 'hello-world'
 * kebabCase('HELLO_WORLD') // 'hello-world'
 * kebabCase('Hello World') // 'hello-world'
 * kebabCase('-_HELLO World -_') // 'hello-world'
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
