# memoize
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
This is a memoize function, which is used to cache the return values of a function. When called again with the same parameters, it will return the cached result, avoiding redundant calculations.

By default, uses `JSON.stringify(arguments)` as the cache key.


### Usage

```typescript
import { memoize } from 'parsnip-kit'

function expensiveCalculation(a: number, b: number): number {
  // Simulate an expensive computation process
  console.log('Calculating...')
  return a + b
}

const memoizedCalc = memoize(expensiveCalculation)
memoizedCalc(2, 3) // Calculating...，returns 5
memoizedCalc(2, 3) // directly return 5, do not call expensiveCalculation

// Use a custom resolver
const memoizedCalcWithResolver = memoize(
  expensiveCalculation,
  (a, b) => a + b
)
memoizedCalcWithResolver(2, 3) // Calculating...，returns 5
memoizedCalcWithResolver(4, 1) // directly return 5, do not call expensiveCalculation

const memoizedCalcWithAllArgs = memoize(
  expensiveCalculation,
  (a, b) => a + b,
  [2, 3]
)
// Calculating..., call expensiveCalculation to cache
memoizedCalcWithAllArgs(2, 3)
// directly return 5, do not call expensiveCalculation
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | ` (...args: any[]) => any ` | `false` | `undefined` | The function to memoize |
| `resolver` | ` ( ...args: Parameters<T> ) => any ` | `true` | `undefined` | A function used to generate cache keys |
| `initCache` | ` Parameters<T>` | `true` | `undefined` | Parameters for initializing the cache |

#### Returns

| Type |
| ---  |
| ` ( ...args: Parameters<T> ) => ReturnType<T> `  |