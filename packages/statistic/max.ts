import { getByPath } from '../object/getByPath'
import { isString } from '../typed/isString'

/**
 * @zh 计算传入数组的最大值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。
 * @en Calculates the maximum of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.
 * @param {any[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => number)} [getter] @zh 用于从数组元素中提取数值 @en For extracting numerical values from array elements
 * @returns {number}
 * @version 0.0.1
 * @example
 * ```ts
 * import { max } from 'parsnip-kit'
 * 
 * max([1, 2, 3, 4]) // 4
 *
 * max([{ value: 10 }, { value: 20 }], item => item.value) // 20
 *
 * max([{ score: 85 }, { score: 95 }], 'score') // 95
 * ```
 */
export function max<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => number)
): number {
  let ans = -Infinity
  const len = data.length
  
  for (let i = 0; i < len; i++) {
    const value = getter !== undefined
      ? isString(getter)
        ? getByPath(data[i] as object, getter)
        : getter(data[i], i, data)
      : data[i]
    if (value > ans) {
      ans = value
    }
  }
  return ans
}
