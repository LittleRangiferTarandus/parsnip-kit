import { getByPath } from '../object/getByPath'
import { isString } from '../typed/isString'

/**
 * @zh 计算传入数组的最大值，返回一个数组，包含最大值所在的所有数组元素，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。
 * @en Calculate the maximum value of the input array and return an array containing all elements that have the maximum value, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.
 * @param {any[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => number)} [getter] @zh 用于从数组元素中提取数值 @en For extracting numerical values from array elements
 * @returns {any[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { maxItems } from 'parsnip-kit'
 *
 * maxItems([1, 2, 3, 4]) // [4]
 *
 * maxItems([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], item => item.value)
 * // [{ value: 20 }, { value: 20, key: 'count' }]
 *
 * maxItems([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], 'value')
 * // [{ value: 20 }, { value: 20, key: 'count' }]
 * ```
 */
export function maxItems<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => number)
): T[] {
  let max = -Infinity
  const len = data.length
  const valueMap = new Map<number, T[]>()
  for (let i = 0; i < len; i++) {
    const value =
      getter !== undefined
        ? isString(getter)
          ? getByPath(data[i] as object, getter)
          : getter(data[i], i, data)
        : data[i]
    let group = valueMap.get(value)
    if (!group) {
      group = []
      valueMap.set(value, group)
    }
    group.push(data[i])
    if (value > max) {
      max = value
    }
  }
  return valueMap.get(max)!
}
