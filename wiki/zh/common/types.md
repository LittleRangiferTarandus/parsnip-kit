# PrimitiveType
      
基本类型，由`number`、`string`、`boolean`、`undefined`、`null`、`bigint`、`symbol`组成。

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
      
由数字组成的字符串。

> Added in v0.0.1



### Source

```typescript
export type NumberString = `${number}`


```
# ObjectLike
      
非函数对象。

> Added in v0.0.1



### Source

```typescript
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }

```
# ExtractUnion
      
从元组中提取联合类型。

> Added in v0.0.1



### Source

```typescript
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]


```
# KeyOrIndex
      
从形如 [${number}] 或 ${number} 的字符串中提取数字。其他情况则返回原始字符串。

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
      
获取元组类型最后一个元素。

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
      
获取元组类型第一个元素。

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
      
获取元组`T`首端或者末端的元素，由类型`D`决定。

> Added in v0.0.1



### Source

```typescript
export type Edge<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'left' ? Head<T> : Tail<T>


```
# EdgeReverse
      
和`Edge`类似，但是`D`取值`'left'`或者`'right'`时效果反过来。

> Added in v0.0.1



### Source

```typescript
export type EdgeReverse<
  T extends readonly any[],
  D = 'left' | 'right'
> = D extends 'right' ? Head<T> : Tail<T>


```
# EmptyOrParameters
      
返回函数的参数值类型，若非函数返回`never[]`类型。

### Source

```typescript
export type EmptyOrParameters<T> = T extends (...args: any[]) => any
  ? Parameters<T>
  : never[]


```
# EmptyOrReturnType
      
返回函数的返回值类型，若非函数返回`void`类型。

### Source

```typescript
export type EmptyOrReturnType<T> = T extends (...args: any[]) => any
  ? ReturnType<T>

```