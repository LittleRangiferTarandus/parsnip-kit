# max
[[[desc max
计算传入数组的最大值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提取数值。
]]]
[[[version max
  
]]]
### Usage

```ts
import { max } from 'parsnip-kit'

max([1, 2, 3, 4]) // 4

max([{ value: 10 }, { value: 20 }], item => item.value) // 20

max([{ score: 85 }, { score: 95 }], 'score') // 95
```


### API

#### Type Parameter
[[[template max
T:输入的数组元素类型
]]]
#### Arguments
[[[params max
data:输入的数组
getter:用于从数组元素中提取数值
]]]
#### Returns
[[[returns max

]]]