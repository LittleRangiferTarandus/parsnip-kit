export type PrimitiveType =
  | undefined
  | null
  | number
  | string
  | boolean
  | bigint
  | symbol

export type NumberString = `${number}`

export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }

export type MapKey<T> = T extends Map<infer K, any> ? K : never
export type MapValue<T> = T extends Map<any, infer V> ? V : never

export type SetValue<T> = T extends Set<infer K> ? K : never

export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D
  : T extends `${infer E extends string}`
    ? E
    : T

export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]
