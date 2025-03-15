# omit
[[[desc omit
指定されたキーまたはインデックスを削除して、入力されたオブジェクトまたは配列から新しいオブジェクトまたは配列を生成します。戻り値はプレーンオブジェクトまたは配列であり、入力は変更されません。
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
T:処理するオブジェクトの型
R:フィールドパスの配列型
]]]
#### Arguments
[[[params omit
obj:処理するオブジェクトまたは配列
keys:削除するキーまたは配列のインデックス
]]]
#### Returns
[[[returns omit

]]]
#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)