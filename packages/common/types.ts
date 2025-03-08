export type MapKey<T> = T extends Map<infer K, any> ? K : never
export type MapValue<T> = T extends Map<any, infer V> ? V : never

export type SetValue<T> = T extends Set<infer K> ? K : never

/**
 * @zh 基本类型，由`number`、`string`、`boolean`、`undefined`、`null`、`bigint`、`symbol`组成。
 * @en The primitive types including `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`
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
 * @zh 由数字组成的字符串。
 * @en A string composed of numbers.
 * @version 0.0.1
 */
export type NumberString = `${number}`

/**
 * @zh 非函数对象。
 * @en Non-function object.
 * @version 0.0.1
 */
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }
/**
 * @zh 从元组中提取联合类型。
 * @en Extract a union type from a tuple.
 * @version 0.0.1
 */
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]

/**
 * @zh 从形如 [${number}] 或 ${number} 的字符串中提取数字。其他情况则返回原始字符串。
 * @en Extracts a number from a string in the form of [${number}] or ${number}. Otherwise, returns the original string.
 * @version 0.0.1
 */
export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D
  : T

/**
 * @zh 获取元组类型最后一个元素。
 * @en Returns the last element of tuple type.
 * @version 0.0.1
 */
export type Tail<T extends readonly any[]> = T extends readonly [
  ...any[],
  infer L
]
  ? L
  : never

/**
 * @zh 获取元组类型第一个元素。
 * @en Returns the first element of tuple type.
 * @version 0.0.1
 */
export type Head<T extends readonly any[]> = T extends readonly [
  infer L,
  ...any[]
]
  ? L
  : never

/**
 * @zh 获取元组`T`首端或者末端的元素，由类型`D`决定。
 * @en Retrieve the first or last element of tuple `T`, determined by type `D`.
 * @version 0.0.1
 */
export type Edge<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'left' ? Head<T> : Tail<T>

/**
 * @zh 和`Edge`类似，但是`D`取值`'left'`或者`'right'`时效果反过来。
 * @en Similar to `Edge`, but the effects of `'left'` and `'right'` for D are reversed.
 * @version 0.0.1
 */
export type EdgeReverse<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'right' ? Head<T> : Tail<T>

/**
 * @en Returns the parameter types of the function; if the input is not a function, returns the `never[]` type.
 * @zh 返回函数的参数值类型，若非函数返回`never[]`类型。
 */
export type EmptyOrParameters<T> = T extends (...args: any[]) => any
  ? Parameters<T>
  : never[]

/**
 * @en Returns the return type of the function; if the input is not a function, returns the `void` type.
 * @zh 返回函数的返回值类型，若非函数返回`void`类型。
 */
export type EmptyOrReturnType<T> = T extends (...args: any[]) => any
  ? ReturnType<T>
  : void
