import { isInfinity } from './isInfinity'
import { isNanValue } from './isNanValue'
import { isNumber } from './isNumber'

/**
 * @zh 判断入参是否为整数或整数值的`Number`对象。
 * @en Check if the input parameter is an integer or a `Number` object with an integer value.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isInt } from 'parsnip-kit'
 *
 * isInt(123) // true
 * isInt(new Number(123)) // true
 * isInt(123.1) // false
 * isInt(BigInt(123)) // false
 * isInt(NaN) // false
 * isInt(Infinity) // false
 * ```
 */
export function isInt(arg): arg is number {
  return (
    isNumber(arg) &&
    !isInfinity(arg) &&
    !isNanValue(arg) &&
    (typeof arg === 'number'
      ? arg === Math.floor(arg)
      : (arg as number).valueOf() === Math.floor(arg))
  )
}
