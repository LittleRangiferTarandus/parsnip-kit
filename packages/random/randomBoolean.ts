/**
 * @zh 返回随机布尔值。
 * @en Returns a random boolean value.
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { randomBoolean } from 'parsnip-kit'
 * 
 * randomBoolean() // false or true
 *
 * ```
 */
export function randomBoolean() {
  return Math.random() < 0.5
}