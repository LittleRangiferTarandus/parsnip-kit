import { ExtractUnion, KeyOrIndex } from '../common/types'
import { splitToKeys } from '../string/splitToKeys'
import { isNumber } from '../typed/isNumber'
import { isNumberString } from '../typed/isNumberString'

/**
 * @zh 返回从对象或数组中，删除指定的键或索引的新对象或者数组，返回值是普通对象或数组，不会修改入参。
 * @en Generate a new object or array from the input object or array with specified keys or indices removed. The returned value is a plain object or array, and the input will not be modified.
 * @param {object} obj - 待处理的对象或数组 @en The object or array to process
 * @param {string[]} keys - 需要删除的键或数组索引 @en The keys or array indices to delete
 * @returns {Omit<T, KeyOrIndex<ExtractUnion<R>>>}
 * @refer [KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)
 * @example
 * ```typescript
 * const obj = omit({ a: 1, b: 2, c: 3 }, ['b', 'c'] as const)
 * // Omit<{ a: number; b: number; c: number; }, "b" | "c">
 * // { a: 1 }
 * const arr = omit([1, 2, 3, 4], ['[1]', '3'] as const)
 * // Omit<number[], 1 | 3>
 * // [1, 3]
 * ```
 */
export function omit<T extends object, R extends readonly string[]>(
  obj: T,
  keys: R
) {
  const resolvedKeys = keys
    .map((item) => splitToKeys(item)[0])
    .map((item) => (isNumberString(item) ? parseInt(item) : item))

  const ans: any = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    ans[key] = obj[key]
  }
  resolvedKeys.sort((a, b) => {
    const aIsNumber = isNumber(a)
    const bIsNumber = isNumber(b)
    if (aIsNumber && bIsNumber) {
      return b - a
    } else if (aIsNumber || bIsNumber) {
      return aIsNumber ? -1 : 1
    } else {
      return a.localeCompare(b)
    }
  })
  resolvedKeys.forEach((item) => {
    if (Array.isArray(ans) && isNumber(item)) {
      ans.splice(item, 1)
    } else {
      delete ans[item]
    }
  })
  return ans as Omit<T, KeyOrIndex<ExtractUnion<R>>>
}
