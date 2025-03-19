# chunk
[[[desc chunk
  配列 `arr` を長さ `length` のサブ配列に分割します。
]]]
[[[version chunk
  
]]]

### Usage

```ts
import { chunk } from 'parsnip-kit'

const arr = [1, 2, 3, 4, 5]
chunk(arr, 2)
// [[1, 2], [3, 4], [5]]
```


### API

#### Type Parameter

[[[template chunk
T: 要分割的数组的元素类型
]]]

#### Arguments

[[[params chunk
arr: 分割する配列
length: サブ配列の長さ
]]]

#### Returns

[[[returns chunk

]]]
