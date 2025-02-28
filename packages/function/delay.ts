/**
 * @zh 这是一个延迟函数，接受一个函数`func`和延迟`wait`毫秒，返回一个延迟调用该函数的函数。
 *
 * @en This is a delay function that accepts a function `func` and a delay `wait` in milliseconds, and returns a function that will call the provided function after the specified delay.
 *
 * @template {extends (...args: any[]) => any} T @zh 函数类型 @en Function type
 * @param {T} func @zh 要延迟的函数 @en The function to delay
 * @param {number} wait @zh 延迟时间（毫秒） @en The delay time (in milliseconds)
 * @returns {(...args: Parameters<T>) => void}
 * @version 0.0.1
 * @example
 * ```typescript
 * import { delay } from 'parsnip-kit'
 *
 * const handler = () => console.log('Function call')
 * const delayed = delay(handler, 3000)
 * delayed()
 * // console.log is called after 3s
 *
 * ```
 */
export function delay<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
