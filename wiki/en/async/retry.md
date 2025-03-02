# retry
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Accepts a function `func` that returns a `Promise` and a `maxRetries` parameter (defaulting to 3), returning a function that retries the invocation of the given function upon failure.

The optional parameter `options` sets up the retry configuration, details of which can be found [here](#retryoptions).


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
| `T` | ` ` | Type of the `value` returned by the `Promise` of function `func`. |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `(...args: any[]) => Promise<T>` | `false` | `undefined` | The asynchronous task function to be retried must return a Promise. |
| `maxRetries` | `number` | `true` | `3` | Maximum number of retries |
| `options` | `RetryOptions` | `true` | `undefined` | Configuration options |
| `options.delay` | `number` | `true` | `300` | Initial delay for retries (in milliseconds) |
| `options.delayFactor` | `number` | `true` | `2` | Delay increment factor (the delay is multiplied by this value for each retry) |
| `options.shouldRetry` | `(error: any, attempts: number) => boolean` | `true` | `undefined` | Callback function to determine whether to retry |
| `options.onSuccess` | `(result: any, attempts: number) => any` | `true` | `undefined` | Callback function when the task is successful |
| `options.onFailure` | `(result: any, attempts: number) => any` | `true` | `undefined` | Callback function when the task fails |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<typeof func>) => Promise<PromiseSettledResult<Awaited<T>>>`  |
# RetryOptions
      
The `options` parameter of the `retry` function.

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