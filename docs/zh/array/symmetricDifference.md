# symmetricDifference

[[[desc symmetricDifference
  输入两个数组`arr1`、`arr2`，返回它们的对称差，对称差是指两个集合不相交的部分。
  
  接收一个`getter`，它是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提供区分元素的标识。
]]]

[[[version symmetricDifference
  
]]]


### Usage

```ts
import { symmetricDifference } from 'parsnip-kit'

symmetricDifference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3, 4, 8]

symmetricDifference(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

symmetricDifference(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

symmetricDifference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [5, 6]

symmetricDifference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [5, 6]
```


### API

#### Type Parameter

[[[template symmetricDifference
T:数组元素类型
]]]

#### Arguments

[[[params symmetricDifference
arr1:需要求对称差的数组
arr2:需要求对称差的数组
getter:提供区分元素的标识
]]]

#### Returns

[[[returns symmetricDifference

]]]