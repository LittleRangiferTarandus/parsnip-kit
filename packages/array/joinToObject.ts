import { getByPath, isString } from '../main'

/**
 * @zh 输入一个对象数组`fields`，输出从每一项对象组合起来形成的普通对象。
 *
 * 可选参数`getKey`和`getValue`用于把子对象转换为键和值，为空时默认提取数组元素第一个字段。`getKey`和`getValue`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。
 * @en Input an array of objects `fields`, and output a plain object formed by combining each item from the array.
 *
 * The optional parameters `getKey` and `getValue` are used to convert child objects into keys and values. When they are not provided, the first field of the array element is extracted by default. `getKey` and `getValue` can be field paths similar to [getByPath](../object/getByPath) or callback functions.
 * @param {any[]} pairs @zh 键值对对象数组 @en The array of key-value object
 * @param {string | ((item: any[], index: number, arr: any[][]) => any)} [getKey] @zh 从子对象中提取键  @en Extract keys form sub-objects
 * @param {string | ((item: any[], index: number, arr: any[][]) => any)} [getValue] @zh 从子对象中提取值  @en Extract values form sub-objects
 * @returns {object}
 * @version 0.0.1
 * @example
 * ```ts
 * import { joinToObject } from 'parsnip-kit'
 *
 * const users = [{ Alex: 'vip' }, { Bob: 'viewer' }, { Carter: 'user' }, { Daniel: 'user' }]
 *
 * joinToObject(users)
 * // { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
 *
 * const data = [
 *   { name: 'Alex', type: 'vip' },
 *   { name: 'Bob', type: 'viewer' },
 *   { name: 'Carter', type: 'user' },
 *   { name: 'Daniel', type: 'user' }
 * ]
 * joinToObject(data, 'name', 'type')
 * // { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
 *
 * joinToObject(data, pair => pair.name, pair => pair.type)
 * // { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
 * ```
 */
export function joinToObject<T extends object>(
  fields: T[],
  getKey?: string | ((item: T, index: number, arr: T[]) => any),
  getValue?: string | ((item: T, index: number, arr: T[]) => any)
) {
  const ans = {}
  const len = fields.length
  for (let i = 0; i < len; i++) {
    const originalKey = Object.keys(fields[i])[0]
    const key = getKey
      ? isString(getKey)
        ? getByPath(fields[i] as object, getKey)
        : getKey(fields[i], i, fields)
      : originalKey
    const value = getValue
      ? isString(getValue)
        ? getByPath(fields[i] as object, getValue)
        : getValue(fields[i], i, fields)
      : fields[i][originalKey]
    ans[key] = value
  }
  return ans
}
