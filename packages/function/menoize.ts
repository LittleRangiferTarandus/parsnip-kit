const generateKey = (...args: any[]) => JSON.stringify(args)

/**
 * @zh 这是一个记忆化函数，用于缓存函数的返回值。当使用相同的参数再次调用时，它会返回缓存的结果，避免重复计算。
 *
 * 默认使用 `JSON.stringify(arguments)` 作为缓存的 key。
 *
 * @en This is a memoize function, which is used to cache the return values of a function. When called again with the same parameters, it will return the cached result, avoiding redundant calculations.
 *
 * By default, uses `JSON.stringify(arguments)` as the cache key.
 *
 * @param { (...args: any[]) => any } func @zh 要记忆化的函数 @en The function to memoize
 * @param { ( ...args: Parameters<T> ) => any } [resolver] @zh 用于生成缓存键的函数 @en A function used to generate cache keys
 * @param { Parameters<T>} [initCache] @zh 初始化缓存时的参数 @en Parameters for initializing the cache
 * @returns { ( ...args: Parameters<T> ) => ReturnType<T> }
 * @version 0.0.1
 * @example
 * ```typescript
 * import { memoize } from 'parsnip-kit'
 *
 * function expensiveCalculation(a: number, b: number): number {
 *   // Simulate an expensive computation process
 *   console.log('Calculating...')
 *   return a + b
 * }
 *
 * const memoizedCalc = memoize(expensiveCalculation)
 * memoizedCalc(2, 3) // Calculating...，returns 5
 * memoizedCalc(2, 3) // directly return 5, do not call expensiveCalculation
 *
 * // Use a custom resolver
 * const memoizedCalcWithResolver = memoize(
 *   expensiveCalculation,
 *   (a, b) => a + b
 * )
 * memoizedCalcWithResolver(2, 3) // Calculating...，returns 5
 * memoizedCalcWithResolver(4, 1) // directly return 5, do not call expensiveCalculation
 *
 * const memoizedCalcWithAllArgs = memoize(
 *   expensiveCalculation,
 *   (a, b) => a + b,
 *   [2, 3]
 * )
 * // Calculating..., call expensiveCalculation to cache
 * memoizedCalcWithAllArgs(2, 3)
 * // directly return 5, do not call expensiveCalculation
 * ```
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => any,
  initCache?: Parameters<T>
) {
  const cache = new Map<string, ReturnType<T>>()

  const memoized = function (this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = resolver ? resolver(...args) : generateKey(...args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = func.apply(this, args)
    cache.set(key, result)
    return result
  }
  if (initCache) {
    memoized(...initCache)
  }
  return memoized
}
