import { ObjectLike } from '../common/types'
import { getTypeTag } from '../typed/getTypeTag'
import { isPrimitive } from '../typed/isPrimitive'
import { isEqualStrict } from './isEqualStrict'

/**
 * @zh 输入两个参数`arg1`和`arg2`，执行深比较检查它们每个属性，返回它们是否相等，不支持循环引用。
 *
 * 支持基本类型、普通对象（`arg => Object.prototype.toString.apply(arg).slice(8, -1)`返回`"Object"`），以及包括这些在内的内置对象：`Array`、`Map`、`Set`、`Date`、`RegExp`。
 *
 * 对于不支持的内置对象，例如`Blob`、`File`、`Error`、`Function`、`Promise`、`HTMLElement`等等，将调用 [isEqualStrict](../object/isEqualStrict) 进行严格比较。
 *
 * 对于普通对象，仅检查它们的可枚举属性，不会检查原型链。
 *
 * 支持深比较的内置对象：
 *
 * |分类|支持的对象|
 * |-|-|
 * |包装类|`String` `Number` `Boolean`|
 * |集合类型|`Object` `Array` `Map` `Set`|
 * |时间日期|`Date`|
 * |正则表达式|`RegExp`|
 * |文件和流| `ArrayBuffer`|
 * |`TypedArray `|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|
 *
 * @en Input two parameters `arg1` and `arg2`, perform a deep comparison to check each of their properties, and return whether they are equal.
 *
 * Supports basic types, plain objects (`arg => Object.prototype.toString.apply(arg).slice(8, -1)` returns `"Object"`), and built-in objects including these: Array, Map, Set, Date, RegExp.
 *
 * For unsupported built-in objects, such as `Blob`, `File`, `Error`, `Function`, `Promise`, `HTMLElement`, etc., [isEqualStrict](../object/isEqualStrict) will be called for strict comparison.
 *
 * For plain objects, only their enumerable properties are checked, and the prototype chain is not examined.
 *
 * Built-in objects supported for deep comparison:
 *
 * |Category|Supported Objects|
 * |-|-|
 * |Wrapper Classes|`String` `Number` `Boolean`|
 * |Collection Types|`Object` `Array` `Map` `Set`|
 * |Date and Time|`Date`|
 * |Regular Expressions|`RegExp`|
 * |Files and Streams| `ArrayBuffer`|
 * |`TypedArray`|`Int8Array` `Uint8Array` `Uint8ClampedArray` `Int16Array` `Uint16Array` `Int32Array` `Uint32Array` `Float32Array` `Float64Array` `BigInt64Array` `BigUint64Array`|
 *
 * @param {any} arg1 @zh 待比较的变量 @en Variable to compare
 * @param {any} arg2 @zh 待比较的变量 @en Variable to compare
 * @returns {boolean}
 * @example
 * ```ts
 * import { isEqual } from 'parsnip-kit'
 *
 * const arr1 = [1, [2, 3]]
 * const arr2 = [1, [2, 3]]
 * isEqual(arr1, arr2) // true
 * 
 * const obj1 = { a: 1, b: { c: 2 } }
 * const obj2 = { a: 1, b: { c: 2 } }
 * isEqual(obj1, obj2) // true
 * 
 * const obj3 = { project: ['A', 'B', 'C'], startTime: new Date('2025-1-1'), status: { finish: false, block: true } }
 * const obj4 = { project: ['A', 'B', 'C'], startTime: new Date('2025-1-1'), status: { finish: false, block: true } }
 * isEqual(obj3, obj4) // true
 * 
 * const map1 = new Map([[['a'], { data: 1 }], [['b'], { data: 2 }]])
 * const map2 = new Map([[['a'], { data: 1 }], [['b'], { data: 2 }]])
 * isEqual(map1, map2) // true
 * ```
 */
export function isEqual(arg1: any, arg2: any) {
  const cache = new WeakMap()
  return isEqualHelper(arg1, arg2, cache)
}
function isEqualHelper(arg1: any, arg2: any, cache: WeakMap<any, any>) {
  if (isPrimitive(arg1) || isPrimitive(arg2)) {
    return isEqualStrict(arg1, arg2)
  }
  if (isEqualStrict(arg1, arg2)) {
    return true
  }
  const typeTag1 = getTypeTag(arg1)
  const typeTag2 = getTypeTag(arg2)
  if (typeTag1 !== typeTag2) {
    return false
  }
  if (cache.has(arg1) && cache.get(arg1)?.has(arg2)) {
    return cache.get(arg1)!.get(arg2)
  } else {
    let arg1Cache = cache.get(arg1)
    if (!arg1Cache) {
      arg1Cache = new WeakMap(),
      cache.set(arg1, arg1Cache)
    }
    arg1Cache
  }
  if (Array.isArray(arg1)) {
    return isArrayAndObjectEqual(arg1, arg2)
  }
  switch (typeTag1) {
    case 'Number':
    case 'Boolean':
    case 'Date':
      return isEqualStrict(arg1.valueOf(), arg2.valueOf())
    case 'String':
    case 'RegExp':
      return arg1.toString() === arg2.toString()
    case 'ArrayBuffer':
      return isArrayBuffersEqual(arg1, arg2)
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
      return isTypeArraysEqual(arg1, arg2)
    case 'Object':
      return isArrayAndObjectEqual(arg1, arg2)
    case 'Set':
      return isSetEqual(arg1, arg2)
    case 'Map':
      return isMapEqual(arg1, arg2)
    default:
      return isEqualStrict(arg1, arg2)
  }
}

function isMapEqual(arg1: Map<any, any>, arg2: Map<any, any>) {
  if (arg1.size !== arg2.size) {
    return false
  }
  const keys1 = [...arg1.keys()]
  const keys2 = [...arg2.keys()]

  const len = arg1.size
  for (let i = 0; i < len; i++) {
    if (!isEqual(keys1[i], keys2[i])) {
      return false
    }
    if (!isEqual(arg1.get(keys1[i]), arg2.get(keys2[i]))) {
      return false
    }
  }
  return true
}

function isSetEqual(arg1: Set<any>, arg2: Set<any>) {
  if (arg1.size !== arg2.size) {
    return false
  }
  const values1 = [...arg1.values()]
  const values2 = [...arg2.values()]
  const len = arg1.size
  for (let i = 0; i < len; i++) {
    if (!isEqual(values1[i], values2[i])) {
      return false
    }
  }
  return true
}

function isArrayAndObjectEqual(
  arg1: any[] | ObjectLike,
  arg2: any[] | ObjectLike
) {
  const keys1 = Object.keys(arg1)
  const keys2 = Object.keys(arg2)
  if (keys1.length !== keys2.length) {
    return false
  }

  const len = keys1.length
  for (let i = 0; i < len; i++) {
    if (!Object.prototype.hasOwnProperty.call(arg2, keys1[i])) {
      return false
    }
    if (!isEqual(arg1[keys1[i]], arg2[keys1[i]])) {
      return false
    }
  }
  return true
}

function isArrayBuffersEqual(buffer1: ArrayBuffer, buffer2: ArrayBuffer) {
  if (buffer1.byteLength !== buffer2.byteLength) {
    return false
  }
  const view1 = new Uint8Array(buffer1)
  const view2 = new Uint8Array(buffer2)

  return isTypeArraysEqual(view1, view2)
}

function isTypeArraysEqual(a, b) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (!isEqualStrict(a[i], b[i])) return false
  }
  return true
}
