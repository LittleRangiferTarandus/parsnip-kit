/**
 * @zh 输入一个数字`num`，输出一个包含千分分隔符的字符串。
 * @en Input a number `num` and output a string with thousand separators.
 * @param {number} num @zh 要格式化的数字 @en The number to format
 * @returns {string}
 * @example
 * ```ts
 * import { thousandSeparator } from 'parsnip-kit'
 *
 * thousandSeparator(100) // '100'
 * thousandSeparator(1000) // '1,000'
 * thousandSeparator(10000) // '10,000'
 * thousandSeparator(1234567) // '1,234,567'
 * thousandSeparator(-1234567) // '-1,234,567'
 * thousandSeparator(1234.567) // '1,234.567'
 * thousandSeparator(1234.567/) // '1,234.567,8'
 * ```
 */
export function thousandSeparator(num: number): string {
  const numStr = Math.abs(num).toString()
  const [int, decimal] = numStr.split('.')

  const formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  let result
  if (decimal) {
    const formattedDecimal = decimal.replace(/(\d{3})(?=\d)/g, '$1,')
    result = `${formattedInt}${formattedDecimal ? '.' + formattedDecimal : ''}`
  } else {
    result = formattedInt
  }

  return num < 0 ? '-' + result : result
}
