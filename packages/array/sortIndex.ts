import { stringComparatorAsc } from "../common/constants"

/**
 * @zh 输入数组`arr`，输出一个数组，是排序前数组索引到排序后数组索引的映射。需要注意的是，数组`arr`自身不会被排序。`comparator`自定义比较器，为空时比较的逻辑与原生`sort`相同。
 * @en Input an array `arr` and output an array representing the mapping from the indices of the original array to the indices of the sorted array. Note that the array `arr` itself will not be sorted. A custom comparator `comparator` can be provided; if not provided, the comparison logic will be the same as the native `sort`.
 * @param {any[]} arr @zh 待排序数组 @en Array to be sorted
 * @param {(a: T, b: T) => number} [comparator] @zh 比较器 @en Comparator for sorting
 * @returns {number[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { sortIndex } from 'parsnip-kit'
 *
 * sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
 * sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]
 *
 * sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
 * sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
 * ```
 */

export function sortIndex<T>(
  arr: T[],
  comparator?: (a: T, b: T) => number
): number[] {
  const indices = arr.map((_, index) => index)
  indices.sort((a, b) => {
    if (comparator) {
      return comparator(arr[a], arr[b])
    } else {
      return stringComparatorAsc(`${arr[a]}`, `${arr[b]}`)
    }
  })
  return indices
}
