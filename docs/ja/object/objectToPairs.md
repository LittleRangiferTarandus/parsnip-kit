# objectToPairs
[[[desc objectToPairs
オブジェクト `obj` を入力し、各フィールドのキー値ペアからなる配列、またはオプションパラメータ `createItem` によって返された結果からなる配列を出力します。
]]]

[[[version objectToPairs
  
]]]
### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToPairs(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
```


### API

#### Type Parameter
[[[template objectToPairs
T: 元オブジェクトの型
]]]
#### Arguments
[[[params objectToPairs
obj:元オブジェクト
createItem:返却配列の要素を作成する
]]]
#### Returns
[[[returns objectToPairs

]]]