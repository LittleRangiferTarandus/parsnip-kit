# union

[[[desc union
输入两个数组`arr1`、`arr2`，输出它们的并集。

接收一个`getter`，它是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提供区分元素的标识。
]]]

[[[version union
  
]]]

### Usage

```ts
import { union } from 'parsnip-kit'

union([1, 2, 3, NaN], [1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]

union(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

union(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16, 5, 6]
```


### API

#### Type Parameter

[[[template union
T:数组元素类型
]]]

#### Arguments

[[[params union
arr1:需要求并集的数组
arr2:需要求并集的数组
getter:提供区分元素的标识
]]]

#### Returns

[[[returns union

]]]