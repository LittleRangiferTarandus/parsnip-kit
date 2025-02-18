import { splitToWords } from './splitToWords'

// prettier-ignore
{
/**
 * @zh 把字符串转换到短横线命名。
 * @en Convert the string to kebab-case.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @example
 * ```ts
 * import { camelCase } from 'parsnip-kit'
 * 
 * camelCase('HelloWorld') // 'hello-world'
 * camelCase('helloWorld') // 'hello-world'
 * camelCase('hello-world') // 'hello-world'
 * camelCase('hello_world') // 'hello-world'
 * camelCase('HELLO_WORLD') // 'hello-world'
 * camelCase('Hello World') // 'hello-world'
 * camelCase('-_HELLO World -_') // 'hello-world'
 * ```
 */
}

export function kebabCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += words[i].toLowerCase() + (i < len - 1 ? '-' : '')
  }
  return ans
}
