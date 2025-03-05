import { isString } from '../typed/isString'
import { getByPath } from '../object/getByPath'

/**
 * @zh 输入两个数组`arr1`、`arr2`，输出它们的交集。接收一个`getter`，它是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。
 * @en Input two arrays `arr1` and `arr2`, and output their intersection. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.
 * @template {} T @zh 数组元素类型 @en Type of elements of array
 * @param {T[]} arr1 @zh 需要求交集的数组 @en Array to be intersected
 * @param {T[]} arr2 @zh 需要求交集的数组 @en Array to be intersected
 * @param {string | ((item: T, index: number, arr: T[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {T[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { intersection } from 'parsnip-kit'
 *
 * intersection([1, 2, 3, NaN], [1, 4, 8, NaN]) // [1, NaN]
 *
 * intersection(
 *   [{ v: 1 }, { v: 2 }, { v: 3 }],
 *   [{ v: 1 }, { v: 4 }, { v: 8 }],
 *   'v'
 * ) // [{ v: 1 }]
 *
 * intersection(
 *   [{ v: [1] }, { v: [2] }, { v: [3] }],
 *   [{ v: [1] }, { v: [4] }, { v: [8] }],
 *   'v[0]'
 * ) // [{ v: [1] }]
 *
 * intersection([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16]
 *
 * intersection([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
 *   return Math.floor(item)
 * }) // [1.1, 2.4, 3.9, 4.16]
 * ```
 */

export function intersection<T>(
  arr1: T[],
  arr2: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
): T[] {
  const map = new Map<any, { value: T; count: number }>()
  const len1 = arr1.length
  for (let i = 0; i < len1; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(arr1[i] as object, getter)
          : getter(arr1[i], i, arr1)
        : arr1[i]
    const gotVal = map.get(key)
    if (!gotVal) {
      map.set(key, { value: arr1[i], count: 1 })
    } else {
      gotVal.count += 1
    }
  }
  const len2 = arr2.length
  for (let i = 0; i < len2; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(arr2[i] as object, getter)
          : getter(arr2[i], i, arr2)
        : arr2[i]
    const gotVal = map.get(key)
    if (!gotVal) {
      map.set(key, { value: arr2[i], count: 1 })
    } else {
      gotVal.count += 1
    }
  }
  const ans: T[] = []
  for (const data of map.values()) {
    if (data.count > 1) {
      ans.push(data.value)
    }
  }
  return ans
}
