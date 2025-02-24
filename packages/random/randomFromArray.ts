import { randomNumber } from './randomNumber'

/**
 * @zh 输入一个数组`arr`，返回随机一个元素。
 * @en Returns a random element of the input array `arr`.
 * @param {any[]} arr @zh 待随机选择的数组 @en Array to be extracted randomly
 * @returns {any}
 * @version 0.0.1
 * @example
 * ```ts
 * import { randomFromArray } from 'parsnip-kit'
 *
 * randomFromArray([1, 2, 3, 4, 5]) // a element of input array. for example: 3
 *
 * ```
 */
export function randomFromArray<T>(arr: T[]): T {
  const index = Math.floor(randomNumber(0, arr.length))
  return arr[index]
}
