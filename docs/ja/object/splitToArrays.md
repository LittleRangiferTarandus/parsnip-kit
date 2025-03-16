# splitToArrays
[[[desc splitToArrays
オブジェクト `obj` を入力し、`obj` の各フィールドからなるプレーンオブジェクトの配列を返します。オブジェクトごとに分割されたもの、またはオプションパラメータ `createItem` によって返された結果から構成された配列です。
]]]

[[[version splitToArrays
  
]]]
### Usage

```ts
import { splitToArrays } from 'parsnip-kit'

const obj = {
  Alex: 16,
  Bob: 659,
  Carter: 155,
  Daniel: 825
}
splitToArrays(obj)
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]

splitToArrays(obj, (value, key) => [key, value])
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
```


### API

#### Type Parameter
[[[template splitToArrays
T:元オブジェクトの型
]]]
#### Arguments
[[[params splitToArrays
obj:元オブジェクト
createItem:返却配列の要素を作成する
]]]
#### Returns
[[[returns splitToArrays

]]]