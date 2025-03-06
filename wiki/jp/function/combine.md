# combine
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Combine multiple functions and execute them in the specified order of `direction`, by default of `'right'` meaning executing from right to left. The return of each function takes the next function as an argument.

> Added in v0.0.1



### Usage

```typescript
import { combine } from 'parsnip-kit'

function add(a: number, b: number): number { return a + b }
function multiply(a: number): number { return a * 2 }

const combinedRight = combine([multiply, add] as const)
combinedRight(2, 3) // 10

const combinedLeft = combine([add, multiply] as const, 'left')
combinedLeft(2, 3) // 10

// This could be useful for combining curried functions.
const multiplyCurried = (a: number) => (b: number) => a * b
const addCurried = (a: number) => (b: number) => a + b
const combinedRightCurried = combine([addCurried(2), multiplyCurried(3)] as const)

combinedRightCurried(5) // 17
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends readonly ((...args: any[]) => any)[]` | Function array type |
| `R` | `extends 'left' \| 'right' = 'left' \| 'right'` | Combination direction type |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `functions` | `T` | `false` | `undefined` | The array of functions to combine |
| `direction` | `R` | `true` | `'right'` | The direction in which to combine the functions |

#### Returns

| Type |
| ---  |
| `(...args: EmptyOrParameters<Edge<T, R>>) => EmptyOrReturnType<EdgeReverse<T, R>>`  |

#### Reference

[Edge](../common/types#edge) [EdgeReverse](../common/types#edgereverse) [EmptyOrParameters](../common/types#emptyorparameters) [EmptyOrReturnType](../common/types#emptyorreturntype)