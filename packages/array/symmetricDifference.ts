import { isString } from '../typed/isString'
import { getByPath } from '../object/getByPath'

/**
 * @zh 输入两个数组`arr1`、`arr2`，输出它们的对称差，对称差是指两个集合不相交的部分。接收一个`getter`，它是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。
 * @en Input two arrays `arr1` and `arr2`, and output their symmetric difference. Symmetric difference refers to the elements that are in either of the two sets but not in their intersection. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.
 * @template {} T @zh 数组元素类型 @en Type of elements of array
 * @param {T[]} arr1 @zh 需要求对称差的数组 @en Array for which the symmetric difference is to be calculated
 * @param {T[]} arr2 @zh 需要求对称差的数组 @en Array for which the symmetric difference is to be calculated
 * @param {string | ((item: T, index: number, arr: T[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {T[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { symmetricDifference } from 'parsnip-kit'
 *
 * symmetricDifference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3, 4, 8]
 *
 * symmetricDifference(
 *   [{ v: 1 }, { v: 2 }, { v: 3 }],
 *   [{ v: 1 }, { v: 4 }, { v: 8 }],
 *   'v'
 * ) // [{ v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]
 *
 * symmetricDifference(
 *   [{ v: [1] }, { v: [2] }, { v: [3] }],
 *   [{ v: [1] }, { v: [4] }, { v: [8] }],
 *   'v[0]'
 * ) // [{ v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]
 *
 * symmetricDifference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [5, 6]
 *
 * symmetricDifference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
 *   return Math.floor(item)
 * }) // [5, 6]
 * ```
 */

export function symmetricDifference<T>(
  arr1: T[],
  arr2: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
) {
  const map = new Map<any, { value: T; mask: number }>()
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
      map.set(key, { value: arr1[i], mask: 1 })
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
      map.set(key, { value: arr2[i], mask: 2 })
    } else {
      gotVal.mask |= 2
    }
  }
  const ans: T[] = []
  for (const data of map.values()) {
    if (data.mask != 3) {
      ans.push(data.value)
    }
  }
  return ans
}
