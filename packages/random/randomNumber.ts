/**
 * @zh 返回随机数字，取值范围为 [`start`, `end`)。
 * @en Returns a random number in interval [`start`, `end`).
 * @param {number} [start=0] @zh 区间左边界 @en The left boundary of the interval
 * @param {number} [end=0] @zh 区间右边界 @en The right boundary of the interval
 * @returns {number}
 * @version 0.0.1
 * @example
 * ```ts
 * import { randomNumber } from 'parsnip-kit'
 * 
 * randomNumber() // a number in [0, 1)
 * randomNumber(0, 100) // a number in [0, 100)
 *
 * ```
 */
export function randomNumber(start: number = 0, end: number = 1) {
  return start + Math.random() * (end - start)
}