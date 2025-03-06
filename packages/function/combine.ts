import { Edge, EdgeReverse, EmptyOrParameters, EmptyOrReturnType } from '../common/types'

/**
 * @en Combine multiple functions and execute them in the specified order of `direction`, by default of `'right'` meaning executing from right to left. The return of each function takes the next function as an argument.
 * @zh 组合多个函数，并按指定的顺序`direction`（默认为`'right'`，即从右到左）执行它们。每个函数的返回都将下一个函数作为参数。
 * @template {extends readonly ((...args: any[]) => any)[]} T @zh 函数数组类型 @en Function array type
 * @template {extends 'left' | 'right' = 'left' | 'right'} R @zh 结合方向类型 @en Combination direction type
 * @param {T} functions @zh 用于结合的函数数组 @en The array of functions to combine
 * @param {R} [direction='right'] @zh 函数结合的方向 @en The direction in which to combine the functions
 * @returns {(...args: Parameters<Edge<T, R>>) => ReturnType<EdgeReverse<T, R>>}
 * @version 0.0.1
 * @refer [Edge](../common/types#edge) [EdgeReverse](../common/types#edgereverse) [EmptyOrParameters](../common/types#emptyorparameters) [EmptyOrReturnType](../common/types#emptyorreturntype)
 * @example
 * ```typescript
 * import { combine } from 'parsnip-kit'
 *
 * function add(a: number, b: number): number { return a + b }
 * function multiply(a: number): number { return a * 2 }
 *
 * const combinedRight = combine([multiply, add] as const)
 * combinedRight(2, 3) // 10
 *
 * const combinedLeft = combine([add, multiply] as const, 'left')
 * combinedLeft(2, 3) // 10
 *
 * // This could be useful for combining curried functions.
 * const multiplyCurried = (a: number) => (b: number) => a * b
 * const addCurried = (a: number) => (b: number) => a + b
 * const combinedRightCurried = combine([addCurried(2), multiplyCurried(3)] as const)
 *
 * combinedRightCurried(5) // 17
 * ```
 */
export function combine<
  T extends readonly ((...args: any[]) => any)[],
  R extends 'left' | 'right' = 'left' | 'right'
>(functions: T, direction: R = 'right' as R) {
  return function combined(
    ...args: EmptyOrParameters<Edge<T, R>>
  ): EmptyOrReturnType<EdgeReverse<T, R>> {
    let result
    let functionsToRun

    if (direction === 'left') {
      result = functions[0](...args)
      functionsToRun = functions.slice(1)
    } else {
      result = functions[functions.length - 1](...args)
      functionsToRun = functions.slice(0, functions.length - 1)
    }

    return direction === 'left'
      ? functionsToRun.reduce((runningResult, func) => {
          return func(runningResult)
        }, result)
      : functionsToRun.reduceRight((runningResult, func) => {
          return func(runningResult)
        }, result)
  }
}
