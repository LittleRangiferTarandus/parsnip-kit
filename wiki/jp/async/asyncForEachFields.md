# asyncForEachFields
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.

The `iterator` supports `async` functions or `Promise` returns. Only after the `Promise` returned by the previous `iterator` is fulfilled or rejected will the next `iterator` be executed.


> Added in v0.0.1



### Usage

```ts
import { asyncForEachFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }
const log = [] as any[]
const iterator = (value, key, object) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log.push({ key, value })
      resolve(void 0)
    }, value * 100)
  })
}
asyncForEachFields(obj, iterator).then(() => {
  console.log(log)
  // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Object type  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | Object to iterate |
| `iterator` | `(value: any, key: string, object: T) => any` | `false` | `undefined` | Iterator function |

#### Returns

| Type |
| ---  |
| `Promise<void>`  |