# asyncForEach
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input an array `array` and an iterator `iterator`, iterate over each element of the array, and execute `iterator` for each element.

The `iterator` supports `async` functions or functions that return a `Promise`. The optional parameter `concurrent` controls whether the `iterator` functions are called concurrently. If the value is `'sequential'`, the next `iterator` will only be executed after the `Promise` returned by the previous `iterator` is either fulfilled or rejected.


> Added in v0.0.1



### Usage

```ts
import { asyncForEach } from 'parsnip-kit'

const array = [1, 2, 3]
const logConcurrent = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logConcurrent.push({ item, index })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEach(obj, iterator).then(() => {
  console.log(logConcurrent)
  // Array contain { item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 } with random order.
})

const logSequential = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logSequential.push({ item, index })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEach(obj, iterator, 'sequential').then(() => {
  console.log(logSequential)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Element type of array  |
| `R` | `extends 'concurrent' \| 'sequential' = 'concurrent' \| 'sequential'` | Concurrent type |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T[]` | `false` | `undefined` | Array to iterate |
| `iterator` | `(item: T, index: number, array: T[]) => any` | `false` | `undefined` | Iterator function |
| `concurrent` | `R` | `true` | `'concurrent'` | Concurrent type |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |