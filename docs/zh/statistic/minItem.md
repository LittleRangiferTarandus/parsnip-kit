# minItem
[[[desc minItem
计算传入数组的最小值，返回最小值所在的第一个数组元素，支持通过可选参数`getter`提取数值（或直接使用数组元素的数值）。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提取数值。
]]]
[[[version minItem
  
]]]
### Usage

```ts
import { minItem } from 'parsnip-kit'

minItem([1, 2, 3, 4]) // 1

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], item => item.value)
// { value: 10 }

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], 'value')
// { value: 10 }
```


### API

#### Type Parameter
[[[template minItem
T:输入的数组元素类型
]]]
#### Arguments
[[[params minItem
data:输入的数组
getter:用于从数组元素中提取数值
]]]
#### Returns
[[[returns minItem

]]]