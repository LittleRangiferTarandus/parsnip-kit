/**
 * @zh 输入一个数组`array`和迭代器`iterator`，遍历对象的每个元素，对每个元素执行`iterator`，并返回由每次`await`执行后的返回值组成的数组。
 *
 * `iterator`支持`async`函数，或者`Promise`返回值。`concurrent`可选参数控制是否并发调用，若值为`'sequential'`，当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
 *
 * @en Input an array `array` and an iterator `iterator`, traverse each element of the array, execute the `iterator` on each element, and return an array composed of the return values after each execution using `await`.
 *
 * The `iterator` supports `async` functions or functions that return a `Promise`. The optional parameter `concurrent` controls whether the `iterator` functions are called concurrently. If the value is `'sequential'`, the next `iterator` will only be executed after the `Promise` returned by the previous `iterator` is either fulfilled or rejected.
 *
 * @template {} T @en Element type of array @zh 数组元素类型
 * @template {} U @en Return type of the `iterator` @zh `iterator`返回值类型
 * @template {extends 'concurrent' | 'sequential' = 'concurrent' | 'sequential'} R @zh 并发类型 @en Concurrent type
 * @param {T[]} obj @zh 待遍历的数组 @en Array to iterate
 * @param {(item: T, index: number, array: T[]) => U | Promise<U>} iterator @zh 迭代器函数 @en Iterator function
 * @param {R} [concurrent='concurrent'] @zh 并发类型 @en Concurrent type
 * @returns {Promise<U[]>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { asyncMap } from 'parsnip-kit'
 *
 * const array = [1, 2, 3]
 * const logConcurrent = [] as any[]
 * const iterator = (item, index, arr) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       logConcurrent.push({ item, index })
 *       resolve({ item, index })
 *     }, Math.random() * 100)
 *   })
 * }
 * asyncMap(obj, iterator).then(res => {
 *   console.log(res)
 *   // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
 *   console.log(logConcurrent)
 *   // Array contain { item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 } with random order.
 * })
 *
 * const logSequential = [] as any[]
 * const iterator = (item, index, arr) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       logSequential.push({ item, index })
 *       resolve({ item, index })
 *     }, Math.random() * 100)
 *   })
 * }
 * asyncMap(obj, iterator, 'sequential').then(res => {
 *   console.log(res)
 *   // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
 *   console.log(logSequential)
 *   // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
 * })
 * ```
 */
export async function asyncMap<
  T,
  U,
  R extends 'concurrent' | 'sequential' = 'concurrent' | 'sequential'
>(
  array: T[],
  iterator: (item: T, index: number, array: T[]) => U | Promise<U>,
  concurrent: R = 'concurrent' as R
): Promise<U[]> {
  let count = array.length

  if (!count) {
    return []
  }

  let resolveFunc: Function
  const promise = new Promise<undefined>((resolve) => {
    resolveFunc = resolve
  })

  const result: U[] = []
  for (const [index, item] of array.entries()) {
    if (concurrent === 'sequential') {
      result[index] = await iterator(item, index, array)
    } else {
      Promise.resolve(await iterator(item, index, array))
        .then((res) => {
          result[index] = res
        })
        .finally(() => {
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
  return result
}
