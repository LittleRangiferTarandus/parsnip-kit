/**
 * @zh 输入对象`obj`，输出一个数组，由每个字段的键值对形成的数组组成数组，或由可选参数`createItem`返回组成。
 * @en input an object `obj`, and output an array composed of arrays formed by each field's key-value pairs, or composed of the results returned by the optional parameter `createItem`.
 * @param {object} obj @zh 原对象 @en Original object
 * @param {(value: any, key: string, obj: any) => any} [createItem] @zh 创建数组元素 @en To create element of array to be returned
 * @returns {any[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { objectToPairs } from 'parsnip-kit'
 *
 * const obj = {
 *  Alex: 16,
 *  Bob: 659,
 *  Carter: 155,
 *  Daniel: 825
 * }
 * objectToPairs(obj)
 * // [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
 *
 * objectToPairs(obj, (value, key) => ({ [key]: value }))
 * // [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
 * ```
 */
export function objectToPairs<T extends object>(
  obj: T,
  createItem?: (value: T[string & keyof T], key: string, obj: T) => any
): [string, T[keyof T]][] {
  const ans: [string, T[keyof T]][] = []

  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    ans.push(createItem ? createItem(obj[key], key, obj) : [key, obj[key]])
  }

  return ans
}
