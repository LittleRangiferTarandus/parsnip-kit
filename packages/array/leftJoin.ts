import { isString } from '../typed/isString'
import { getByPath } from '../object/getByPath'

/**
 * @zh 输入两个数组`left`、`right`，输出`left`左连接`right`形成的数组，常用于合成包含相关联信息的对象数组，就像 SQL 那样。此外，接收两个参数：`leftKey`和`rightKey`，它们是类似于[getByPath](../object/getByPath)的字段路径，或者回调函数，用于提供区分元素的标识。`merge`用于生成输出的数组对象。
 * @en Input two arrays `left` and `right`, and output the array formed by performing a left join of `left` with `right`. This is commonly used to combine arrays of objects that contain related information, similar to how it is done in SQL. Additionally, it accepts two parameters: `leftKey` and `rightKey`. These can be field paths similar to [getByPath](../object/getByPath) or callback functions, used to provide identifiers to distinguish elements. The `merge` function is used to generate the output array objects.
 * @param {object[]} left @zh 左连接中左侧的数组 @en The left array in a left join
 * @param {object[]} right @zh 左连接中右侧的数组 @en The right array in a left join
 * @param {string | ((item: any, index: number, arr: any[]) => any)} leftKey @zh 为左侧数组提供区分元素的标识 @en Provide an identifier to distinguish elements in the left array
 * @param {string | ((item: any, index: number, arr: any[]) => any)} rightKey @zh 为右侧数组提供区分元素的标识 @en Provide an identifier to distinguish elements in the right array
 * @param {(left: any, right: any | undefined) => any} merge @zh 返回左右数组元素合并的结果 @en Return the result of merging elements from left and right arrays.
 * @returns {any[]}
 * @example
 * ```ts
 * import { leftJoin } from 'parsnip-kit'
 *
 * const leftArray0 = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Charlie' },
 * ]
 * const rightArray0 = [
 *   { id: 1, age: 25 },
 *   { id: 3, age: 30 },
 * ]
 *
 * leftJoin(
 *   leftArray0,
 *   rightArray0,
 *   (item) => item.id,
 *   (item) => item.id,
 *   (left, right) => ({ ...left, ...(right || {}) }),
 * ) // [{ id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie', age: 30 }]
 *
 *
 * const leftArray1 = [
 *   { id: 1, info: { name: 'Alice', age: 25 } },
 *   { id: 2, info: { name: 'Bob', age: 35 } },
 *   { id: 3, info: { name: 'Charlie', age: 30 } },
 * ]
 * const rightArray1 = [
 *   { name: 'Alice', experience: ['software engineer', 'designer'] },
 *   { name: 'Charlie', experience: ['freelance'] },
 * ]
 *
 * leftJoin(
 *   leftArray1,
 *   rightArray1,
 *   'info.name',
 *   'name',
 *   (left, right) => ({ name: left.info.name, job: right?.experience[0] ?? null }),
 * ) // [{ name: 'Alice', job: 'software engineer' }, { name: 'Bob', job: null }, { name: 'Charlie', job: 'freelance' }]
 *
 * ```
 */

export function leftJoin<T extends object, U extends object, R extends object>(
  left: T[],
  right: U[],
  leftKey: string | ((item: T, index: number, arr: T[]) => any),
  rightKey: string | ((item: U, index: number, arr: U[]) => any),
  merge: (left: T, right: U | undefined) => R
): R[] {
  const rightMap = new Map<any, U>()

  const lenRight = right.length
  for (let i = 0; i < lenRight; i++) {
    rightMap.set(
      isString(rightKey)
        ? getByPath(right[i] as object, rightKey)
        : rightKey(right[i], i, right),
      right[i]
    )
  }

  const ans: R[] = []
  const lenLeft = left.length
  for (let i = 0; i < lenLeft; i++) {
    const curLeftKey = isString(leftKey)
      ? getByPath(left[i] as object, leftKey)
      : leftKey(left[i], i, left)
    const rightItem = rightMap.get(curLeftKey)
    ans.push(merge(left[i], rightItem))
  }

  return ans
}
