# forEachFields
[[[desc forEachFields
输入一个对象`obj`和迭代器`iterator`，遍历对象的每个字段，对每个字段的值执行`iterator`。
]]]

[[[version forEachFields
  
]]]
### Usage

```ts
import { forEachFields } from 'parsnip-kit'

const user = { name: 'John', age: 30 }
forEachFields(user, (value, key, obj) => {
  console.log(`Key: ${key}, Value: ${value}`)
})
// Key: name, Value: John
// Key: age, Value: 30
```


### API

#### Type Parameter
[[[template forEachFields
T:对象类型
]]]
#### Arguments
[[[params forEachFields
obj:待遍历的对象
iterator:迭代器函数
]]]
#### Returns
[[[returns forEachFields

]]]