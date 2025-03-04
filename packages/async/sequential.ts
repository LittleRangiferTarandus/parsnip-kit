import { isUndefined } from '../main'

/**
 * @zh `sequential`通常用于顺序执行多个异步操作的场景。它接收一组返回`Promise`的函数`functions`，串行执行它们，函数接受`PromiseSettledResult`类型包裹的前一个函数的返回作为入参。
 *
 * 如果传入可选参数`initialValue`，它会被 fulfilled 状态的`PromiseSettledResult`类型包裹传入第一个函数，否则第一个函数将会接收`undefined`作为入参。
 *
 * @en The `sequential` function is typically used when multiple asynchronous operations need to be executed in sequence. It takes an array of functions `functions` that return a `Promise` and executes them serially. Each function can accept the result of the previous function wrapped in a `PromiseSettledResult` type as a parameter.
 *
 * If an optional parameter `initialValue` is provided, it will be wrapped in a `PromiseSettledResult` of fulfilled status and passed to the first function. Otherwise, the first function will receive `undefined` as its parameter.
 *
 * @template {} T @zh 返回`Promise`的`value`类型 @en The `value` type returned by a function that returns a `Promise`
 * @param {((arg?: PromiseSettledResult<Awaited<T>>) => Promise<T>)[]} functions @zh 返回`Promise`的函数数组 @en Array of functions that return `Promise`
 * @param {Awaited<T>} [initialValue] @zh 初始值 @en Initial Value
 * @returns {Promise<PromiseSettledResult<Awaited<T>>[]>}
 * @version 0.0.1
 * @example
 * ```ts
 * import { sequential } from 'parsnip-kit'
 *
 * const functions = [
 *   async (arg?: PromiseSettledResult<number>) => {
 *     if (arg?.status === 'fulfilled') {
 *       return arg.value
 *     } else {
 *       throw new Error('test')
 *     }
 *   },
 *   async (arg?: PromiseSettledResult<number>) => {
 *     return arg?.status === 'fulfilled' ? arg.value + 1 : 0
 *   },
 *   async (arg?: PromiseSettledResult<number>) => {
 *     return arg?.status === 'fulfilled' ? arg.value * 2 : 0
 *   }
 * ]
 * sequential(functions).then(res => { console.log(res) })
 * // [
 * //   { status: 'rejected', reason: new Error('test') },
 * //   { status: 'fulfilled', value: 0 },
 * //   { status: 'fulfilled', value: 0 }
 * // ]
 *
 * sequential(functions, 0).then(res => { console.log(res) })
 * // [
 * //   { status: 'fulfilled', value: 1 },
 * //   { status: 'fulfilled', value: 2 },
 * //   { status: 'fulfilled', value: 4 }
 * // ]
 *
 * ```
 */
export async function sequential<T>(
  functions: ((arg?: PromiseSettledResult<Awaited<T>>) => Promise<T>)[],
  initialValue?: Awaited<T>
) {
  const results: PromiseSettledResult<Awaited<T>>[] = []
  const initialParams = !isUndefined(initialValue)
    ? { status: 'fulfilled' as const, value: initialValue! }
    : void 0
  for (const [index, func] of functions.entries()) {
    results[index] = await Promise.resolve()
      .then(() =>
        Promise.resolve(func(index > 0 ? results[index - 1] : initialParams))
      )
      .then((res) => ({ status: 'fulfilled' as const, value: res }))
      .catch((err) => ({ status: 'rejected' as const, reason: err }))
  }
  return results
}
