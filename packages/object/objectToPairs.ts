/**
 * @zh 输入对象`obj`，输出一个由每个字段键值对组成的数组。
 * @en Input an object `obj`, and output an array composed of each key-value pair of the object.
 * @param {object} obj @zh 原对象 @en Original object
 * @returns {[string, any][]}
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
 * ```
 */
export function objectToPairs<T extends object>(
  obj: T
): [string, T[keyof T]][] {
  const ans: [string, T[keyof T]][] = []

  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    ans.push([key, obj[key]])
  }

  return ans
}
