import { sum } from './sum'
/**
 * @zh 计算传入数组的平均值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提取数值。
 * @en Calculates the average of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.
 * @param {any[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => number)} [getter] @zh 用于从数组元素中提取数值 @en For extracting numerical values from array elements
 * @returns {number}
 * @version 0.0.1
 * @example
 * ```ts
 * import { average } from 'parsnip-kit'
 * 
 * average([1, 2, 3, 4]) // 2.5
 *
 * average([{ value: 10 }, { value: 20 }], item => item.value) // 15
 *
 * average([{ score: 85 }, { score: 95 }], 'score') // 90
 * ```
 */
export function average<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => number)
): number {
  if (data.length === 0) {
    throw TypeError('Length of data to calculate average must > 0')
  }
  const sumValue = sum(data, getter)
  return sumValue / data.length
}
