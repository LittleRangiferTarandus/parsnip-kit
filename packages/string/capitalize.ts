/**
 * {"zh":"把字符串变成首字母大写的形式。","en":"Capitalize the first letter of the string."}
 * @param {string} arg {"zh": "待转换的字符串", "en": "The string to be converted."}
 * @returns {string}
 * @example
 * ```ts
 * capitalize('HelloWorld') // 'Helloworld'
 * ```
 */
export function capitalize(arg: string): string {
  return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase()
}
