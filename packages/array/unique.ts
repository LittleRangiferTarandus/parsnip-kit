import { isString } from '../typed/isString'
import { getByPath } from '../object/getByPath'

/**
 * @zh 输入数组`arr`返回其中只出现一次的元素。接收一个`getter`，它是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。
 * @en Input an array `arr` and return the elements that appear only once. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.
 * @param {any[]} arr @zh 需要求交集的数组 @en Array to be intersected
 * @param {string | ((item: any, index: number, arr: any[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {any[]}
 * @example
 * ```ts
 * import { unique } from 'parsnip-kit'
 *
 * unique([1, 2, 3, NaN, 1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]
 *
 * unique(
 *   [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 1 }, { v: 4 }, { v: 8 }],
 *   'v'
 * ) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]
 *
 * unique(
 *   [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [1] }, { v: [4] }, { v: [8] }],
 *   'v[0]'
 * ) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]
 *
 * unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]
 *
 * unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
 *   return Math.floor(item)
 * }) // [1.1, 2.4, 3.9, 4.16, 5, 6]
 * ```
 */

export function unique<T>(
  arr: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
): T[] {
  const map = new Map<any, any>()
  const len1 = arr.length
  for (let i = 0; i < len1; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(arr[i] as object, getter)
          : getter(arr[i], i, arr)
        : arr[i]
    const gotVal = map.get(key)
    if (!gotVal) {
      map.set(key, arr[i])
    }
  }
  const ans: T[] = []
  for (const value of map.values()) {
    ans.push(value)
  }
  return ans
}
