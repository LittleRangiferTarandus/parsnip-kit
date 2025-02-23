# stringComparatorAsc
      
Comparator for sorting strings in lexicographical ascending order.

> Added in v0.0.1



### Source

```typescript
export const stringComparatorAsc = (a: string, b: string) => {
  return a.localeCompare(b)
}


```
# stringComparatorDesc
      
Comparator for sorting strings in lexicographical descending order.

> Added in v0.0.1



### Source

```typescript
export const stringComparatorDesc = (a: string, b: string) => {
  return b.localeCompare(a)
}


```
# numberComparatorAsc
      
Comparator for sorting numbers in ascending order.

> Added in v0.0.1



### Source

```typescript
export const numberComparatorAsc = (a: number, b: number) => {
  return a - b
}


```
# numberComparatorDesc
      
Comparator for sorting numbers in descending order.

> Added in v0.0.1



### Source

```typescript
export const numberComparatorDesc = (a: number, b: number) => {
  return b - a

```