import { getByPath } from '../object/getByPath'
import { isString } from '../typed/isString'

/**
 * Calculate the maximum value of the input array and return the first elements that have the maximum value, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements).
 *
 * The `getter` is a field path of [getByPath](../object/getByPath) or a callback function, for extracting numerical values.
 * @template {} T Type of input array
 * @param {T[]} data Input array
 * @param {string | ((item: T, index: number, arr: T[]) => number)} [getter] For extracting numerical values from array elements
 * @returns {T}
 * @version 0.0.1
 */
export function maxItem<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => number)
): T {
  let max = -Infinity
  let res: T = data[0]
  const len = data.length
  for (let i = 0; i < len; i++) {
    const value =
      getter !== undefined
        ? isString(getter)
          ? getByPath(data[i] as object, getter)
          : getter(data[i], i, data)
        : data[i]
    if (value > max) {
      max = value
      res = data[i]
    }
  }
  return res
}
