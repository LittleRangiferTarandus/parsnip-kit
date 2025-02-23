/**
 * @zh 把字符串变成首字母大写的形式。
 * @en Capitalize the first letter of the string.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @version 0.0.1
 * @example
 * ```ts
 * import { capitalize } from 'parsnip-kit'
 *
 * capitalize('HelloWorld') // 'Helloworld'
 * ```
 */

export function capitalize(arg: string): string {
  return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase()
}
