import { getByPath } from "../object/getByPath";
import { isString } from "../typed/isString";

/**
 * @zh 通过`getter`可选参数提取键值（或直接使用数组元素本身）,返回其中出现最多的值所在的第一个数组元素。
 *
 * `getter`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供频率统计的标识。
 * @en Extract key values using the optional `getter` parameter (or directly using the array elements themselves), and return the first element that have the most frequently occurring value.
 *
 * The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.
 * @template {} T @zh 输入的数组元素类型 @en Type of input array
 * @param {T[]} data @zh 输入的数组 @en Input array
 * @param {string | ((item: T, index: number, arr: T[]) => any)} [getter] @zh 提供区分元素的标识 @en Provide an identifier to distinguish the elements
 * @returns {T}
 * @version 0.0.1
 * @example
 * ```ts
 * import { modeItem } from 'parsnip-kit'
 *
 * modeItem([1, 2, 2, 3, 3, 3]) // 3
 *
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'alice' }
 * ]
 * modeItem(users, 'id') // { id: 1, name: 'Alice' }
 *
 * modeItem(users, (user) => user.name.toLowerCase()) // { id: 1, name: 'Alice' }
 * ```
 */
export function modeItem<T>(
  data: T[],
  getter?: string | ((item: T, index: number, arr: T[]) => any)
) {
  const count = new Map<any, { count: number; firstIndex: number }>()
  let max = -Infinity
  let index = 0
  const len = data.length
  for (let i = 0; i < len; i++) {
    const key =
      getter !== undefined
        ? isString(getter)
          ? getByPath(data[i] as object, getter)
          : getter(data[i], i, data)
        : data[i]
    let current = count.get(key)
    if (!current) {
      current = { count: 0, firstIndex: i }
      count.set(key, current)
    }
    current.count++
    if (current.count > max) {
      max = current.count
      index = current.firstIndex
    }
  }
  return data[index]
}
