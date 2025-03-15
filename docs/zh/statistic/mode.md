# mode
[[[desc mode
通过`getter`可选参数提取键值（或直接使用数组元素本身）,返回其中出现最多的值。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提供频率统计的标识。
]]]
[[[version mode
  
]]]
### Usage

```ts
import { mode } from 'parsnip-kit'

mode([1, 2, 2, 3, 3, 3]) // 3

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
mode(users, 'id') // 1

mode(users, (user) => user.name.toLowerCase()) // 'alice'
```


### API

#### Type Parameter
[[[template mode
T:输入的数组元素类型
]]]
#### Arguments
[[[params mode
data:输入的数组
getter:提供区分元素的标识
]]]
#### Returns
[[[returns mode

]]]