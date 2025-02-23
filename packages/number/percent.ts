/**
 * @zh 输入数值`num`和总数`total`（默认 100），输出格式化的百分比字符串。可选参数`fixed`，控制小数位数，默认为 2。
 * @en Input a number `num` and a total `total` (default is 100), and output a formatted percentage string. An optional parameter `fixed` is available to control the number of decimal places, defaulting to 2.
 * @param {number} num @zh 要计算的数值 @en The number to calculate
 * @param {number} [total=100] @zh 总数，默认为100 @en Total value
 * @param {number} [fixed=2] @zh 小数位数 @en Decimal places
 * @returns {string}
 * @version 0.0.1
 * @example
 * ```ts
 * import { percent } from 'parsnip-kit'
 *
 * percent(50) // '50.00%'
 * percent(25, 100) // '25.00%'
 * percent(75, 200) // '37.50%'
 * percent(75, 200, 0) // '38%'
 * percent(0) // '0.00%'
 * ```
 */
export function percent(
  num: number,
  total: number = 100,
  fixed: number = 2
): string {
  if (total === 0) {
    throw new TypeError('Total cannot be zero.')
  }
  const percentage = (num / total) * 100
  return `${percentage.toFixed(fixed)}%`
}
