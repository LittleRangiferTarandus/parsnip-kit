# average
[[[desc average
计算传入数组的平均值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提取数值。
]]]
[[[version average
  
]]]
### Usage

```ts
import { average } from 'parsnip-kit'

average([1, 2, 3, 4]) // 2.5

average([{ value: 10 }, { value: 20 }], item => item.value) // 15

average([{ score: 85 }, { score: 95 }], 'score') // 90
```


### API

#### Type Parameter
[[[template average
T:输入的数组元素类型
]]]
#### Arguments
[[[params average
data:输入的数组
getter: 用于从数组元素中提取数值
]]]
#### Returns
[[[returns average

]]]