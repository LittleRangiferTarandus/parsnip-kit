import { getByPath } from '../object/getByPath'
import { isString } from '../typed/isString'

/**
 * @zh 计算传入数组的总和，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。
 *
 * `getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。
 * @en Calculates the sum of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements).
 *
 * The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.
 * @template {} T @zh 输入的数组元素类型 @en Type of input array
 * @param {T[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => number)} [getter] @zh 用于从数组元素中提取数值 @en For extracting numerical values from array elements
 * @returns {number}
 * @version 0.0.1
 * @example
 * ```ts
 * import { sum } from 'parsnip-kit'
 *
 * sum([1, 2, 3, 4]) // 10
 *
 * sum([{ value: 10 }, { value: 20 }], item => item.value) // 30
 *
 * sum([{ score: 85 }, { score: 95 }], 'score') // 180
 * ```
 */
export function sum<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => number)
): number {
  let ans = 0
  const len = data.length

  for (let i = 0; i < len; i++) {
    ans +=
      getter !== undefined
        ? isString(getter)
          ? getByPath(data[i] as object, getter)
          : getter(data[i], i, data)
        : data[i]
  }
  return ans
}
