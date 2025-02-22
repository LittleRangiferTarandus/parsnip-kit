# PrimitiveType
      
The primitive types including `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`

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

### Source

```typescript
export type NumberString = `${number}`


```
# ObjectLike
      
Non-function object.

### Source

```typescript
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }

```
# ExtractUnion
      
Extract a union type from a tuple.

### Source

```typescript
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]


```
# KeyOrIndex
      
Extracts a number from a string in the form of `\`[${number}]\`` or `\`${number}\``. Otherwise, returns the original string.

### Source

```typescript
export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D

```