# omit
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-94.74%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Generate a new object or array from the input object or array with specified keys or indices removed. The returned value is a plain object or array, and the input will not be modified.

### Usage

```typescript
const obj = omit({ a: 1, b: 2, c: 3 }, ['b', 'c'] as const)
// Omit<{ a: number; b: number; c: number; }, "b" | "c">
// { a: 1 }
const arr = omit([1, 2, 3, 4], ['[1]', '3'] as const)
// Omit<number[], 1 | 3>
// [1, 3]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `object` | `false` | `undefined` | - 待处理的对象或数组 @en The object or array to process |
| `keys` | `string[]` | `false` | `undefined` | - 需要删除的键或数组索引 @en The keys or array indices to delete |

#### Returns

| Type |
| ---  |
| `Omit<T, KeyOrIndex<ExtractUnion<R>>>`  |

#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)