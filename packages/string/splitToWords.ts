const regExp = /[-_\s]|(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|(\d+)/

/**
 * @zh 把用于命名的字符串拆分为单词。
 * @en Split the string used for naming into individual words.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string[]}
 * @example
 * ```ts
 * import { splitToWords } from 'parsnip-kit'
 * 
 * splitToWords('-_i need 123XmlHTTPRequest -_') // ['i', 'need', '123', 'Xml', 'HTTP', 'Request']
 * ```
 */
export function splitToWords(arg: string): string[] {
  return arg.split(regExp).filter(Boolean)
}
