import { isString } from '../typed/isString'
import { getByPath } from '../object/getByPath'

// prettier-ignore
{
/**
 * @zh 输入两个数组`arr1`、`arr2`，输出`arr1` - `arr2` 的差集。`getter`提供区分元素的标识。
 * @en Input two arrays arr1 and arr2, and output the difference set of arr1 - arr2. A getter is provided to distinguish the elements.
 * @param {arr1} any[] @zh 需要求差集的数组 @en Array for computing the difference
 * @param {arr2} path @zh 需要求差集的数组 @en Array for computing the difference
 * @param {string | ((item: any, index: number, arr: any[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {any[]}
 * @example
 * ```ts
 * import { difference } from 'parsnip-kit'
 * 
 * difference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3]
 * 
 * difference(
 *   [{ v: 1 }, { v: 2 }, { v: 3 }],
 *   [{ v: 1 }, { v: 4 }, { v: 8 }],
 *   'v'
 * ) // [{ v: 2 }, { v: 3 }]
 * 
 * difference(
 *   [{ v: [1] }, { v: [2] }, { v: [3] }],
 *   [{ v: [1] }, { v: [4] }, { v: [8] }],
 *   'v[0]'
 * ) // [{ v: [2] }, { v: [3] }]
 * 
 * difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // []
 * 
 * difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
 *   return Math.floor(item)
 * }) // []
 * ```
 */
}

export function difference(
  arr1: any[],
  arr2: any[],
  getter?: string | ((item: any, index: number, arr: any[]) => any),
) {
  const map = new Map<any, { value: any; count: number }>()
  const len1 = arr1.length
  for (let i = 0; i < len1; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(arr1[i], getter)
          : getter(arr1[i], i, arr1)
        : arr1[i]
    if (!map.has(key)) {
      map.set(key, { value: arr1[i], count: 1 })
    }
  }
  const len2 = arr2.length
  for (let i = 0; i < len2; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(arr2[i], getter)
          : getter(arr2[i], i, arr2)
        : arr2[i]
    const gotVal = map.get(key)
    if (gotVal) {
      gotVal.count++
    }
  }
  const ans: any[] = []
  for (const data of map.values()) {
    if (data.count === 1) {
      ans.push(data.value)
    }
  }
  return ans
}
