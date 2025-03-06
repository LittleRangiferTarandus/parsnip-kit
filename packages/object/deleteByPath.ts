import { splitToKeys } from '../string/splitToKeys'
import { isNumberString } from '../typed/isNumberString'
import { isObject } from '../typed/isObject'

/**
 * @zh 输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历，删除路径末端的字段。
 * @en Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to delete the field at the end of the path.
 * @param {object} obj @zh 待删除的对象 @en Object to be deleted
 * @param {string} path @zh 字段所在的路径 @en Field path
 * @returns {void}
 * @version 0.0.1
 * @example
 * ```ts
 * import { deleteByPath } from 'parsnip-kit'
 *
 * const test0 = { a: 1 }
 * deleteByPath(test0, 'a') // {}
 *
 * const test1 = [1]
 * deleteByPath(test1, '[0]') // []
 *
 * const test2 = { a: { b: { c: 1 } }, d: [2] }
 * deleteByPath(test2, 'a.b') // { a: {}, d: [2] }
 * ```
 */

export function deleteByPath(obj: object, path: string) {
  const pathArr = splitToKeys(path)
  const len = pathArr.length
  let cur = obj
  for (let i = 0; i < len; i++) {
    if (isObject(cur)) {
      if (i < len - 1) {
        cur = cur[pathArr[i]]
      } else {
        if (isNumberString(pathArr[i]) && Array.isArray(cur)) {
          cur.splice(parseInt(pathArr[i]), 1)
        } else {
          delete cur[pathArr[i]]
        }
      }
    } else {
      throw TypeError(
        `${pathArr
          .slice(0, i + 1)
          .reduce(
            (pre, cur, index) =>
              pre +
              (isNumberString(cur)
                ? `[${cur}]`
                : index === 0
                  ? `${cur}`
                  : `.${cur}`),
            ''
          )} is not an object.`
      )
    }
  }
}
