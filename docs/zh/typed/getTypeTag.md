# getTypeTag
[[[desc getTypeTag
返回传入参数的类型标签，通过调用`Object.prototype.toString`方法实现。
]]]
[[[version getTypeTag
  
]]]
### Usage

```ts
import { getTypeTag } from 'parsnip-kit'

getTypeTag('hello') // 'String'
getTypeTag(42) // 'Number'
getTypeTag(null) // 'Null'
getTypeTag([1, 2, 3]) // 'Array'
getTypeTag({ a: 1 }) // 'Object'
getTypeTag(() => {}) // 'Function'
```


### API

#### Arguments
[[[params getTypeTag
arg:待检测的参数
]]]
#### Returns
[[[returns getTypeTag

]]]