/**
 * {"zh": "判断入参是否为字符串。", "en": "Check if the input parameter is a string."}
 * @param {any} arg {"zh": "待判断的入参", "en": "Parameters for check"}
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
