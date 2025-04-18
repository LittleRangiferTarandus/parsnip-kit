# pairsToObject

[[[desc pairsToObject
  输入一个二维数组`pairs`，返回从每一项中提取的键值对组成的普通对象。可选参数`getKey`和`getValue`用于把子对象转换为键和值，为空时默认取对象元素`[0]`作为键，元素`[1]`作为值。
  
  `getKey`和`getValue`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数。
]]]

[[[version pairsToObject
  
]]]

### Usage

```ts
import { pairsToObject } from 'parsnip-kit'

const users = [['Alex', 16, 'vip'], ['Bob', 659, 'viewer'], ['Carter', 155, 'user'], ['Daniel', 825, 'user']]

pairsToObject(users)
// { Alex: 16, Bob: 659, Carter: 155, Daniel: 825 }

pairsToObject(users, '[0]', '[2]')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

pairsToObject(users, pair => pair[0], pair => `${pair[1]} replies`)
// { Alex: '16 replies', Bob: '659 replies', Carter: '155 replies', Daniel: '825 replies' }
```


### API

#### Type Parameter

[[[template pairsToObject
T: 数组元素类型
]]]

#### Arguments

[[[params pairsToObject
pairs: 键值对二维数组
getKey: 从子数组中提取键
getValue: 从子数组中提取值
]]]

#### Returns


[[[returns pairsToObject

]]]

#### Reference

[ObjectLike](../common/types#objectlike)