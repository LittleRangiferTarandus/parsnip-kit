// prettier-ignore
{
/**
 * @zh 判断入参是否为`null`。
 * @en Check if the input parameter is a `null`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isNull } from 'parsnip-kit'
 * 
 * isNull(null) // true
 * isNull({}) // false
 * isNull(undefined) // false
 * ```
 */
}
export function isNull(arg): arg is null {
  return arg === null
}
