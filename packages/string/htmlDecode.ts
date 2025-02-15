const decodeMap: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#34;': '"',
  '&#39;': "'",
}
/**
 * 将字符串进行 HTML 解码，将特定的 HTML 实体（如 &\lt;、&\gt;、&\amp;）还原为普通字符（如 <、>、&）。
 * @param {string} - 待转换的字符串
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
