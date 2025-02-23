/**
 * @zh 比较器，用于字符串字典序升序排序。
 * @en Comparator for sorting strings in lexicographical ascending order.
 * @version 0.0.1
 */
export const stringComparatorAsc = (a: string, b: string) => {
  return a.localeCompare(b)
}

/**
 * @zh 比较器，用于字符串字典序降序排序。
 * @en Comparator for sorting strings in lexicographical descending order.
 * @version 0.0.1
 */
export const stringComparatorDesc = (a: string, b: string) => {
  return b.localeCompare(a)
}

/**
 * @zh 比较器，用于数字升序排序。
 * @en Comparator for sorting numbers in ascending order.
 * @version 0.0.1
 */
export const numberComparatorAsc = (a: number, b: number) => {
  return a - b
}

/**
 * @zh 比较器，用于数字降序排序。
 * @en Comparator for sorting numbers in descending order.
 * @version 0.0.1
 */
export const numberComparatorDesc = (a: number, b: number) => {
  return b - a
}