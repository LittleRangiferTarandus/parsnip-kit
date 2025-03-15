# isEqualStrict
[[[desc isEqualStrict
2つのパラメータ `arg1` と `arg2` を入力し、厳格に等しいかどうかを返します。
]]]

[[[version isEqualStrict
  
]]]
### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // false
isEqualStrict(NaN, NaN) // true
isEqualStrict({ a: 1 }, { a: 1 }) // false
```


### API

#### Arguments
[[[params isEqualStrict
arg1:比較する変数
arg2:比較する変数
]]]
#### Returns
[[[returns isEqualStrict

]]]