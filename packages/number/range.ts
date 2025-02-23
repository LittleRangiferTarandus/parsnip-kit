/**
 * @zh 输入起始值`start`和结束值`end`，返回区间 [`start`, `end`) 中以`start`开始，步长为`step`的序列。灵感来自 Python，以及 Matlab、rust 等生成等步长数组的语法。
 * @en Input the start value `start` and the end value `end`, and return the sequence starting from `start` with a step size of `step` in the interval [`start`, `end`). Inspired by the syntax for generating arrays with equal steps in Python, as well as in Matlab, Rust, and others.
 * @param {number} start @zh 起始值 @en Start value
 * @param {number} end @zh 结束值  @en End value
 * @param {number} [step=1] @zh 步长  @en Step size
 * @returns {number[]}
 * @version 0.0.1
 * @example
 * ```ts
 * import { range } from 'parsnip-kit'
 *
 * range(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * range(1, 10, 2) // [1, 3, 5, 7, 9]
 * range(10, 1, -2) // [10, 8, 6, 4, 2]
 *
 * range(1, 10, -2) // []
 * range(10, 1, 2) // []
 * range(10, 10, 2) // []
 *
 * try {
 *   range(0, 1, 0)
 * } catch (error) {
 *   console.log(error.message) // 'range step must be not equal 0.'
 * }
 * ```
 */
export function range(start: number, end: number, step: number = 1): number[] {
  if (start === end) {
    return []
  }
  if (step === 0) {
    throw TypeError('range step must be not equal 0.')
  }
  const ans: number[] = []
  while (step > 0 ? start < end : end < start) {
    ans.push(start)
    start += step
  }
  return ans
}
