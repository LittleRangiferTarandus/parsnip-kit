/**
 * @zh 这是一个防抖函数，用于限制函数调用的频率。它会在指定的时间间隔后执行函数，如果在时间间隔内多次调用，会清除之前的定时器并重新计时。
 *
 * @en This is a debounce function, which is used to limit the frequency of function calls. It will execute the function after a specified time interval. If the function is called multiple times within the interval, the previous timer will be cleared and reset.
 *
 * @param {(...args: any[]) => any} func @zh 要防抖的函数 @en The function to debounce
 * @param {number} wait @zh 两次连续调用之间的延迟时间（毫秒） @en The delay time between two consecutive calls (in milliseconds)
 * @param {object} [options] @zh 可选参数对象 @en Optional parameter object
 * @param {boolean} [options.immediate=false] @zh 是否立即执行第一次调用 @en Whether to execute the function immediately on the first call
 * @param {number} [options.maxWait] @zh 设置最大等待时间 @en Set the maximum waiting time
 * @returns {(...args: any[]) => void}
 * @example
 * ```typescript
 * import { debounce } from 'parsnip-kit'
 *
 * const handler = () => console.log('Function called')
 *
 * // Normal
 * const debounced = debounce(handler, 300)
 * debounced() // console.log is called after 300ms
 *
 * // Immediately executed debounce
 * const immediateDebounced = debounce(handler, 300, { immediate: true })
 * immediateDebounced()
 * // The console.log is called immediately, and subsequent calls are delayed by 300ms
 *
 * // Maximum waiting time setting
 * const maxDebounced = debounce(handler, 500, { maxWait: 1000 })
 * maxDebounced()
 * setTimeout(() => {
 *   maxDebounced()
 *   setTimeout(() => {
 *     maxDebounced()
 *     setTimeout(() => {
 *       maxDebounced()
 *     }, 400)
 *   }, 400)
 * }, 400)
 * // If it is not called within 1000ms, it will be triggered at 1000ms
 *
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: { maxWait?: number; immediate?: boolean }
): (...args: Parameters<T>) => void {
  let timeout: number | undefined
  let lastArgs: Parameters<T> | undefined
  let lastThis: ThisParameterType<T> | undefined
  let maxTimeout: number | undefined

  const { immediate = false, maxWait } = options || {}

  const debounced = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): void {
    lastArgs = args
    lastThis = this

    if (maxWait !== undefined && !maxTimeout) {
      maxTimeout = setTimeout(() => {
        maxTimeout = undefined
        func.apply(lastThis, lastArgs)
      }, maxWait)
    }

    if (!timeout && immediate) {
      func.apply(lastThis, lastArgs)
    }
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      if (maxTimeout) {
        clearTimeout(maxTimeout)
        maxTimeout = undefined
      }

      func.apply(lastThis, lastArgs)
      lastArgs = undefined
      lastThis = undefined
    }, wait)
  }

  return debounced
}
