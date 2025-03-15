# unzipToArrays
[[[desc unzipToArrays
オブジェクト obj を入力し、キーを含む配列と値を含む配列の 2 つの配列を出力します。
]]]

[[[version unzipToArrays
  
]]]
### Usage

```ts
import { unzipToArrays } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
unzipToArrays(obj)
// [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]

unzipToArrays(obj, (_, key) => key.toUpperCase(), (value) => value + '')
// [['ALEX', 'BOB', 'CARTER', 'DANIEL'], ['16', '659', '155', '825']]

```


### API

#### Type Parameter
[[[template unzipToArrays
T:元オブジェクトの型
]]]
#### Arguments
[[[params unzipToArrays
obj:元オブジェクト
createKey:返却されるキー配列の要素を作成する
createValue:返却される値配列の要素を作成する
]]]
#### Returns
[[[returns unzipToArrays

]]]