/**
 * @zh 输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。
 * @en A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.
 * @param {object} obj @zh 待遍历的对象 @en Object to iterate
 * @param {(value: any, key: string, object: T) => void} iterator @zh 迭代器函数 @en Iterator function
 * @returns {undefined}
 * @example
 * ```ts
 * import { forEachFields } from 'parsnip-kit'
 *
 * const user = { name: 'John', age: 30 }
 * forEachFields(user, (value, key, obj) => {
 *   console.log(`Key: ${key}, Value: ${value}`)
 * })
 * // Key: name, Value: John
 * // Key: age, Value: 30
 * ```
 */
export function forEachFields<T extends object>(
  obj: T,
  iterator: (value: any, key: string, object: T) => void
) {
  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    iterator(obj[key], key, obj)
  }
}
