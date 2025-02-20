export type PrimitiveType =
  | undefined
  | null
  | number
  | string
  | boolean
  | bigint
  | symbol

export type NumberString = `${number}`

export type ObjectLike = object & { call?: never }

export type MapKey<T> = T extends Map<infer K, any> ? K : never
export type MapValue<T> = T extends Map<any, infer V> ? V : never

export type SetValue<T> = T extends Set<infer K> ? K : never
