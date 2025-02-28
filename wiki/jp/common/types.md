# PrimitiveType
      
The primitive types including `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`

> Added in v0.0.1



### Source

```typescript
export type PrimitiveType =
  | undefined
  | null
  | number
  | string
  | boolean
  | bigint
  | symbol


```
# NumberString
      
A string composed of numbers.

> Added in v0.0.1



### Source

```typescript
export type NumberString = `${number}`


```
# ObjectLike
      
Non-function object.

> Added in v0.0.1



### Source

```typescript
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }

```
# ExtractUnion
      
Extract a union type from a tuple.

> Added in v0.0.1



### Source

```typescript
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]


```
# KeyOrIndex
      
Extracts a number from a string in the form of [${number}] or ${number}. Otherwise, returns the original string.

> Added in v0.0.1



### Source

```typescript
export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D
  : T


```
# Tail
      
Returns the last element of tuple type.

> Added in v0.0.1



### Source

```typescript
export type Tail<T extends readonly any[]> = T extends readonly [
  ...any[],
  infer L
]
  ? L
  : never


```
# Head
      
Returns the first element of tuple type.

> Added in v0.0.1



### Source

```typescript
export type Head<T extends readonly any[]> = T extends readonly [
  infer L,
  ...any[]
]
  ? L
  : never


```
# Edge
      
Retrieve the first or last element of tuple `T`, determined by type `D`.

> Added in v0.0.1



### Source

```typescript
export type Edge<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'left' ? Head<T> : Tail<T>


```
# EdgeReverse
      
Similar to `Edge`, but the effects of `'left'` and `'right'` for D are reversed.

> Added in v0.0.1



### Source

```typescript
export type EdgeReverse<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'right' ? Head<T> : Tail<T>

```