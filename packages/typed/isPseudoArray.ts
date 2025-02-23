import { isObject } from './isObject'

/**
 * @zh 判断入参是否为伪数组，即可以通过数字索引访问（一般的 JS 对象都满足这一点），拥有数字`length`的对象。
 * @en Determine whether the input parameter is a pseudo-array, i.e., an object that can be accessed via numeric indices (which is true for most ordinary JavaScript objects) and has a numeric `length` property.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isPseudoArray } from 'parsnip-kit'
 *
 * isPseudoArray({}) // false
 * isPseudoArray({ length: 1 }) // true
 * isPseudoArray([]) // true
 *
 * function test () {
 *  isPseudoArray(arguments) // true
 * }
 * test()
 *
 * // in browser
 * isPseudoArray(document.querySelectorAll('div')) // true
 * ```
 */
export function isPseudoArray(arg): arg is Function {
  return isObject(arg) && 'length' in arg && typeof arg.length === 'number'
}
