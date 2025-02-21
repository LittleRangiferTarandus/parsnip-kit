import { getByPath, isString } from '../main'

/**
 * @zh 输入两个数组`keys`和`values`，输出`keys`元素作为键，`values`元素作为值的普通对象。可选参数`getKey`和`getValue`用于把对象元素转换为键和值，它们是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。
 * @en Input two arrays `keys` and `values`, and output a plain object where elements of `keys` serve as keys and elements of `values` serve as values. Optional parameters `getKey` and `getValue` can be provided to transform elements of the objects into keys and values, respectively. These can be field paths similar to [getByPath](../object/getByPath) or callback functions.
 * @param {any[]} keys @zh 作为键的数组 @en The array serving as keys
 * @param {any[]} values @zh 作为值的数组  @en The array serving as values
 * @param {string | ((item: any, index: number, arr: any[]) => any)} [getKey] @zh 把数组元素转换为键  @en Transform array elements into keys
 * @param {string | ((item: any, index: number, arr: any[]) => any)} [getValue] @zh 把数组元素转换为值  @en Transform array elements into values
 * @returns {{}}
 * @example
 * ```ts
 * import { zipToObject } from 'parsnip-kit'
 *
 * zipToObject(['id', 'name', 'skill'], [1, 'Alex', ['Javascript']])
 * // { id: 1, name: 'Alex', skill: ['Javascript'] }
 *
 * const users = [{ id: 0, user: 'IAmBot' }, { id: 2, user: 'Alice' }, { id: 5, user: 'Tom' }]
 * const record = [
 *   { system: 'Linux', count: 99999, userId: 0 },
 *   { system: 'Mac OS', count: 10, userId: 2 },
 *   { system: 'Window', count: 2, userId: 5 },
 * ]
 * zipToObject(
 *   users, record, 'user', 'count'
 * ) // { IAmBot: 99999, Alice: 10, Tom: 2 }
 *
 * zipToObject(
 *   users, record, item => item.user, item => item.count
 * ) // { IAmBot: 99999, Alice: 10, Tom: 2 }
 * ```
 */
export function zipToObject<T, U>(
  keys: T[],
  values: U[],
  getKey?: string | ((item: T, index: number, arr: T[]) => any),
  getValue?: string | ((item: U, index: number, arr: U[]) => any)
) {
  const ans = {}

  const len = keys.length
  for (let i = 0; i < len; i++) {
    const key = getKey
      ? isString(getKey)
        ? getByPath(keys[i] as object, getKey)
        : getKey(keys[i], i, keys)
      : keys[i]
    const value = getValue
      ? isString(getValue)
        ? getByPath(values[i] as object, getValue)
        : getValue(values[i], i, values)
      : values[i]
    ans[key] = value
  }
  return ans
}
