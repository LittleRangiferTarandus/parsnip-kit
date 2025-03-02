# retry
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
接受一个返回`Promise`的函数`func`和重试次数`maxRetries`（默认为 3），返回一个调用该函数失败时重试的函数。

可选参数`options`设置重试的配置，具体看[这里](#retryoptions)。


> Added in v0.0.1



### Usage

```ts
import { retry } from 'parsnip-kit'

let times = 0
const func = async (a: number, b: number) => {
  if (times < 3) {
    times++
    throw new Error(`Error ${times}`)
  }
  return a + b
}
const retried = retry(func)
retried(2, 3).then(res => {
  console.log(res)
  // { status: 'fulfilled', value: 5 }
})
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | 函数`func`返回的`Promise`的`value`类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `(...args: any[]) => Promise<T>` | `false` | `undefined` | 要重试的异步任务函数，必须返回一个`Promise`  |
| `maxRetries` | `number` | `true` | `3` | 最大重试次数  |
| `options` | `RetryOptions` | `true` | `undefined` | 配置选项  |
| `options.delay` | `number` | `true` | `300` | 重试的初始延迟时间（毫秒）  |
| `options.delayFactor` | `number` | `true` | `2` | 延迟时间的递增因子（每次重试时延迟时间乘以该值）  |
| `options.shouldRetry` | `(error: any, attempts: number) => boolean` | `true` | `undefined` | 决定是否重试的回调函数  |
| `options.onSuccess` | `(result: any, attempts: number) => any` | `true` | `undefined` | 任务成功时的回调函数  |
| `options.onFailure` | `(result: any, attempts: number) => any` | `true` | `undefined` | 任务失败时的回调函数  |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<typeof func>) => Promise<PromiseSettledResult<Awaited<T>>>`  |
# RetryOptions
      
`retry`函数的参数`options`的类型。

> Added in v0.0.1



### Source

```typescript
export interface RetryOptions {
  delay?: number
  delayFactor?: number
  shouldRetry?: (error: any, attempts: number) => boolean
  onSuccess?: (result: any, attempts: number) => any
  onFailure?: (error: any, attempts: number) => any
}

```