/**
 * @zh 判断入参是否为对象，包括一般的对象（`{ key: 'value }`）、函数（`function() {}`）、基本类型的包装类实例（`new Number(1)`）等变量都会返回`true`。
 * @en Check whether the input parameter is an object, including general objects (`{ key: 'value' }`), functions (`function() {}`), and instances of primitive type wrappers (`new Number(1)`), all of which would return `true`.
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isObject } from 'parsnip-kit'
 * 
 * isObject(null) // false
 * isObject({}) // true
 * isObject(() => {}) // true
 * isObject(new Number()) // true
 * isObject(/test/) // true
 * isObject(new Date()) // true
 * ```
 */
export function isObject(arg): arg is object {
  return arg !== null && (typeof arg === "object" || typeof arg === "function")
}
