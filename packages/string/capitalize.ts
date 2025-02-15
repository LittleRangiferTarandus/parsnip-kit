/**
 * 把单词变成首字母大写的形式。
 * @param {string} - 待转换的字符串
 * @returns {string}
 * @example
 * ```ts
 * capitalize('HelloWorld') // 'Helloworld'
 * ```
 */
export function capitalize(arg: string): string {
  return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase()
}
