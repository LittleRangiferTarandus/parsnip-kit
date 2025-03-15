# deleteByPath
[[[desc deleteByPath
オブジェクト `obj` とフィールドパス `path` を入力し、パスに従ってオブジェクトを深くトラバースして、パスの末端にあるフィールドを削除します。
]]]

[[[version deleteByPath
  
]]]
### Usage

```ts
import { deleteByPath } from 'parsnip-kit'

const test0 = { a: 1 }
deleteByPath(test0, 'a') // {}

const test1 = [1]
deleteByPath(test1, '[0]') // []

const test2 = { a: { b: { c: 1 } }, d: [2] }
deleteByPath(test2, 'a.b') // { a: {}, d: [2] }
```


### API

#### Arguments
[[[params deleteByPath
obj:値を削除するオブジェクト
path :フィールドパス
]]]
#### Returns
[[[returns deleteByPath

]]]