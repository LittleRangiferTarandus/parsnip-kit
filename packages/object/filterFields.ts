import { isNumberString } from '../typed/isNumberString'

/**
 * @zh 输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`，返回值`== false`则移除该字段，返回新的普通对象或数组。
 * @en Input an object `obj` and an iterator `iterator`, iterate over each field of the object, execute `iterator` for each field's value, remove the field if the return value `== false`, and return a new plain object or array.
 * @param {object} obj @zh 待遍历的对象 @en Object to iterate
 * @param {(value: any, key: string, object: T) => boolean} iterator @zh 迭代器函数 @en Iterator function
 * @example
 * ```ts
 * import { filterFields } from 'parsnip-kit'
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * const iterator0 = (value: number) => value > 1
 * const result0 = filterFields(obj, iterator0)
 * // { b: 2, c: 3 }
 * 
 * const arr0 = [0, 1, 2, 3]
 * const iterator1 = (value: number) => value % 2 === 0
 * const result1 = filterFields(arr0, iterator1)
 * // [0, 2]
 * 
 * const arr1 = [0, 1, 2, 3]
 * arr1['test'] = 'test'
 * const iterator2 = (value, key) => typeof key === 'string'
 * const result2 = filterFields(arr1, iterator2)
 * // [test: 'test']
 * ```
 */
export function filterFields<T extends object>(
  obj: T,
  iterator: (value: any, key: string, object: T) => boolean
) {
  const ans: any = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    ans[key] = obj[key]
  }

  let count = 0
  for (const key in obj) {
    if (!iterator(obj[key], key, obj)) {
      if (Array.isArray(ans) && isNumberString(key)) {
        ans.splice(parseInt(key) - count, 1)
        count++
      } else {
        delete ans[key as string]
      }
    }
  }
  return ans
}
