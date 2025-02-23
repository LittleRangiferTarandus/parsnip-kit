/**
 * @zh 输入两个参数`arg1`和`arg2`，返回它们是否严格相等。
 * @en Input two parameters `arg1` and `arg2`, and return whether they are strictly equal.
 * @param {any} arg1 @zh 待比较的变量 @en Variable to compare
 * @param {any} arg2 @zh 待比较的变量 @en Variable to compare
 * @returns {boolean}
 * @example
 * ```ts
 * import { isEqualStrict } from 'parsnip-kit'
 *
 * isEqualStrict(1, 1) // true
 * isEqualStrict(+0, -0) // true
 * isEqualStrict(NaN, NaN) // true
 * isEqualStrict({ a: 1 }, { a: 1 }) // false
 * ```
 */
export function isEqualStrict(arg1: any, arg2: any) {
  if (arg1 === 0 && arg2 === 0) {
    return true
  }
  return Object.is(arg1, arg2)
}
