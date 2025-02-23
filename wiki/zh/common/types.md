# PrimitiveType
      
基本类型，由`number`、`string`、`boolean`、`undefined`、`null`、`bigint`、`symbol`。

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

### Source

```typescript
export type NumberString = `${number}`


```
# ObjectLike
      
非函数对象。

### Source

```typescript
export type ObjectLike = object & { call?: never; [x: PropertyKey]: any }

```
# ExtractUnion
      
从元组中提取联合类型。

### Source

```typescript
export type ExtractUnion<T extends readonly string[]> = {
  [K in keyof T]: T[K]
}[number]


```
# KeyOrIndex
      
从形如 [${number}] 或 ${number} 的字符串中提取数字。其他情况则返回原始字符串。

### Source

```typescript
export type KeyOrIndex<T extends string> = T extends
  | `[${infer D extends number}]`
  | `${infer D extends number}`
  ? D
  : T

```