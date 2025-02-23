/**
 * @zh 判断入参是否为`symbol`。
 * @en Check if the input parameter is a `symbol`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @version 0.0.1
 * @example
 * ```ts
 * import { isSymbol } from 'parsnip-kit'
 *
 * isSymbol(Symbol('test')) // true
 * isSymbol('test') // false
 * ```
 */
export function isSymbol(arg): arg is symbol {
  return typeof arg === 'symbol'
}
