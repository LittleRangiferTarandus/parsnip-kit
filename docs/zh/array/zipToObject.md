# zipToObject

[[[desc zipToObject
输入两个数组`keys`和`values`，返回`keys`元素作为键，`values`元素作为值的普通对象。

可选参数`getKey`和`getValue`用于把对象元素转换为键和值，它们是[getByPath](../object/getByPath)函数的字段路径，或者回调函数。
]]]

[[[version zipToObject
  
]]]

### Usage

```ts
import { zipToObject } from 'parsnip-kit'

zipToObject(['id', 'name', 'skill'], [1, 'Alex', ['Javascript']])
// { id: 1, name: 'Alex', skill: ['Javascript'] }

const users = [{ id: 0, user: 'IAmBot' }, { id: 2, user: 'Alice' }, { id: 5, user: 'Tom' }]
const record = [
  { system: 'Linux', count: 99999, userId: 0 },
  { system: 'Mac OS', count: 10, userId: 2 },
  { system: 'Window', count: 2, userId: 5 },
]
zipToObject(
  users, record, 'user', 'count'
) // { IAmBot: 99999, Alice: 10, Tom: 2 }

zipToObject(
  users, record, item => item.user, item => item.count
) // { IAmBot: 99999, Alice: 10, Tom: 2 }
```


### API

#### Type Parameter

[[[template zipToObject
T:作为键的数组元素类型
U:作为值的数组元素类型
]]]

#### Arguments


[[[params zipToObject
keys:作为键的数组
values:作为值的数组
getKey:把数组元素转换为键
getValue:把数组元素转换为值
]]]

#### Returns
[[[returns zipToObject

]]]

#### Reference

[ObjectLike](../common/types#objectlike)