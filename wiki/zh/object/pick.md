# pick
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
返回从对象或数组中，提取指定的键或索引的新对象或者数组，返回值是普通对象或数组，不会修改入参。

> Added in v0.0.1



### Usage

```typescript
import { pick } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }
const keys0 = ['a', 'c'] as const
const result0 = pick(obj, keys0)
// Pick<{ a: number; b: number; c: number; }, "a" | "c">
// { a: 1, c: 3 }

const arr = [1, 2, 3, 4]
const keys1 = ['1', '[3]'] as const
const result1 = pick(obj, keys1)
// Pick<number[], 1 | 3>
// [2, 4]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | 非基本类型  |
| `R` | `extends readonly string[]` | 字段路径数组类型  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | - 待处理的对象或数组 @en The object or array to process |
| `keys` | `R` | `false` | `undefined` | - 需要提取的键或数组索引 @en The keys or array indices to extract |

#### Returns

| Type |
| ---  |
| `Pick<T, KeyOrIndex<ExtractUnion<R>> & keyof T>`  |

#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)