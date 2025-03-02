# omit
![Static Badge](https://img.shields.io/badge/Coverage-98.68%-FF8C00)
      
返回从对象或数组中，删除指定的键或索引的新对象或者数组，返回值是普通对象或数组，不会修改入参。

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
| `T` | `extends object` | 非基本类型  |
| `R` | `extends readonly string[]` | 字段路径数组类型  |

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