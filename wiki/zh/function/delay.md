# delay
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
这是一个延迟函数，接受一个函数`func`和延迟`wait`毫秒，返回一个延迟调用该函数的函数。 


> Added in v0.0.1



### Usage

```typescript
import { delay } from 'parsnip-kit'

const handler = () => console.log('Function call')
const delayed = delay(handler, 3000)
delayed()
// console.log is called after 3s

```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends (...args: any[]) => any` | 函数类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | 要延迟的函数  |
| `wait` | `number` | `false` | `undefined` | 延迟时间（毫秒）  |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<T>) => void`  |