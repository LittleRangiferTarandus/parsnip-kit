/**
 * Sorts parameter `arr` lexicographically based on the order specified by parameter `order` with the default of `'asc'`.
 *
 * The parameter `order` can be specified as either `'asc'` (ascending order) or `'desc'` (descending order).
 *
 * It will call [stringComparatorAsc](../common/constants#stringcomparatorasc) or [stringComparatorDesc](../common/constants#stringcomparatordesc) internally.
 *
 * The optional parameter `getter` is used to obtain the string value from elements of `arr`, with the default being to use the element itself for sorting.
 *
 * `getter` can be a field path of [getByPath](../object/getByPath) or a callback function.
 * @template {} T Type of elements of array
 * @template {extends 'asc' | 'desc' = 'asc' | 'desc'} R Type of order for sorting
 * @param {T[]} arr Array to be sorted
 * @param {R} order Order for sorting
 * @param {string | ((item: T) => string)} getter For extracting string values from array elements
 * @returns {T[]}
 * @version 0.0.2
 */

import { getByPath } from '../object/getByPath'
import { stringComparatorAsc, stringComparatorDesc } from '../common/constants'

export function lexSort<T, R extends 'asc' | 'desc' = 'asc' | 'desc'>(
  arr: T[],
  order: R = 'asc' as R,
  getter?: string | ((item: T) => string)
) {
  return arr.sort((a, b) => {
    const valueA = getter
      ? typeof getter === 'string'
        ? getByPath(a as any, getter)
        : getter(a)
      : a
    const valueB = getter
      ? typeof getter === 'string'
        ? getByPath(b as any, getter)
        : getter(b)
      : b
    return order === 'asc'
      ? stringComparatorAsc(valueA, valueB)
      : stringComparatorDesc(valueA, valueB)
  })
}
