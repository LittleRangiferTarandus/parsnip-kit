# getTypeTag
[[[desc getTypeTag
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
]]]
#### Returns
[[[returns getTypeTag

]]]