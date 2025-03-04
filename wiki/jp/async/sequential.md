# sequential
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
The `sequential` function is typically used when multiple asynchronous operations need to be executed in sequence. It takes an array of functions `functions` that return a `Promise` and executes them serially. Each function can accept the result of the previous function wrapped in a `PromiseSettledResult` type as a parameter.

If an optional parameter `initialValue` is provided, it will be wrapped in a `PromiseSettledResult` of fulfilled status and passed to the first function. Otherwise, the first function will receive `undefined` as its parameter.


> Added in v0.0.1



### Usage

```ts
import { sequential } from 'parsnip-kit'

const functions = [
  async (arg?: PromiseSettledResult<number>) => {
    if (arg?.status === 'fulfilled') {
      return arg.value
    } else {
      throw new Error('test')
    }
  },
  async (arg?: PromiseSettledResult<number>) => {
    return arg?.status === 'fulfilled' ? arg.value + 1 : 0
  },
  async (arg?: PromiseSettledResult<number>) => {
    return arg?.status === 'fulfilled' ? arg.value * 2 : 0
  }
]
sequential(functions).then(res => { console.log(res) })
// [
//   { status: 'rejected', reason: new Error('test') },
//   { status: 'fulfilled', value: 0 },
//   { status: 'fulfilled', value: 0 }
// ]

sequential(functions, 0).then(res => { console.log(res) })
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 4 }
// ]

```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | The `value` type returned by a function that returns a `Promise` |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `functions` | `((arg?: PromiseSettledResult<Awaited<T>>) => Promise<T>)[]` | `false` | `undefined` | Array of functions that return `Promise` |
| `initialValue` | `Awaited<T>` | `true` | `undefined` | Initial Value |

#### Returns

| Type |
| ---  |
| `Promise<PromiseSettledResult<Awaited<T>>[]>`  |