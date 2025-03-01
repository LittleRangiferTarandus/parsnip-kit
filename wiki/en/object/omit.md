# omit
![Static Badge](https://img.shields.io/badge/Coverage-98.68%-FF8C00)
      
Generate a new object or array from the input object or array with specified keys or indices removed. The returned value is a plain object or array, and the input will not be modified.

> Added in v0.0.1



### Usage

```typescript
import { omit } from 'parsnip-kit'

const obj = omit({ a: 1, b: 2, c: 3 }, ['b', 'c'] as const)
// Omit<{ a: number; b: number; c: number; }, "b" | "c">
// { a: 1 }
const arr = omit([1, 2, 3, 4], ['[1]', '3'] as const)
// Omit<number[], 1 | 3>
// [1, 3]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Complex type |
| `R` | `extends readonly string[]` | Array type of field paths |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | - 待处理的对象或数组 @en The object or array to process |
| `keys` | `R` | `false` | `undefined` | - 需要删除的键或数组索引 @en The keys or array indices to delete |

#### Returns

| Type |
| ---  |
| `Omit<T, KeyOrIndex<ExtractUnion<R>>>`  |

#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)