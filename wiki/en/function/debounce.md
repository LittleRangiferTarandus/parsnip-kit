# debounce
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
This is a debounce function, which is used to limit the frequency of function calls. It will execute the function after a specified time interval. If the function is called multiple times within the interval, the previous timer will be cleared and reset.


> Added in v0.0.1



### Usage

```typescript
import { debounce } from 'parsnip-kit'

const handler = () => console.log('Function called')

// Normal
const debounced = debounce(handler, 300)
debounced() // console.log is called after 300ms

// Immediately executed debounce
const immediateDebounced = debounce(handler, 300, { immediate: true })
immediateDebounced()
// The console.log is called immediately, and subsequent calls are delayed by 300ms

// Maximum waiting time setting
const maxDebounced = debounce(handler, 500, { maxWait: 1000 })
maxDebounced()
setTimeout(() => {
  maxDebounced()
  setTimeout(() => {
    maxDebounced()
    setTimeout(() => {
      maxDebounced()
    }, 400)
  }, 400)
}, 400)
// If it is not called within 1000ms, it will be triggered at 1000ms

```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends (...args: any[]) => any` | Type of function to debounce |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | The function to debounce |
| `wait` | `number` | `false` | `undefined` | The delay time between two consecutive calls (in milliseconds) |
| `options` | `object` | `true` | `undefined` | Optional parameter object |
| `options.immediate` | `boolean` | `true` | `false` | Whether to execute the function immediately on the first call |
| `options.maxWait` | `number` | `true` | `undefined` | Set the maximum waiting time |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<T>) => void`  |