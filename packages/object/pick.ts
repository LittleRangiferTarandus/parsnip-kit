import { ExtractUnion, KeyOrIndex } from '../common/types'
import { splitToKeys } from '../string/splitToKeys'

/**
 * @zh 返回从对象或数组中，提取指定的键或索引的新对象或者数组，返回值是普通对象或数组，不会修改入参。
 * @en Returns a new object or array containing the specified keys or indices extracted from the input object or array. The return value is a plain object or array and does not modify the original input.
 * @param {T} obj - 待处理的对象或数组 @en The object or array to process
 * @param {R} keys - 需要提取的键或数组索引 @en The keys or array indices to extract
 * @template {extends object} T @zh 非基本类型 @en Complex type
 * @template {extends readonly string[]} R @zh 字段路径数组类型 @en Array type of field paths
 * @returns {Pick<T, KeyOrIndex<ExtractUnion<R>> & keyof T>}
 * @version 0.0.1
 * @refer [KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)
 * @example
 * ```typescript
 * import { pick } from 'parsnip-kit'
 * 
 * const obj = { a: 1, b: 2, c: 3 }
 * const keys0 = ['a', 'c'] as const
 * const result0 = pick(obj, keys0)
 * // Pick<{ a: number; b: number; c: number; }, "a" | "c">
 * // { a: 1, c: 3 }
 *
 * const arr = [1, 2, 3, 4]
 * const keys1 = ['1', '[3]'] as const
 * const result1 = pick(obj, keys1)
 * // Pick<number[], 1 | 3>
 * // [2, 4]
 * ```
 */
export function pick<T extends object, R extends readonly string[]>(
  obj: T,
  keys: R
) {
  const resolvedKeys = keys.map((item) => splitToKeys(item)[0])
  const ans = Array.isArray(obj) ? [] : {}
  resolvedKeys.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      if (Array.isArray(ans)) {
        ans.push(obj[item])
      } else {
        ans[item] = obj[item]
      }
    }
  })
  return ans as Pick<T, KeyOrIndex<ExtractUnion<R>> & keyof T>
}
