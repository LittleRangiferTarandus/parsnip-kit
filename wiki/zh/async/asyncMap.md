# asyncMap
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
输入一个数组`array`和迭代器`iterator`，遍历对象的每个元素，对每个元素执行`iterator`，并返回由每次`await`执行后的返回值组成的数组。 

`iterator`支持`async`函数，或者`Promise`返回值。`concurrent`可选参数控制是否并发调用，若值为`'sequential'`，当前一个`iterator`返回的`Promise`为 fulfilled 或者 rejected 后，才会执行新的`iterator`。


> Added in v0.0.1



### Usage

```ts
import { asyncMap } from 'parsnip-kit'

const array = [1, 2, 3]
const logConcurrent = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logConcurrent.push({ item, index })
      resolve({ item, index })
    }, Math.random() * 100)
  })
}
asyncMap(obj, iterator).then(res => {
  console.log(res)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
  console.log(logConcurrent)
  // Array contain { item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 } with random order.
})

const logSequential = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logSequential.push({ item, index })
      resolve({ item, index })
    }, Math.random() * 100)
  })
}
asyncMap(obj, iterator, 'sequential').then(res => {
  console.log(res)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
  console.log(logSequential)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 数组元素类型 |
| `U` | ` ` | `iterator`返回值类型 |
| `R` | `extends 'concurrent' \| 'sequential' = 'concurrent' \| 'sequential'` | 并发类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T[]` | `false` | `undefined` | 待遍历的数组  |
| `iterator` | `(item: T, index: number, array: T[]) => U \| Promise<U>` | `false` | `undefined` | 迭代器函数  |
| `concurrent` | `R` | `true` | `'concurrent'` | 并发类型  |

#### Returns

| Type |
| ---  |
| `Promise<U[]>`  |