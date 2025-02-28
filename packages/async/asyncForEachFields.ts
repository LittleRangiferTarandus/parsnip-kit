/**
 * @zh 输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。
 *
 * `iterator`支持`async`函数，或者`Promise`返回值。当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
 *
 * @en A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.
 *
 * The `iterator` supports `async` functions or `Promise` returns. Only after the `Promise` returned by the previous `iterator` is fulfilled or rejected will the next `iterator` be executed.
 *
 * @template {extends object} T @en Object type @zh 对象类型
 * @param {T} obj @zh 待遍历的对象 @en Object to iterate
 * @param {(value: any, key: string, object: T) => any} iterator @zh 迭代器函数 @en Iterator function
 * @returns {Promise<void>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { asyncForEachFields } from 'parsnip-kit'
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * const log = [] as any[]
 * const iterator = (value, key, object) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       log.push({ key, value })
 *       resolve(void 0)
 *     }, value * 100)
 *   })
 * }
 * asyncForEachFields(obj, iterator).then(() => {
 *   console.log(log)
 *   // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
 * })
 * ```
 */
export async function asyncForEachFields<T extends object>(
  obj: T,
  iterator: (value: any, key: string, object: T) => any
) {
  const objKeys = Object.keys(obj)
  for (const key of objKeys) {
    await iterator(obj[key], key, obj)
  }
}
