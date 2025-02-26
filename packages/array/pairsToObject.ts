import { getByPath, isString } from '../main'

/**
 * @zh 输入一个对象数组`pairs`，输出从每一项中提取的键值对组成的普通对象。可选参数`getKey`和`getValue`用于把子对象转换为键和值，为空时默认取对象元素`[0]`作为键，元素`[1]`作为值。`getKey`和`getValue`是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数。
 * @en Input a object array `pairs`, and output a plain object composed of key-value pairs extracted from each sub-array. Optional parameters `getKey` and `getValue` can be provided to transform the array elements into keys and values. If not provided, the first element of each sub-array (index 0) will be used as the key, and the second element (index 1) will be used as the value. `getKey` and `getValue` can be field paths similar to [getByPath](../object/getByPath) or callback functions.
 * @param {any[]} pairs @zh 键值对对象数组 @en The array of key-value object
 * @param {string | ((item: any[], index: number, arr: any[][]) => any)} [getKey] @zh 从子数组中提取键  @en Extract keys form sub-arrays
 * @param {string | ((item: any[], index: number, arr: any[][]) => any)} [getValue] @zh 从子数组中提取值  @en Extract values form sub-arrays
 * @returns {object}
 * @example
 * ```ts
 * import { pairsToObject } from 'parsnip-kit'
 *
 * const users = [['Alex', 16, 'vip'], ['Bob', 659, 'viewer'], ['Carter', 155, 'user'], ['Daniel', 825, 'user']]
 *
 * pairsToObject(users)
 * // { Alex: 16, Bob: 659, Carter: 155, Daniel: 825 }
 *
 * pairsToObject(users, '[0]', '[2]')
 * // { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
 *
 * pairsToObject(users, pair => pair[0], pair => `${pair[1]} replies`)
 * // { Alex: '16 replies', Bob: '659 replies', Carter: '155 replies', Daniel: '825 replies' }
 * ```
 */
export function pairsToObject<T extends object>(
  pairs: T[],
  getKey?: string | ((item: T, index: number, arr: T[]) => any),
  getValue?: string | ((item: T, index: number, arr: T[]) => any)
) {
  const ans = {}

  const len = pairs.length
  for (let i = 0; i < len; i++) {
    const key = getKey
      ? isString(getKey)
        ? getByPath(pairs[i] as object, getKey)
        : getKey(pairs[i], i, pairs)
      : pairs[i][0]
    const value = getValue
      ? isString(getValue)
        ? getByPath(pairs[i] as object, getValue)
        : getValue(pairs[i], i, pairs)
      : pairs[i][1]
    ans[key] = value
  }
  return ans
}
