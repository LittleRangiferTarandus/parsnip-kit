/**
 * @zh 对给定的函数执行柯里化。
 *
 * 柯里化是函数式编程中的一个基本概念，它将一个多参数函数转换为一系列接受单一参数的函数，从而允许逐步传递参数。
 * @en Curries the given function.
 *
 * Curry, a fundamental concept in functional programming, involves transforming a function with multiple parameters into a sequence of functions that each accept a single parameter, facilitating the passing of parameters one at a time.
 * @param {Function} fn @zh 需要进行柯里化的函数 @en Function to be curried
 * @returns {Function}
 * @version 0.0.1
 * @example
 * ```typescript
 * import { curry } from 'parsnip-kit'
 *
 * function add(a, b) { return a + b }
 *
 * const curriedAdd = curry(add)
 * curriedAdd(2)(3) // 5
 * curriedAdd(2, 3) // 5
 *
 * function greet(name, greeting = 'Hello') { return `${greeting}, ${name}!` }
 *
 * const curriedGreet = curry(greet)
 * curriedGreet('Alice', 'Hi') // 'Hi, Alice!'
 * curriedGreet('Bob') // 'Hello, Bob!'
 * ```
 *
 */
export function curry(fn: (...args: any[]) => any) {
  const argsLength = fn.length

  return function curried(...args: any[]) {
    if (args.length >= argsLength) {
      return fn.apply(this, args)
    } else {
      return function (...restArgs: any[]) {
        return curried.apply(this, args.concat(restArgs))
      }
    }
  }
}
