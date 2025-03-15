# intersection
      
[[[desc intersection
  输入两个数组`arr1`、`arr2`，输出它们的交集。
  
  接收一个可选参数`getter`，它是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提供区分元素的标识。
]]]

[[[version intersection
  
]]]


### Usage

```ts
import { intersection } from 'parsnip-kit'

intersection([1, 2, 3, NaN], [1, 4, 8, NaN]) // [1, NaN]

intersection(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }]

intersection(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }]

intersection([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16]

intersection([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16]
```


### API

#### Type Parameter

[[[template intersection
  T: 数组元素类型
]]]

#### Arguments

[[[params intersection
  arr1: 需要求交集的数组
  arr2: 需要求交集的数组
  getter: 提供区分元素的标识
]]]

#### Returns

[[[returns intersection

]]]