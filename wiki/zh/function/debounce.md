# debounce
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
这是一个防抖函数，用于限制函数调用的频率。它会在指定的时间间隔后执行函数，如果在时间间隔内多次调用，会清除之前的定时器并重新计时。 


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
| `T` | `extends (...args: any[]) => any` | 要防抖的函数类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | 要防抖的函数  |
| `wait` | `number` | `false` | `undefined` | 两次连续调用之间的延迟时间（毫秒）  |
| `options` | `object` | `true` | `undefined` | 可选参数对象  |
| `options.immediate` | `boolean` | `true` | `false` | 是否立即执行第一次调用  |
| `options.maxWait` | `number` | `true` | `undefined` | 设置最大等待时间  |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<T>) => void`  |