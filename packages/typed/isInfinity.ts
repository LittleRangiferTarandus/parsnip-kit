import { isNumber } from './isNumber'

/**
 * @zh 判断入参是否为正负无穷大或正负无穷大值的`Number`对象。
 * @en Check if the input parameter is positive or negative infinity, or a Number object with a value of positive or negative infinity.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isInfinity } from 'parsnip-kit'
 *
 * isInfinity(123) // false
 * isInfinity('123') // false
 * isInfinity(NaN) // false
 * isInfinity(Infinity) // true
 * isInfinity(-Infinity) // true
 * isInfinity(new Number(Infinity)) // true
 * ```
 */
export function isInfinity(arg): arg is number {
  return (
    isNumber(arg) &&
    (typeof arg === 'number'
      ? arg === Infinity || arg === -Infinity
      : (arg as number).valueOf() === Infinity ||
        (arg as number).valueOf() === -Infinity)
  )
}
