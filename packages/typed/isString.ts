// prettier-ignore
{
/**
 * @zh 判断入参是否为基本类型字符串或者`String`实例。
 * @en Check whether the input parameter is a primitive string or a `String` instance.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isString } from 'parsnip-kit'
 * 
 * isString('test') // true
 * isString(new String('test')) // true
 * isString(123) // false
 * ```
 */
}
export function isString(arg): arg is string {
  return typeof arg === 'string' || arg instanceof String
}
