const regExp = /[-_\s]|(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/

/**
 * 把用于命名的字符串拆分为单词。
 * @param {string} - 待转换的字符串
 * @returns {string[]}
 * @example
 * ```ts
 * splitToWords('-_i need XmlHTTPRequest -_') // ['i', 'need', 'Xml', 'HTTP', 'Request']
 * ```
 */
export function splitToWords(arg: string): string[] {
  return arg.split(regExp).filter(Boolean)
}
