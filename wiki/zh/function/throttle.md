# throttle
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-91.18%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-90.91%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-91.18%-brightgreen)
      
节流函数用于限制函数调用的频率。它确保函数在指定的时间间隔内不会被多次调用。 


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

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `(...args: any[]) => any` | `false` | `undefined` | 要节流的函数 |
| `wait` | `number` | `false` | `undefined` | 两次连续调用之间的间隔时间（毫秒） |
| `options` | `object` | `true` | `undefined` | 可选参数对象  |
| `options.leading` | `boolean` | `true` | `false` | 是否在等待间隔开始时执行函数 |
| `options.trailing` | `boolean` | `true` | `true` | 是否在等待间隔结束时执行函数 |

#### Returns

| Type |
| ---  |
| `(...args: any[]) => void`  |