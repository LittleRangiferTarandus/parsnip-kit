import { isInfinity } from './isInfinity'
import { isNanValue } from './isNanValue'
import { isNumber } from './isNumber'

// prettier-ignore
{
/**
 * @zh 判断入参是否为浮点数或浮点数值的`Number`对象。
 * @en Check if the input parameter is a float or a `Number` object with a float value.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isFloat } from 'parsnip-kit'
 * 
 * isFloat(123.1) // true
 * isFloat(new Number(123.1)) // true
 * isFloat(123) // false
 * isFloat(BigInt(123)) // false
 * isFloat(NaN) // false
 * isFloat(Infinity) // false
 * ```
 */
}
export function isFloat(arg): arg is number {
  return (
    isNumber(arg) &&
    !isInfinity(arg) &&
    !isNanValue(arg) &&
    (typeof arg === 'number'
      ? arg !== Math.floor(arg)
      : (arg as number).valueOf() !== Math.floor(arg))
  )
}
