# objectToPairs
[[[desc objectToPairs
输入对象`obj`，返回一个数组，由每个字段的键值对形成的数组组成数组，或由可选参数`createItem`返回组成。
]]]

[[[version objectToPairs
  
]]]
### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToPairs(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
```


### API

#### Type Parameter
[[[template objectToPairs
T:原对象的类型
]]]
#### Arguments
[[[params objectToPairs
obj:原对象
createItem:创建数组元素
]]]
#### Returns
[[[returns objectToPairs

]]]