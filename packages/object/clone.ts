import { ObjectLike, PrimitiveType } from '../common/types'
import { isObjectLike } from '../main'

/**
 * @zh 输入一个参数`arg`，返回它的浅复制，支持基本类型、普通对象（`{}`）、集合（`Set`）、哈希表（`Map`）、数组（`Array`）。
 * @en Takes a parameter `arg` and returns a shallow copy of it, supporting primitive type, plain object, `Set`, `Map`, `Array`.
 * @param {PrimitiveType | ObjectLike} obj @zh 待复制的参数 @en Parameter to be cloned
 * @returns {PrimitiveType | ObjectLike}
 * @example
 * ```ts
 * import { clone } from 'parsnip-kit'
 *
 * clone(undefined) // undefined
 * clone(null) // null
 * clone(123) // 123
 * clone('test') // 'test'
 * clone(true) // true
 * clone(BigInt(123)) // 123n
 * clone(Symbol('test')) // Symbol(test)
 *
 * const arr = [{ data: 1 }, { data: 2 }, { data: 3 }]
 * const cloneArr = clone(arr) // [{ data: 1 }, { data: 2 }, { data: 3 }]
 * cloneArray === arr // false
 *
 * const obj = { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
 * const cloneObj = clone(obj) // { a: { data: 1 }, b: { data: 2 }, c: { data: 3 } }
 * cloneObj === obj // false
 *
 * const set = new Set([{ data: 1 }, { data: 2 }, { data: 3 }])
 * const cloneSet = clone(set) // Set(3) {{ data: 1 }, { data: 2 }, { data: 3 }}
 * cloneSet === set // false
 *
 * const map = new Map([['a', { data: 1 }], ['b', { data: 2 }], ['c', { data: 3 }]])
 * const cloneMap = clone(map) // Map(3) {'a' => { data: 1 }, 'b' => { data: 2 }, 'c' => { data: 3 }}
 * cloneMap === map // false
 * ```
 */

export function clone<T extends PrimitiveType | ObjectLike>(arg: T) {
  if (isObjectLike(arg)) {
    let ans
    if (arg instanceof Map) {
      ans = new Map()
      for (const entry of arg.entries()) {
        ans.set(entry[0], entry[1])
      }
    } else if (arg instanceof Set) {
      ans = new Set()
      for (const value of arg.values()) {
        ans.add(value)
      }
    } else {
      ans = Array.isArray(arg) ? new Array(arg.length) : {}
    }
    for (const key in arg as ObjectLike) {
      ans[key] = arg[key]
    }
    return ans as T
  } else {
    return arg as T
  }
}
