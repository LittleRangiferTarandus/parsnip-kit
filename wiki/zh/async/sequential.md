# sequential
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
`sequential`通常用于顺序执行多个异步操作的场景。它接收一组返回`Promise`的函数`functions`，串行执行它们，函数接受`PromiseSettledResult`类型包裹的前一个函数的返回作为入参。 

如果传入可选参数`initialValue`，它会被 fulfilled 状态的`PromiseSettledResult`类型包裹传入第一个函数，否则第一个函数将会接收`undefined`作为入参。


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
| `T` | ` ` | 返回`Promise`的`value`类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `functions` | `((arg?: PromiseSettledResult<Awaited<T>>) => Promise<T>)[]` | `false` | `undefined` | 返回`Promise`的函数数组  |
| `initialValue` | `Awaited<T>` | `true` | `undefined` | 初始值  |

#### Returns

| Type |
| ---  |
| `Promise<PromiseSettledResult<Awaited<T>>[]>`  |