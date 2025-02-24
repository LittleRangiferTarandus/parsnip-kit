import { count } from "./count"

/**
 * @zh 通过`getter`可选参数提取键值（或直接使用数组元素本身）,返回其中出现最多的值。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供频率统计的标识。
 * @en Extract key values using the optional `getter` parameter (or directly using the array elements themselves), and return the most frequently occurring value. The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.
 * @param {any[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {any[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { mode } from 'parsnip-kit'
 *
 * mode([1, 2, 2, 3, 3, 3]) // [3]
 *
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'alice' }
 * ]
 * mode(users, 'id') // [1]
 *
 * mode(users, (user) => user.name.toLowerCase()) // ['alice']
 * ```
 */
export function mode<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
) {
  const countValue = count(data, getter)
  const maxCount = Math.max(...countValue.values())

  const ans: any[] = []
  for (const entry of countValue.entries()) {
    if (entry[1] === maxCount) {
      ans.push(entry[0])
    }
  }
  return ans
}
