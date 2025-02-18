/**
 * @zh 判断入参是否为`bigint`。
 * @en Check if the input parameter is a `bigint`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isBigInt } from 'parsnip-kit'
 *
 * isBigInt(BigInt(123)) // true
 * isBigInt(123) // false
 * isBigInt(NaN) // false
 * isBigInt(Infinity) // false
 * ```
 */
export function isBigInt(arg): arg is bigint {
  return typeof arg === 'bigint'
}
