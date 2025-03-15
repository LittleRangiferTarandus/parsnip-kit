# isBoolean
[[[desc isBoolean
判断入参是否为基本类型布尔值或者`Boolean`实例。
]]]
[[[version isBoolean
  
]]]
### Usage

```ts
import { isBoolean } from 'parsnip-kit'

isBoolean('test') // false
isBoolean(1) // false
isBoolean('') // false
isBoolean(null) // false
isBoolean(undefined) // false
isBoolean(true) // true
isBoolean(false) // true
isBoolean(Boolean()) // true
```


### API

#### Arguments
[[[params isBoolean
arg:待判断的入参
]]]
#### Returns
[[[returns isBoolean

]]]