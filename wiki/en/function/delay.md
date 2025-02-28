# delay
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
This is a delay function that accepts a function `func` and a delay `wait` in milliseconds, and returns a function that will call the provided function after the specified delay.


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
| `T` | `extends (...args: any[]) => any` | Function type |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | The function to delay |
| `wait` | `number` | `false` | `undefined` | The delay time (in milliseconds) |

#### Returns

| Type |
| ---  |
| `(...args: Parameters<T>) => void`  |