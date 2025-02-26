/**
 * @zh 输入对象`obj`，输出一个数组，由`obj`分割得到的每个字段普通对象组成数组，或由可选参数`createItem`返回组成。
 * @en Input an object `obj`, and output an array of plain objects formed from each field of the `obj`, split by the object, or composed of the results returned by the optional parameter `createItem`.
 * @param {object} obj @zh 原对象 @en Original object
 * @param {(value: any, key: string, obj: any) => any} [createItem] @zh 创建数组元素 @en To create element of array to be returned
 * @returns {any[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { splitToArrays } from 'parsnip-kit'
 *
 * const obj = {
 *   Alex: 16,
 *   Bob: 659,
 *   Carter: 155,
 *   Daniel: 825
 * }
 * splitToArrays(obj)
 * // [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
 *
 * splitToArrays(obj, (value, key) => [key, value])
 * // [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
 * ```
 */
export function splitToArrays<T extends object>(
  obj: T,
  createItem?: (value: T[string & keyof T], key: string, obj: T) => any
): [string, T[keyof T]][] {
  const ans: [string, T[keyof T]][] = []

  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    ans.push(createItem ? createItem(obj[key], key, obj) : { [key]: obj[key] })
  }

  return ans
}
