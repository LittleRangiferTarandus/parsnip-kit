/**
 * 判断入参是否为字符串。
 * @param {any} - 待判断的入参
 * @returns {boolean}
 * @example
 * ```ts
 * isString('test') // true
 * isString(123) // false
 * ```
 */
export function isString(arg): arg is string {
  return typeof arg === 'string' || arg instanceof String
}
