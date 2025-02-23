/**
 * @zh 判断入参是否为数组。
 * @en Check if the input parameter is an array.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isArray } from 'parsnip-kit'
 *
 * isArray([1, 2, 3]) // true
 * isBigInt(`123`) // false
 * ```
 */
export function isArray(arg): arg is any[] {
  return Array.isArray(arg)
}
