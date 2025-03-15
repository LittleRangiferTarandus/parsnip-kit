# omit
[[[desc omit
返回从对象或数组中，删除指定的键或索引的新对象或者数组，返回值是普通对象或数组，不会修改入参。
]]]

[[[version omit
  
]]]
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
[[[template omit
T:待处理对象的类型
R:字段路径数组类型
]]]
#### Arguments
[[[params omit
obj: 待处理的对象或数组
keys: 需要删除的键或数组索引
]]]
#### Returns
[[[returns omit

]]]
#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)