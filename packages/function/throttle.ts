/**
 * @en Throttle function used to limit the frequency of function calls. It ensures that the function is not called more than once within a specified time interval.
 * @zh 节流函数用于限制函数调用的频率。它确保函数在指定的时间间隔内不会被多次调用。
 *
 * @param {(...args: any[]) => any} func @en The function to throttle @zh 要节流的函数
 * @param {number} wait @en The minimum allowed interval between two consecutive calls (in milliseconds). @zh 两次连续调用之间的间隔时间（毫秒）
 * @param {object} [options] @zh 可选参数对象 @en Optional parameter object
 * @param {boolean} [options.leading=false] @en Whether to execute the function at the beginning of the wait interval @zh 是否在等待间隔开始时执行函数
 * @param {boolean} [options.trailing=true] @en Whether to execute the function at the end of the wait interval, if not already executed  @zh 是否在等待间隔结束时执行函数
 * @returns {(...args: any[]) => void}
 * @version 0.0.1
 * @example
 * ```typescript
 * import { throttle } from 'parsnip-kit'
 *
 * const handler = () => console.log('Function called')
 *
 * // Basic throttle usage
 * const throttled = throttle(handler, 300)
 * throttled() // console.log is called after 300ms
 * throttled() // Call is ignored due to throttle
 *
 * // Throttle with leading and trailing options
 * const throttledWithOptions = throttle(handler, 300, { leading: true, trailing: true })
 * throttledWithOptions() // console.log is called immediately and again after 300ms if no other calls are made.
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: { leading?: boolean; trailing?: boolean }
) {
  let previous = 0
  let timeout: number | undefined
  const { leading = false, trailing = true } = options || {}
  let lastArgs: Parameters<T> | undefined
  let lastThis: ThisParameterType<T> | undefined

  const throttled = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): void {
    const now = +new Date()
    lastArgs = args
    lastThis = this

    if (leading === false) {
      previous = now
    }
    const remaining = wait - (now - previous)
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = undefined
      }
      previous = now
      func.apply(lastThis, lastArgs)
    }
    if (!timeout && trailing) {
      timeout = setTimeout(() => {
        timeout = undefined
        previous = leading ? +new Date() : 0
        func.apply(lastThis, lastArgs)
        lastArgs = undefined
        lastThis = undefined
      }, remaining)
    }
  }
  return throttled
}
