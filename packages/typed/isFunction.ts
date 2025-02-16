/**
 * @zh 判断入参是否为函数，包括类（`class {}`）、生成器（`function*() {}`）、异步函数（`async function() {}`）。
 * @en Check if the input parameter is a function, including classes (`class {}`), generator functions (`function*() {}`), and async functions (`async function() {}`).
 * @param {any} arg @zh 待判断的入参 @en Parameters for check
 * @returns {boolean}
 * @example
 * ```ts
 * import { isFunction } from 'parsnip-kit'
 * 
 * isFunction({}) // false
 * isFunction(() => {}) // true
 * isFunction(class {}) // true
 * isFunction(function*() {}) // true
 * isFunction(async () => {}) // true
 * ```
 */
export function isFunction(arg): arg is Function {
  return typeof arg === 'function'
}
