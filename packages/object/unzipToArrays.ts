/**
 * @zh 输入对象`obj`，输出分别是它的键和值的数组。
 * @en Input an object `obj`, and output two arrays: one containing its keys and the other containing its values.
 * @param {object} obj @zh 原对象 @en Original object
 * @returns {[PropertyKey[], any[]]}
 * @example
 * ```ts
 * import { unzipToArrays } from 'parsnip-kit'
 *
 * const obj = {
 *  Alex: 16,
 *  Bob: 659,
 *  Carter: 155,
 *  Daniel: 825
 * }
 * unzipToArrays(obj)
 * // [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]
 * ```
 */
export function unzipToArrays<T extends object>(
  obj: T
): [(keyof T)[], T[keyof T][]] {
  const keys: (keyof T)[] = []
  const values: T[keyof T][] = []

  for (const key in obj) {
    keys.push(key)
    values.push(obj[key])
  }

  return [keys, values]
}
