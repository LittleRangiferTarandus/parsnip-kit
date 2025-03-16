# splitToArrays
[[[desc splitToArrays
输入对象`obj`，返回一个数组，由`obj`分割得到的每个字段普通对象组成数组，或由可选参数`createItem`返回组成。
]]]

[[[version splitToArrays
  
]]]
### Usage

```ts
import { splitToArrays } from 'parsnip-kit'

const obj = {
  Alex: 16,
  Bob: 659,
  Carter: 155,
  Daniel: 825
}
splitToArrays(obj)
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]

splitToArrays(obj, (value, key) => [key, value])
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
```


### API

#### Type Parameter
[[[template splitToArrays
T:原对象的类型
]]]
#### Arguments
[[[params splitToArrays
obj:原对象
createItem:创建数组元素
]]]
#### Returns
[[[returns splitToArrays

]]]