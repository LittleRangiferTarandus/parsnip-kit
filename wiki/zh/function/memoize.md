# memoize
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
这是一个记忆化函数，用于缓存函数的返回值。当使用相同的参数再次调用时，它会返回缓存的结果，避免重复计算。 

默认使用 `JSON.stringify(arguments)` 作为缓存的 key。


> Added in v0.0.1



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

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends (...args: any[]) => any` | 要记忆化的函数类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `func` | `T` | `false` | `undefined` | 要记忆化的函数  |
| `resolver` | ` ( ...args: Parameters<T> ) => any ` | `true` | `undefined` | 用于生成缓存键的函数  |
| `initCache` | ` Parameters<T>` | `true` | `undefined` | 初始化缓存时的参数  |

#### Returns

| Type |
| ---  |
| ` ( ...args: Parameters<T> ) => ReturnType<T> `  |