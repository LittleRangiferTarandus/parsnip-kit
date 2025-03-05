# throttle
![Static Badge](https://img.shields.io/badge/Coverage-93.32%-FF8C00)
      
Throttle function used to limit the frequency of function calls. It ensures that the function is not called more than once within a specified time interval.

> Added in v0.0.1



### Usage

```typescript
import { throttle } from 'parsnip-kit'

const handler = () => console.log('Function called')

// Basic throttle usage
const throttled = throttle(handler, 300)
throttled() // console.log is called after 300ms
throttled() // Call is ignored due to throttle

// Throttle with leading and trailing options
const throttledWithOptions = throttle(handler, 300, { leading: true, trailing: true })
throttledWithOptions() // console.log is called immediately and again after 300ms if no other calls are made.
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends (...args: any[]) => any` | Type of function to throttle |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | The function to throttle  |
| `wait` | `number` | `false` | `undefined` | The minimum allowed interval between two consecutive calls (in milliseconds).  |
| `options` | `object` | `true` | `undefined` | Optional parameter object |
| `options.leading` | `boolean` | `true` | `false` | Whether to execute the function at the beginning of the wait interval  |
| `options.trailing` | `boolean` | `true` | `true` | Whether to execute the function at the end of the wait interval, if not already executed   |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<T>) => void`  |