/**
 * @zh 输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。
 *
 * `iterator`支持`async`函数，或者`Promise`返回值。`concurrent`可选参数控制是否并发调用，若值为`'sequential'`，当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
 *
 * @en A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.
 *
 * The `iterator` supports `async` functions or functions that return a `Promise`. The optional parameter `concurrent` controls whether the `iterator` functions are called concurrently. If the value is `'sequential'`, the next `iterator` will only be executed after the `Promise` returned by the previous `iterator` is either fulfilled or rejected.
 *
 * @template {extends object} T @en Object type @zh 对象类型
 * @template {extends 'concurrent' | 'sequential' = 'concurrent' | 'sequential'} R @zh 并发类型 @en Concurrent type
 * @param {T} obj @zh 待遍历的对象 @en Object to iterate
 * @param {(value: any, key: string, object: T) => any} iterator @zh 迭代器函数 @en Iterator function
 * @param {R} [concurrent='concurrent'] @zh 并发类型 @en Concurrent type
 * @returns {Promise<void>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { asyncForEachFields } from 'parsnip-kit'
 *
 * const obj = { a: 1, b: 2, c: 3 }
 *
 * const logConcurrent = [] as any[]
 * const iterator = (value, key, object) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       logConcurrent.push({ key, value })
 *       resolve(void 0)
 *     }, Math.random() * 100)
 *   })
 * }
 * asyncForEachFields(obj, iterator, 'sequential').then(() => {
 *   console.log(logConcurrent)
 *   // Array contain { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } with random order.
 * })
 *
 * const logSequential = [] as any[]
 * const iterator = (value, key, object) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       logSequential.push({ key, value })
 *       resolve(void 0)
 *     }, Math.random() * 100)
 *   })
 * }
 * asyncForEachFields(obj, iterator, 'sequential').then(() => {
 *   console.log(logSequential)
 *   // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
 * })
 * ```
 */
export async function asyncForEachFields<
  T extends object,
  R extends 'concurrent' | 'sequential' = 'concurrent' | 'sequential'
>(
  obj: T,
  iterator: (value: any, key: string, object: T) => any,
  concurrent: R = 'concurrent' as R
) {
  const objKeys = Object.keys(obj)
  let count = objKeys.length

  if (!count) {
    return
  }

  let resolveFunc: Function
  const promise = new Promise<undefined>((resolve) => {
    resolveFunc = resolve
  })

  for (const key of objKeys) {
    if (concurrent === 'sequential') {
      await iterator(obj[key], key, obj)
    } else {
      Promise.resolve(iterator(obj[key], key, obj)).finally(() => {
        count--
        if (!count) {
          resolveFunc()
        }
      })
    }
  }
  if (concurrent === 'concurrent') {
    await promise
  }
}
