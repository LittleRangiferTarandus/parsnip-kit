/**
 * Comparator for sorting strings in lexicographical ascending order.
 * @version 0.0.1
 */
export const stringComparatorAsc = (a: string, b: string) => {
  return a.localeCompare(b)
}

/**
 * Comparator for sorting strings in lexicographical descending order.
 * @version 0.0.1
 */
export const stringComparatorDesc = (a: string, b: string) => {
  return b.localeCompare(a)
}

/**
 * Comparator for sorting numbers in ascending order.
 * @version 0.0.1
 */
export const numberComparatorAsc = (a: number, b: number) => {
  return a - b
}

/**
 * Comparator for sorting numbers in descending order.
 * @version 0.0.1
 */
export const numberComparatorDesc = (a: number, b: number) => {
  return b - a
}
