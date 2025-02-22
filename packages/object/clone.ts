import { ObjectLike, PrimitiveType } from '../common/types'
import { isObjectLike } from '../main'
import { getTypeTag } from '../typed/getTypeTag'

/**
 * @zh 输入一个参数`arg`，返回它的浅复制。
 *
 * 支持基本类型、普通对象（`arg => Object.prototype.toString.apply(arg).slice(8, -1)`返回`Object`），以及包括这些在内的内置对象：`Array`、`Map`、`Set`、`Date`、`RegExp`。
 *
 * 和 Lodash 处理思路类似，对于不支持复制的内置对象，例如`Error`、`Function`、`Promise`、`HTMLElement`等等，将返回空的普通对象。
 *
 * 对于普通对象，会尝试以它的原型构造新的对象作为浅复制，如果没有原型则创建空对象。然后加上入参`arg`的可枚举属性。
 *
 * 支持复制的内置对象：
 *
 * |分类|支持的对象|
 * |-|-|
 * |包装类|`String` `Number` `Boolean`|
 * |集合类型|`Object` `Array` `Map` `Set`|
 * |时间日期|`Date`|
 * |正则表达式|`RegExp`|
 * |文件和流|`Blob` `File` `ArrayBuffer`|
 * |`TypedArray `|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|
 *
 * @en Accepts an argument `arg` and returns its shallow clone.
 *
 * Supports basic types, plain objects (`Object.prototype.toString.apply(arg).slice(8, -1)` returns `Object`), as well as built-in objects including these: `Array`, `Map`, `Set`, `Date`, `RegExp`.
 *
 * Similar to Lodash's approach, for built-in objects that are not cloneable, such as `Error`, `Function`, `Promise`, `HTMLElement`, etc., an empty plain object will be returned.
 *
 * For plain objects, it will attempt to construct a new object based on its prototype as a shallow clone. If there is no prototype, an empty object will be created. Then, the enumerable properties of the input argument `arg` will be added.
 *
 * Supported built-in objects for cloning:
 *
 * |Category|Supported Objects|
 * |-|-|
 * |Wrapper Classes|`String` `Number` `Boolean`|
 * |Collection Types|`Object` `Array` `Map` `Set`|
 * |Date and Time|`Date`|
 * |Regular Expressions|`RegExp`|
 * |Files and Streams|`Blob` `File` `ArrayBuffer`|
 * |`TypedArray `|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|
 *
 * @param {PrimitiveType | ObjectLike} obj @zh 待复制的参数 @en Parameter to be cloned
 * @returns {PrimitiveType | ObjectLike}
 * @refer [PrimitiveType](../common/types#primitivetype) [ObjectLike](../common/types#objectlike)
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
 * clone(new Date(0)) // Thu Jan 01 1970 08:00:00
 * clone(/test/) // /test/
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
 * const cloneSet = clone(set) // Set(3) {{ data: 1 }, { data: 2 }, { data: 3 }}
 * cloneSet === set // false
 *
 * const map = new Map([['a', { data: 1 }], ['b', { data: 2 }], ['c', { data: 3 }]])
 * const cloneMap = clone(map) // Map(3) {'a' => { data: 1 }, 'b' => { data: 2 }, 'c' => { data: 3 }}
 * cloneMap === map // false
 * ```
 */

export function clone<T extends PrimitiveType | ObjectLike>(arg: T) {
  if (isObjectLike(arg)) {
    let ans: any = {}
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
    } else if (Array.isArray(arg)) {
      ans = new Array(arg.length)
      for (const key in arg as ObjectLike) {
        ans[key] = arg[key]
      }
    } else {
      const argTypeTag = getTypeTag(arg)
      ans = cloneNotCollectionObject(arg, argTypeTag)
      if (!ans) {
        if (argTypeTag === 'Object') {
          if ((arg as any).__proto__) {
            ans = Object.create((arg as any).__proto__)
            Object.defineProperty(ans, 'constructor', {
              value: arg.constructor,
              writable: true,
              enumerable: false,
              configurable: true
            })
          } else {
            ans = {}
          }
          for (const key in arg as ObjectLike) {
            ans[key] = arg[key]
          }
        } else {
          ans = {}
        }
      }
    }
    return ans as T
  } else {
    return arg as T
  }
}

export const cloneNotCollectionObject = (
  arg: ObjectLike,
  argTypeTag: string,
  cache?: WeakMap<any, any>
) => {
  if (cache && cache.has(arg)) {
    return cache.get(arg)
  }
  let ans
  switch (argTypeTag) {
    case 'Number':
      ans = new Number(arg.valueOf())
      break
    case 'String':
      ans = new String(arg.valueOf())
      break
    case 'Boolean':
      ans = new Boolean(arg.valueOf())
      break
    case 'Date':
      ans = new Date(arg.valueOf() as number)
      break
    case 'RegExp':
      ans = new RegExp(arg.toString())
      break
    case 'Blob':
      ans = new Blob([arg as Blob], { type: arg.type })
      break
    case 'File':
      ans = new File([arg as Blob], arg.name, { type: arg.type })
      break
    case 'ArrayBuffer':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      ans = arg.slice()
      break
  }
  if (cache && ans) {
    cache.set(arg, ans)
  }
  return ans
}
