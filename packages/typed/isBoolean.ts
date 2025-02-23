/**
 * @zh 判断入参是否为基本类型布尔值或者`Boolean`实例。
 * @en Check whether the input parameter is a primitive boolean or a `Boolean` instance.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isBoolean } from 'parsnip-kit'
 *
 * isBoolean('test') // false
 * isBoolean(1) // false
 * isBoolean('') // false
 * isBoolean(null) // false
 * isBoolean(undefined) // false
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(Boolean()) // true
 * ```
 */
export function isBoolean(arg): arg is boolean {
  return typeof arg === 'boolean' || arg instanceof Boolean
}
