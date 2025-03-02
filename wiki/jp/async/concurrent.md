# concurrent
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Execute a array of function `functions` that return `Promise` in parallel, with the `limit` parameter restricting the number of concurrent executions.


> Added in v0.0.1



### Usage

```ts
import { concurrent } from 'parsnip-kit'

const functions = Array.from(
  { length: 5 },
  (_, i) => () =>
    new Promise<number>((resolve) => {
      setTimeout(() => { resolve(i) }, i * 100)
    })

concurrent(functions, 2).then(res => {
  console.log(res)
  // [{ status: 'fulfilled', value: 0 }, { status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'fulfilled', value: 3 }, { status: 'fulfilled', value: 4 }]
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | The `value` type returned by a function that returns a `Promise` |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `functions` | `((...args: any[]) => Promise<T>)[]` | `false` | `undefined` | Array of functions that return `Promise` |
| `limit` | `number` | `false` | `undefined` | Array of functions that return `Promise` |

#### Returns

| Type |
| ---  |
| `Promise<PromiseSettledResult<Awaited<T>>[]>`  |