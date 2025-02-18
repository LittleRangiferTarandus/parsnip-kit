// prettier-ignore
{
/**
 * @zh 判断入参是否为`undefined`。
 * @en Check if the input parameter is a `undefined`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isUndefined } from 'parsnip-kit'
 * 
 * isUndefined(null) // false
 * isUndefined(void 0) // true
 * isUndefined(undefined) // true
 * ```
 */
}
export function isUndefined(arg): arg is undefined {
  return arg === undefined
}
