# stringComparatorAsc
      
比较器，用于字符串字典序升序排序。

> Added in v0.0.1



### Source

```typescript
export const stringComparatorAsc = (a: string, b: string) => {
  return a.localeCompare(b)
}


```
# stringComparatorDesc
      
比较器，用于字符串字典序降序排序。

> Added in v0.0.1



### Source

```typescript
export const stringComparatorDesc = (a: string, b: string) => {
  return b.localeCompare(a)
}


```
# numberComparatorAsc
      
比较器，用于数字升序排序。

> Added in v0.0.1



### Source

```typescript
export const numberComparatorAsc = (a: number, b: number) => {
  return a - b
}


```
# numberComparatorDesc
      
比较器，用于数字降序排序。

> Added in v0.0.1



### Source

```typescript
export const numberComparatorDesc = (a: number, b: number) => {
  return b - a

```