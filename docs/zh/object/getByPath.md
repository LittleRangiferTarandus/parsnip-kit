# getByPath
[[[desc getByPath
输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历取值。当遍历路径中断或值为`undefined`、`null`时，使用`defaultValue`作为默认值。
]]]

[[[version getByPath
  
]]]
### Usage

```ts
import { getByPath } from 'parsnip-kit'

getByPath({ a: 1 }, 'a') // 1
getByPath([1], '[0]') // 1
getByPath({ b: [0, 1, 2] }, 'b[2]') // 2
getByPath({ a: [{ b: { c: 'test' } }] }, 'a[0].b.c') // 'test'
getByPath({ a: 1 }, 'a[0].b.c') // undefined
getByPath({ a: 1 }, 'a[0].b.c', 'test') // 'test'
```


### API

#### Arguments
[[[params getByPath
obj:待取值的对象
path:字段所在的路径
defaultValue:默认值
]]]
#### Returns
[[[returns getByPath

]]]