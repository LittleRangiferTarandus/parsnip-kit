import { isObject } from '../typed/isObject'

const regSplitPath = /\.|\[(\d+)\]/

// prettier-ignore
{
/**
 * @zh 输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历取值。当遍历路径中断或值为`undefined`、`null`时，使用`defaultValue`作为默认值。
 * @en Input an object `obj` and a field path `path`, then traverse the object deeply according to the path to retrieve the value. If the traversal is interrupted (e.g., the path is invalid) or the value is undefined or null, use `defaultValue` as the default value.
 * @param {object} obj @zh 待取值的对象 @en Object to be got
 * @param {string} path @zh 字段所在的路径 @en Field path
 * @param {any} [defaultValue] @zh 默认值 @en Default value
 * @returns {any}
 * @example
 * ```ts
 * import { getByPath } from 'parsnip-kit'
 * 
 * getByPath({ a: 1 }, 'a') // 1
 * getByPath([1], '[0]') // 1
 * getByPath({ b: [0, 1, 2] }, 'b[2]') // 2
 * getByPath({ a: [{ b: { c: 'test' } }] }, 'a[0].b.c') // 'test'
 * getByPath({ a: 1 }, 'a[0].b.c') // undefined
 * getByPath({ a: 1 }, 'a[0].b.c', 'test') // 'test'
 * ```
 */
}

export function getByPath(obj: object, path: string, defaultValue?: any): any {
  const pathArr = path.split(regSplitPath).filter(Boolean)
  const len = pathArr.length
  let cur = obj
  for (let i = 0; i < len; i++) {
    if (isObject(cur)) {
      cur = cur[pathArr[i]]
    } else {
      return defaultValue
    }
  }
  return defaultValue ?? cur
}
