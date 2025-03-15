# median
[[[desc median
计算传入数组的中位数，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。

`getter`是[getByPath](../object/getByPath)的函数字段路径，或者回调函数，用于提取数值。
]]]
[[[version median
  
]]]
### Usage

```ts
import { median } from 'parsnip-kit'

median([1, 2, 3, 4, 0]) // 2
median([1, 2, 3, 4]) // 2.5

median([{ value: 10 }, { value: 20 }, { value: 10 }], item => item.value) // 10

median([{ score: 100 }, { score: 85 }, { score: 95 }], 'score') // 95
```


### API

#### Type Parameter
[[[template median
T:输入的数组元素类型
]]]
#### Arguments
[[[params median
data:输入的数组
getter:用于从数组元素中提取数值
]]]
#### Returns
[[[returns median

]]]