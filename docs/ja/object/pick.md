# pick
[[[desc pick
入力されたオブジェクトまたは配列から指定されたキーまたはインデックスを抽出し、新しいオブジェクトまたは配列を返します。戻り値はプレーンオブジェクトまたは配列であり、元の入力は変更されません。
]]]

[[[version pick
  
]]]
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
[[[template pick
T:処理するオブジェクトの型
R:フィールドパスの配列型
]]]
#### Arguments
[[[params pick
obj:処理するオブジェクトまたは配列
keys:抽出するキーまたは配列のインデックス
]]]
#### Returns
[[[returns pick

]]]
#### Reference

[KeyOrIndex](../common/types#keyorindex) [ExtractUnion](../common/types#extractunion)