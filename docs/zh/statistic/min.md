# min
[[[desc min
计算传入数组的最小值，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提取数值。
]]]
[[[version min
  
]]]
### Usage

```ts
import { min } from 'parsnip-kit'

min([1, 2, 3, 4]) // 1

min([{ value: 10 }, { value: 20 }], item => item.value) // 10

min([{ score: 85 }, { score: 95 }], 'score') // 85
```


### API

#### Type Parameter
[[[template min
T:输入的数组元素类型
]]]
#### Arguments
[[[params min
data:输入的数组
getter:用于从数组元素中提取数值
]]]
#### Returns
[[[returns min

]]]