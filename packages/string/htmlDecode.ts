const decodeMap: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#34;': '"',
  '&#39;': "'",
}
/**
 * {"zh": "将字符串进行 HTML 解码，将特定的 HTML 实体（如 `&lt;`、`&gt;`、`&amp;`）还原为普通字符（如 <、>、&）。","en":"Decode the string from HTML entities, converting specific HTML entities (such as `&lt;`, `&gt;`, `&amp;`) back to their corresponding plain characters (e.g., <, >, &)."}
 * @param {string} arg {"zh": "待转换的字符串", "en": "The string to be converted."}
 * @returns {string}
 * @example
 * ```ts
 * htmlDecode('&#39;test&#39;') // '\'test\''
 * htmlDecode('&quot;test&quot;') // '"test"'
 * htmlDecode('&lt;img/&gt;') // '<img/>'
 * htmlDecode('talk &amp; code') // 'talk & code'
 * ```
 */
export function htmlDecode(arg: string): string {
  return arg.replace(/&lt;|&gt;|&amp;|&quot;|&#39;|&#34;/g, (match) => {
    return decodeMap[match]
  })
}
