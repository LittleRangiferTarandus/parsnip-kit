# chunk
[[[desc chunk
  将数组 `arr` 分割成长度为 `length` 的子数组。
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
arr: 要分割的数组
length: 子数组的长度
]]]

#### Returns

[[[returns chunk

]]]
