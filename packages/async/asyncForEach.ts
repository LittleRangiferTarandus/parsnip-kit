/**
 * @zh 输入一个数组`array`和迭代器`iterator`，遍历对象的每个元素，对每个元素执行`iterator`。
 *
 * `iterator`支持`async`函数，或者`Promise`返回值。当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。
 *
 * @en Input an array `array` and an iterator `iterator`, iterate over each element of the array, and execute `iterator` for each element.
 *
 * The `iterator` supports `async` functions or `Promise` returns. Only after the `Promise` returned by the previous `iterator` is fulfilled or rejected will the next `iterator` be executed.
 *
 * @template {} T @en Element type of array @zh 数组元素类型
 * @param {T[]} obj @zh 待遍历的数组 @en Array to iterate
 * @param {(item: T, index: number, array: T[]) => any} iterator @zh 迭代器函数 @en Iterator function
 * @returns {Promise<void>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { asyncForEach } from 'parsnip-kit'
 *
 * const array = [1, 2, 3]
 * const log = [] as any[]
 * const iterator = (item, index, arr) => {
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       log.push({ item, index })
 *       resolve(void 0)
 *     }, item * 100)
 *   })
 * }
 * asyncForEach(obj, iterator).then(() => {
 *   console.log(log)
 *   // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
 * })
 * ```
 */
export async function asyncForEach<T>(
  array: T[],
  iterator: (item: T, index: number, array: T[]) => any
): Promise<void> {
  for (const [index, item] of array.entries()) {
    await iterator(item, index, array)
  }
}
