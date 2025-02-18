// prettier-ignore
{
/**
 * @zh 判断入参是否为对象，不包括函数。
 * @en Check if the input parameter is an object, excluding functions.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isObjectLike } from 'parsnip-kit'
 * 
 * isObjectLike({}) // true
 * isObjectLike(() => {}) // false
 * ```
 */
}
export function isObjectLike(
  arg,
): arg is Record<string | number | symbol, any> {
  return arg !== null && typeof arg === 'object'
}
