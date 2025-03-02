/**
 * @zh 并发执行一组返回`Promise`的函数`functions`，参数`limit`限制同时运行的数量。
 * @en Execute a array of function `functions` that return `Promise` in parallel, with the `limit` parameter restricting the number of concurrent executions.
 *
 * @template {} T @zh 返回`Promise`的`value`类型 @en The `value` type returned by a function that returns a `Promise`
 * @param {((...args: any[]) => Promise<T>)[]} functions @zh 返回`Promise`的函数数组 @en Array of functions that return `Promise`
 * @param {number} limit @zh 同时运行的函数数量限制 @en Array of functions that return `Promise`
 * @returns {Promise<PromiseSettledResult<Awaited<T>>[]>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { concurrent } from 'parsnip-kit'
 *
 * const functions = Array.from(
 *   { length: 5 },
 *   (_, i) => () =>
 *     new Promise<number>((resolve) => {
 *       setTimeout(() => { resolve(i) }, i * 100)
 *     })
 *
 * concurrent(functions, 2).then(res => {
 *   console.log(res)
 *   // [{ status: 'fulfilled', value: 0 }, { status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'fulfilled', value: 3 }, { status: 'fulfilled', value: 4 }]
 * })
 * ```
 */
export async function concurrent<T>(
  functions: ((...args: any[]) => Promise<T>)[],
  limit: number
) {
  const tasks: Promise<T>[] = []
  const executing: Promise<unknown>[] = []
  for (const func of functions) {
    const task = Promise.resolve().then(() => func())
    tasks.push(task as any)
    if (limit <= tasks.length) {
      const executingTask = task.finally(() => {
        executing.splice(executing.indexOf(executingTask), 1)
      })
      executing.push(executingTask)
      if (executing.length >= limit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.allSettled(tasks)
}
