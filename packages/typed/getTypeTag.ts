/**
 * @zh 返回传入参数的类型标签，通过调用`Object.prototype.toString`方法实现。
 * @en Returns the type tag of the provided argument using `Object.prototype.toString`.
 * @param {any} arg @zh 待检测的参数 @en The argument to check
 * @returns {string}
 * @example
 * import { getTypeTag } from 'parsnip-kit'
 *
 * getTypeTag('hello') // 'String'
 * getTypeTag(42) // 'Number'
 * getTypeTag(null) // 'Null'
 * getTypeTag([1, 2, 3]) // 'Array'
 * getTypeTag({ a: 1 }) // 'Object'
 * getTypeTag(() => {}) // 'Function'
 */
export const getTypeTag = (arg) =>
  Object.prototype.toString.apply(arg).slice(8, -1)
