# getByPath
[[[desc getByPath
オブジェクト `obj` とフィールドパス `path` を入力し、パスに従ってオブジェクトを深くトラバースして値を取得します。トラバースが中断された場合（例えば、パスが無効）、または値が未定義または `null` の場合、`defaultValue` をデフォルト値として使用します。
]]]

[[[version getByPath
  
]]]
### Usage

```ts
import { getByPath } from 'parsnip-kit'

getByPath({ a: 1 }, 'a') // 1
getByPath([1], '[0]') // 1
getByPath({ b: [0, 1, 2] }, 'b[2]') // 2
getByPath({ a: [{ b: { c: 'test' } }] }, 'a[0].b.c') // 'test'
getByPath({ a: 1 }, 'a[0].b.c') // undefined
getByPath({ a: 1 }, 'a[0].b.c', 'test') // 'test'
```


### API

#### Arguments
[[[params getByPath
path:フィールドパス
defaultValue:デフォルト値
obj:値を取得するオブジェクト
]]]
#### Returns
[[[returns getByPath

]]]