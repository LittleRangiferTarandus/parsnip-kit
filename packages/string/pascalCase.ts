import { splitToWords } from './splitToWords'

/**
 * @zh 把字符串转换到大驼峰命名。
 * @en Convert the string to PascalCase (also known as UpperCamelCase).
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @example
 * ```ts
 * import { pascalCase } from 'parsnip-kit'
 * 
 * pascalCase('HelloWorld') // 'HelloWorld'
 * pascalCase('helloWorld') // 'HelloWorld'
 * pascalCase('hello-world') // 'HelloWorld'
 * pascalCase('hello_world') // 'HelloWorld'
 * pascalCase('HELLO_WORLD') // 'HelloWorld'
 * pascalCase('Hello World') // 'HelloWorld'
 * pascalCase('-_HELLO World -_') // 'HelloWorld'
 * ```
 */
export function pascalCase(arg: string): string {
  const words = splitToWords(arg)
  let ans = ''
  const len = words.length
  for (let i = 0; i < len; i++) {
    ans += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
  }
  return ans
}
