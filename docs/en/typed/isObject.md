# isObject
[[[desc isObject
]]]
[[[version isObject
  
]]]
### Usage

```ts
import { isObject } from 'parsnip-kit'

isObject(null) // false
isObject({}) // true
isObject(() => {}) // true
isObject(new Number()) // true
isObject(/test/) // true
isObject(new Date()) // true
```


### API

#### Arguments
[[[params isObject
]]]
#### Returns
[[[returns isObject

]]]