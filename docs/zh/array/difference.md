# difference
      
[[[desc difference
  输入两个数组`arr1`、`arr2`，返回`arr1` - `arr2`的差集。
  
  接收一个`getter`，它是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提供区分元素的标识。
]]]

[[[version difference
  
]]]

### Usage

```ts
import { difference } from 'parsnip-kit'

difference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3]

difference(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 2 }, { v: 3 }]

difference(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [2] }, { v: [3] }]

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // []

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // []
```


### API

#### Type Parameter

[[[template difference
  T: 数组元素类型
]]]

#### Arguments

[[[params difference
  arr1: 需要求差集的数组
  arr2: 需要求差集的数组
  getter: 提供区分元素的标识
]]]

#### Returns

[[[returns difference

]]]
