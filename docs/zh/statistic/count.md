# count
[[[desc count
通过`getter`可选参数提取键值（或直接使用数组元素本身），对提取的值进行计数统计。

`getter`是[getByPath](../object/getByPath)函数的字段路径，或者回调函数，用于提频率统计的标识。
]]]
[[[version count
  
]]]
### Usage

```ts
import { count } from 'parsnip-kit'

count([1, 2, 2, 3, 3, 3]) // Map { 1 => 1, 2 => 2, 3 => 3 }

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
count(users, 'id') // Map { 1 => 2, 2 => 1 }

count(users, (user) => user.name.toLowerCase()) // Map { 'alice' => 2, 'bob' => 1 }
```


### API

#### Type Parameter
[[[template count
T:输入的数组元素类型
]]]
#### Arguments
[[[params count
data:输入的数组
getter:提供区分元素的标识
]]]
#### Returns
[[[returns count

]]]