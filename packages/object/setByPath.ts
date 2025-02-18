import { splitToKeys } from '../string/splitToKeys'
import { isObject } from '../typed/isObject'

/**
 * @zh 输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历设置对象的值`value`。
 * @en Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to set the value `value`.
 * @param {object} obj @zh 待取值的对象 @en Object to be set
 * @param {string} path @zh 字段所在的路径 @en Field path
 * @param {any} value @zh 设置的值 @en Value to be set
 * @returns {undefined}
 * @example
 * ```ts
 * import { setByPath } from 'parsnip-kit'
 *
 * const test0 = {}
 * setByPath(test0, 'a', 1) // { a: 1 }
 *
 * const test1 = []
 * setByPath(test1, '[0]', 1) // [1]
 *
 * const test2 = {}
 * setByPath(test2, '[0]', 1) // { 0: 1 }
 *
 * const test3 = {}
 * setByPath(test3, 'b[2]', 2) // { b: [<empty>, <empty>, 2] }
 *
 * const test4 = { a: 1 }
 * setByPath(test4, 'a[0]', 'test') // { a: ['test'] }
 *
 * const test5 = { a: 1 }
 * setByPath(test5, 'b', 2) // { a: 1, b: 2 }
 * ```
 */
export function setByPath(obj: object, path: string, value: any) {
  const pathArr = splitToKeys(path)
  const len = pathArr.length
  let cur = obj
  for (let i = 0; i < len; i++) {
    let numIdx: undefined | number
    if (/\d+/.test(pathArr[i])) {
      numIdx = parseInt(pathArr[i])
    }
    if (i === len - 1) {
      cur[numIdx === undefined ? pathArr[i] : numIdx] = value
    } else {
      const nextIsNumberIdx = /\d+/.test(pathArr[i + 1])
      const idx = numIdx === undefined ? pathArr[i] : numIdx
      if (!isObject(cur[idx])) {
        cur[idx] = !nextIsNumberIdx ? {} : []
      }
      cur = cur[idx]
    }
  }
}
