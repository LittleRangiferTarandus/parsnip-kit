# concurrent
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
并发执行一组返回`Promise`的函数`functions`，参数`limit`限制同时运行的数量。

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
| `T` | ` ` | 返回`Promise`的`value`类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `functions` | `((...args: any[]) => Promise<T>)[]` | `false` | `undefined` | 返回`Promise`的函数数组  |
| `limit` | `number` | `false` | `undefined` | 同时运行的函数数量限制  |

#### Returns

| Type |
| ---  |
| `Promise<PromiseSettledResult<Awaited<T>>[]>`  |