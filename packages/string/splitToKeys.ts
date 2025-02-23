const regSplitPath = /\.|\[(\d+)\]/

/**
 * @zh 把用于取值的路径字符串拆分为单独的键。
 * @en Split the path string used for accessing values into individual keys.
 * @param {any} arg @zh 待转换的字符串 @en The string to be converted.
 * @returns {string[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { splitToKeys } from 'parsnip-kit'
 *
 * splitToKeys('a[0].b.c') // ['a', '0', 'b', 'c']
 * ```
 */
export function splitToKeys(arg: string): string[] {
  return arg.split(regSplitPath).filter(Boolean)
}
