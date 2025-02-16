const escapeMap: { [key: string]: string } = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}
/**
 * @zh 将字符串进行 HTML 编码，将特殊字符（如 <、>、&）转换为对应的 HTML 实体（如 `&lt;`、`&gt;`、`&amp;`），从而防止这些字符被浏览器错误解析为 HTML 标签的一部分。
 * @en Encode the string into HTML entities, converting special characters (such as <, >, &) to their corresponding HTML entities (e.g., `&lt;`, `&gt;`, `&amp;`). This prevents these characters from being mistakenly interpreted as part of HTML tags by the browser.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string}
 * @example
 * ```ts
 * import { htmlEncode } from 'parsnip-kit'
 * 
 * htmlEncode('\'test\'') // '&#39;test&#39;'
 * htmlEncode('"test"') // '&quot;test&quot;'
 * htmlEncode('<img/>') // '&lt;img/&gt;'
 * htmlEncode('talk & code') // 'talk &amp; code'
 * ```
 */
export function htmlEncode(arg: string): string {
  let result = ''
  for (let i = 0; i < arg.length; i++) {
    const char = arg[i]
    result += escapeMap[char] || char
  }
  return result
}
