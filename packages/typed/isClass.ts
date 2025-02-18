import { isFunction } from './isFunction'
import { isObject } from './isObject'

// prettier-ignore
{
/**
 * @zh 判断入参是否为类。
 * @en Check if the input parameter is a class.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isClass } from 'parsnip-kit'
 * 
 * isClass({}) // false
 * isClass(() => {}) // false
 * isClass(class {}) // true
 * ```
 */
}

export function isClass(arg): arg is Function {
  return (
    isFunction(arg) &&
    isObject(arg.prototype) &&
    isFunction(arg.prototype.constructor)
  )
}
