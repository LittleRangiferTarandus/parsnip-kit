# asyncForEach
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input an array `array` and an iterator `iterator`, iterate over each element of the array, and execute `iterator` for each element.

The `iterator` supports `async` functions or `Promise` returns. Only after the `Promise` returned by the previous `iterator` is fulfilled or rejected will the next `iterator` be executed.


> Added in v0.0.1



### Usage

```ts
import { asyncForEach } from 'parsnip-kit'

const array = [1, 2, 3]
const log = [] as any[]
const iterator = (item, index, arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log.push({ item, index })
      resolve(void 0)
    }, item * 100)
  })
}
asyncForEach(obj, iterator).then(() => {
  console.log(log)
  // [{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Element type of array  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T[]` | `false` | `undefined` | Array to iterate |
| `iterator` | `(item: T, index: number, array: T[]) => any` | `false` | `undefined` | Iterator function |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |