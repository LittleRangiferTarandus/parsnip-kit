# setByPath
[[[desc setByPath
输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历设置对象的值`value`。
]]]

[[[version setByPath
  
]]]
### Usage

```ts
import { setByPath } from 'parsnip-kit'

const test0 = {}
setByPath(test0, 'a', 1) // { a: 1 }

const test1 = []
setByPath(test1, '[0]', 1) // [1]

const test2 = {}
setByPath(test2, '[0]', 1) // { 0: 1 }

const test3 = {}
setByPath(test3, 'b[2]', 2) // { b: [<empty>, <empty>, 2] }

const test4 = { a: 1 }
setByPath(test4, 'a[0]', 'test') // { a: ['test'] }

const test5 = { a: 1 }
setByPath(test5, 'b', 2) // { a: 1, b: 2 }
```


### API

#### Arguments
[[[params setByPath
obj:待设置值的对象
path:字段所在的路径
value: 设置的值
]]]
#### Returns
[[[returns setByPath

]]]