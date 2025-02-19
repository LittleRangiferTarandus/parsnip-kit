import { isString } from './isString'

/**
 * @zh 检查入参是否只是包含数字字符的字符串。
 * @en Check if the input is string consisting only of numeric characters.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isNumberString } from 'parsnip-kit'
 *
 * isNumberString('12345') // true
 * isNumberString('123a5') // false
 * isNumberString('') // false
 * ```
 */
export function isNumberString(arg: any): arg is `${number}` {
  return isString(arg) && /^\d+$/.test(arg)
}
