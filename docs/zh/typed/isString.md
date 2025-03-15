# isString
[[[desc isString
判断入参是否为基本类型字符串或者`String`实例。
]]]
[[[version isString
  
]]]
### Usage

```ts
import { isString } from 'parsnip-kit'

isString('test') // true
isString(new String('test')) // true
isString(123) // false
```


### API

#### Arguments
[[[params isString
arg:待判断的入参
]]]
#### Returns
[[[returns isString

]]]