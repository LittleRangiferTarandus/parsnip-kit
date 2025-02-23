/**
 * @zh 判断入参是否为基本类型数字或者`Number`实例。
 * @en Check whether the input parameter is a primitive number or a `Number` instance.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isNumber } from 'parsnip-kit'
 *
 * isNumber('test') // false
 * isNumber(123) // true
 * isNumber(new Number(123)) // true
 * isNumber(Infinity) // true
 * isNumber(NaN) // true
 * ```
 */
export function isNumber(arg): arg is number {
  return typeof arg === 'number' || arg instanceof Number
}
