/**
 * @zh 输入对象`obj`，输出分别是它的键和值的数组。
 * @en Input an object `obj`, and output two arrays: one containing its keys and the other containing its values.
 * @template {extends object} T @zh 原对象的类型 @en Type of original object
 * @param {T} obj @zh 原对象 @en Original object
 * @param {(value: T[string & keyof T], key: string, obj: T) => any} [createKey] @zh 创建 key 的数组元素 @en To create element of array of keys to be returned
 * @param {(value: T[string & keyof T], key: string, obj: T) => any} [createValue] @zh 创建 value 的数组元素 @en To create element of array of values to be returned
 * @returns {[string[], any[]]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { unzipToArrays } from 'parsnip-kit'
 *
 * const obj = {
 *  Alex: 16,
 *  Bob: 659,
 *  Carter: 155,
 *  Daniel: 825
 * }
 * unzipToArrays(obj)
 * // [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]
 *
 * unzipToArrays(obj, (_, key) => key.toUpperCase(), (value) => value + '')
 * // [['ALEX', 'BOB', 'CARTER', 'DANIEL'], ['16', '659', '155', '825']]
 *
 * ```
 */
export function unzipToArrays<T extends object>(
  obj: T,
  createKey?: (value: T[string & keyof T], key: string, obj: T) => any,
  createValue?: (value: T[string & keyof T], key: string, obj: T) => any
): [string[], T[keyof T][]] {
  const keys: string[] = []
  const values: T[keyof T][] = []

  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    keys.push(createKey ? createKey(obj[key], key, obj) : key)
    values.push(createValue ? createValue(obj[key], key, obj) : obj[key])
  }

  return [keys, values]
}
