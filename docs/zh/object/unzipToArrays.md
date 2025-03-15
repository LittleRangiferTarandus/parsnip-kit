# unzipToArrays
[[[desc unzipToArrays
输入对象`obj`，输出分别是它的键和值的数组。
]]]

[[[version unzipToArrays
  
]]]
### Usage

```ts
import { unzipToArrays } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
unzipToArrays(obj)
// [['Alex', 'Bob', 'Carter', 'Daniel'], [16, 659, 155, 825]]

unzipToArrays(obj, (_, key) => key.toUpperCase(), (value) => value + '')
// [['ALEX', 'BOB', 'CARTER', 'DANIEL'], ['16', '659', '155', '825']]

```


### API

#### Type Parameter
[[[template unzipToArrays
T:原对象的类型
]]]
#### Arguments
[[[params unzipToArrays
obj: 原对象
createKey: 创建 key 的数组元素
createValue: 创建 value 的数组元素
]]]
#### Returns
[[[returns unzipToArrays

]]]