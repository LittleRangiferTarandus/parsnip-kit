# deleteByPath
[[[desc deleteByPath
输入一个对象`obj`，和字段所在的路径`path`，按照路径深度遍历，删除路径末端的字段。
]]]

[[[version deleteByPath
  
]]]
### Usage

```ts
import { deleteByPath } from 'parsnip-kit'

const test0 = { a: 1 }
deleteByPath(test0, 'a') // {}

const test1 = [1]
deleteByPath(test1, '[0]') // []

const test2 = { a: { b: { c: 1 } }, d: [2] }
deleteByPath(test2, 'a.b') // { a: {}, d: [2] }
```


### API

#### Arguments
[[[params deleteByPath
obj:待删除字段的对象
path:字段所在的路径
]]]
#### Returns
[[[returns deleteByPath

]]]