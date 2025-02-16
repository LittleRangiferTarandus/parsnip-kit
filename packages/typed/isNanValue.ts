import { isNumber } from "./isNumber";

/**
 * @zh 判断入参是否为`NaN`或`NaN`值的`Number`对象。
 * @en Check if the input parameter is a `NaN` or a `Number` object with a `NaN` value.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isNaN } from 'parsnip-kit'
 * 
 * isNaN(123) // false
 * isNaN('123') // false
 * isNaN(Infinity) // false
 * isNaN(NaN) // true
 * isNaN(new Number(NaN)) // true
 * ```
 */
export function isNanValue(arg): arg is number {
  return isNumber(arg) && (
    typeof arg === 'number'
      ? Number.isNaN(arg)
      : Number.isNaN((arg as Number).valueOf())
  )
}
