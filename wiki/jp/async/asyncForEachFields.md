# asyncForEachFields
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.

The `iterator` supports `async` functions or functions that return a `Promise`. The optional parameter `concurrent` controls whether the `iterator` functions are called concurrently. If the value is `'sequential'`, the next `iterator` will only be executed after the `Promise` returned by the previous `iterator` is either fulfilled or rejected.


> Added in v0.0.1



### Usage

```ts
import { asyncForEachFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }

const logConcurrent = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logConcurrent.push({ key, value })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEachFields(obj, iterator, 'sequential').then(() => {
  console.log(logConcurrent)
  // Array contain { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } with random order.
})

const logSequential = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logSequential.push({ key, value })
      resolve(void 0)
    }, Math.random() * 100)
  })
}
asyncForEachFields(obj, iterator, 'sequential').then(() => {
  console.log(logSequential)
  // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Object type  |
| `R` | `extends 'concurrent' \| 'sequential' = 'concurrent' \| 'sequential'` | Concurrent type |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | Object to iterate |
| `iterator` | `(value: any, key: string, object: T) => any` | `false` | `undefined` | Iterator function |
| `concurrent` | `R` | `true` | `'concurrent'` | Concurrent type |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |