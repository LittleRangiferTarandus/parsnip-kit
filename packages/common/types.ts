export type MapKey<T> = T extends Map<infer K, any> ? K : never
export type MapValue<T> = T extends Map<any, infer V> ? V : never

export type SetValue<T> = T extends Set<infer K> ? K : never

/**
 * The primitive types including `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`
 * @version 0.0.1
 */
export type PrimitiveType =
  | undefined
  | null
  | number
  | string
  | boolean
  | bigint
  | symbol

/**
 * A string composed of numbers.
 * @version 0.0.1
 */
export type NumberString = `${number}`

/**
 * Non-function object.
 * @version 0.0.1
 */
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }
/**
 * Extract a union type from a tuple.
 * @version 0.0.1
 */
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]

/**
 * Extracts a number from a string in the form of [${number}] or ${number}. Otherwise, returns the original string.
 * @version 0.0.1
 */
export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D
  : T

/**
 * Returns the last element of tuple type.
 * @version 0.0.1
 */
export type Tail<T extends readonly any[]> = T extends readonly [
  ...any[],
  infer L
]
  ? L
  : never

/**
 * Returns the first element of tuple type.
 * @version 0.0.1
 */
export type Head<T extends readonly any[]> = T extends readonly [
  infer L,
  ...any[]
]
  ? L
  : never

/**
 * Retrieve the first or last element of tuple `T`, determined by type `D`.
 * @version 0.0.1
 */
export type Edge<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'left' ? Head<T> : Tail<T>

/**
 * Similar to `Edge`, but the effects of `'left'` and `'right'` for D are reversed.
 * @version 0.0.1
 */
export type EdgeReverse<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'right' ? Head<T> : Tail<T>

/**
 * Returns the parameter types of the function; if the input is not a function, returns the `never[]` type.
 * @version 0.0.1
 */
export type EmptyOrParameters<T> = T extends (...args: any[]) => any
  ? Parameters<T>
  : never[]

/**
 * Returns the return type of the function; if the input is not a function, returns the `void` type.
 * @version 0.0.1
 */
export type EmptyOrReturnType<T> = T extends (...args: any[]) => any
  ? ReturnType<T>
  : void

/**
 * Either returns the result of type `T` or a fallback value `R` if the result is `null` or `undefined`.
 * @version 0.0.2
 */
export type WithFallback<T extends (...args: any[]) => any, R> =
  ReturnType<T> extends undefined | null ? R : ReturnType<T>
