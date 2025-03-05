import { ObjectLike } from '../common/types'
import { getTypeTag } from '../typed/getTypeTag'
import { isFunction } from '../typed/isFunction'
import { isObject } from '../typed/isObject'
import { cloneNotCollectionObject } from './clone'

type CustomizeClone = (
  arg: any,
  key: string | undefined,
  cache: WeakMap<any, any>,
  defaultClone4Object: (
    arg: ObjectLike,
    cache: WeakMap<any, any>,
    customizeClone?: CustomizeClone
  ) => any
) => any

/**
 * @zh 输入一个参数`arg`，返回它的深复制。
 *
 * 支持的数据类型和 [clone](../object/clone) 函数一致。对于不支持的对象，参考 Lodash 的处理方法，返回它们自身，保证复制结果的可用性。
 *
 * 可选参数`customizeClone`，用于替代复制不支持的对象和普通对象时的行为。
 * @en Accepts an argument `arg` and returns its deep clone.
 *
 * Supports the same data types as the [clone](../object/clone) function. For objects that are not supported, refers to Lodash's handling approach by returning these objects themselves to ensure the usability of the copy results.
 *
 * An optional parameter `customizeClone` used to override the behavior when cloning unsupported objects and plain objects.
 *
 * @template {} T @zh 待复制参数的类型 @en Type of parameter to be cloned
 * @param {T} obj @zh 待复制的参数 @en Parameter to be cloned
 * @param {(arg: any, key: string | undefined, cache: WeakMap<any, any>, defaultClone4Object: (arg: ObjectLike, cache: WeakMap<any, any>, customizeClone?: CustomizeClone) => any) => any} [customizeClone] @zh 自定义复制普通对象和不支持的内置对象的行为 @en Customize the cloning behavior for plain objects and unsupported built-in objects
 * @returns {T}
 * @version 0.0.1
 * @example
 * ```ts
 * import { cloneDeep, getTypeTag } from 'parsnip-kit'
 *
 * cloneDeep('test') // 'test'
 *
 * const testObj0 = [
 *   { label: 'Time', dataIndex: 'time', validation: /^\d+$/, min: new Date() },
 *   { label: 'Name', dataIndex: 'name', validation: (value) => !!(value ?? '').trim() }
 * ]
 * const clonedTestObj0 = cloneDeep(testObj0)
 * // [
 * //   { label: 'Time', dataIndex: 'time', validation: /^\d+$/, min: new Date() }
 * //   { label: 'Name', dataIndex: 'name', validation: (value) => !!(value ?? '').trim() }
 * // ]
 *
 * clonedTestObj0 === testObj0 // false
 * clonedTestObj0[0] === testObj0[0] // false
 * clonedTestObj0[0].validation === testObj0[0].validation // false
 * clonedTestObj0[1] === testObj0[1] // false
 * clonedTestObj0[1].validation === testObj0[1].validation // true
 *
 * const testClass = class {
 *   #privateData
 *   publicData
 *   constructor(publicData, privateData) {
 *     this.#privateData = privateData
 *     this.publicData = publicData
 *   },
 *   getPrivateData() {
 *     return this.#privateData
 *   }
 * }
 * const testObj1 = {
 *   data: new testClass('publicData', 'privateData')
 * }
 * const clonedTestObj1 = cloneDeep(testObj1)
 *
 * testObj1.data.getPrivateData() // 'privateData'
 * clonedTestObj1.data.getPrivateData()
 * // TypeError: Cannot read private member #privateData from an object whose class did not declare it
 *
 * const testCloner = (
 *   value: any,
 *   key: string | undefined,
 *   cache: WeakMap<any, any>,
 *   defaultClone4Object
 * ) => {
 *   if (cache.has(value)) {
 *     return cache.get(value)
 *   }
 *   if (getTypeTag(value) === 'Object') {
 *     if (value instanceof testClass) {
 *       return new testClass(value.publicData, value.getPrivateData())
 *     } else {
 *       return defaultClone4Object(value, cache, testCloner)
 *     }
 *   } else {
 *     return value
 *   }
 * }
 * const clonedTestObj2 = cloneDeep(
 *   testObj1,
 *   testCloner
 * )
 * clonedTestObj2.data.getPrivateData() // 'privateData'
 *
 * const testCircle: any = {}
 * testCircle.a = testCircle
 * const clonedTestObj3 = cloneDeep(testCircle)
 * clonedTestObj3.a === clonedTestObj3 // true
 * ```
 */

export function cloneDeep<T>(arg: T, customizeClone?: CustomizeClone) {
  const cache = new WeakMap()
  return cloneDeepHelper(arg, cache, undefined, customizeClone) as T
}

function cloneWithCache(
  arg: any,
  cache: WeakMap<any, any>,
  key?: string,
  customizeClone?: CustomizeClone
) {
  let value = arg
  if (isObject(arg)) {
    if (cache.has(arg)) {
      value = cache.get(arg)
    } else {
      const clonedValue = cloneDeepHelper(arg, cache, key, customizeClone)
      if (clonedValue) {
        value = clonedValue
        cache.set(arg, clonedValue)
      }
    }
  }
  return value
}

function cloneDeepHelper(
  arg: any,
  cache: WeakMap<any, any>,
  key?: string,
  customizeClone?: CustomizeClone
) {
  if (isObject(arg)) {
    let ans: any = {}
    if (arg instanceof Map) {
      ans = new Map()
      for (const entry of arg.entries()) {
        ans.set(
          cloneWithCache(entry[0], cache, undefined, customizeClone),
          cloneWithCache(entry[1], cache, undefined, customizeClone)
        )
      }
    } else if (arg instanceof Set) {
      ans = new Set()
      for (const value of arg.values()) {
        ans.add(cloneWithCache(value, cache, undefined, customizeClone))
      }
    } else if (Array.isArray(arg)) {
      ans = new Array(arg.length)
      const argKeys = Object.keys(arg)
      for (const key of argKeys) {
        ans[key] = cloneWithCache(arg[key], cache, key, customizeClone)
      }
    } else {
      const argTypeTag = getTypeTag(arg)
      ans = cloneNotCollectionObject(arg, argTypeTag, cache)
      if (!ans) {
        if (isFunction(customizeClone)) {
          ans = customizeClone(arg, key, cache, defaultClone4Object)
        } else if (argTypeTag === 'Object') {
          ans = defaultClone4Object(arg, cache, customizeClone)
        } else {
          ans = arg
        }
      }
    }
    return ans
  } else {
    return arg
  }
}

function defaultClone4Object(
  arg: ObjectLike,
  cache: WeakMap<any, any>,
  customizeClone?: CustomizeClone
) {
  if (cache.has(arg)) {
    return cache.get(arg)
  }
  let ans
  if (arg.__proto__) {
    ans = Object.create(arg.__proto__)
    Object.defineProperty(ans, 'constructor', {
      value: arg.constructor,
      writable: true,
      enumerable: false,
      configurable: true
    })
  } else {
    ans = {}
  }
  cache.set(arg, ans)
  const argKeys = Object.keys(arg)
  for (const key of argKeys) {
    ans[key] = cloneWithCache(arg[key], cache, key, customizeClone)
  }
  return ans
}
