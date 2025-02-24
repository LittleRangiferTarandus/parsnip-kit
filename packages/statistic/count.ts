import { getByPath } from "../object/getByPath"
import { isString } from "../typed/isString"

/**
 * @zh 通过`getter`可选参数提取键值（或直接使用数组元素本身），对提取的值进行计数统计。`getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提频率统计的标识。
 * @en Count the occurrences of values extracted via the optional `getter` parameter (or directly using the array elements themselves). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.
 * @param {any[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {Map<any, number>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { count } from 'parsnip-kit'
 *
 * count([1, 2, 2, 3, 3, 3]) // Map { 1 => 1, 2 => 2, 3 => 3 }
 *
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'alice' }
 * ]
 * count(users, 'id') // Map { 1 => 2, 2 => 1 }
 *
 * count(users, (user) => user.name.toLowerCase()) // Map { 'alice' => 2, 'bob' => 1 }
 * ```
 */
export function count<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
): Map<any, number> {
  const ans = new Map<any, number>()
  const len = data.length
  for (let i = 0; i < len; i++) {
    const key = getter !== undefined
      ? isString(getter)
        ? getByPath(data[i] as object, getter)
        : getter(data[i], i, data)
      : data[i]
    ans.set(key, (ans.get(key) ?? 0) + 1)
  }
  return ans
}
