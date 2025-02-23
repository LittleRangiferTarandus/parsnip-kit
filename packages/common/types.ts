export type MapKey<T> = T extends Map<infer K, any> ? K : never
export type MapValue<T> = T extends Map<any, infer V> ? V : never

export type SetValue<T> = T extends Set<infer K> ? K : never

/**
 * @zh 基本类型，由`number`、`string`、`boolean`、`undefined`、`null`、`bigint`、`symbol`。
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
