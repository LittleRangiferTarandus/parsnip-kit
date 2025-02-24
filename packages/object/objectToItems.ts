/**
 * @zh 输入对象`obj`，输出一个数组，由每个字段键值对组成数组元素，或由可选参数`createItem`返回组成。
 * @en Input an object `obj`, and output an array composed of each field's key - value pairs, or return something based on the optional parameter `createItem`.
 * @param {object} obj @zh 原对象 @en Original object
 * @param {(value: any, key: string, obj: any) => any} [createItem] @zh 创建数组元素 @en To create element of array to be returned
 * @returns {any[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { objectToItems } from 'parsnip-kit'
 *
 * const obj = {
 *  Alex: 16,
 *  Bob: 659,
 *  Carter: 155,
 *  Daniel: 825
 * }
 * objectToItems(obj)
 * // [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
 * 
 * objectToItems(obj, (value, key) => ({ [key]: value }))
 * // [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
 * ```
 */
export function objectToItems<T extends object>(
  obj: T,
  createItem?: (value: T[string & keyof T], key: string, obj: T) => any
): [string, T[keyof T]][] {
  const ans: [string, T[keyof T]][] = []

  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    ans.push(createItem ? createItem(obj[key], key, obj): [key, obj[key]])
  }

  return ans
}
