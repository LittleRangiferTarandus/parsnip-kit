# isNumber
[[[desc isNumber
判断入参是否为基本类型数字或者`Number`实例。
]]]
[[[version isNumber
  
]]]
### Usage

```ts
import { isNumber } from 'parsnip-kit'

isNumber('test') // false
isNumber(123) // true
isNumber(new Number(123)) // true
isNumber(Infinity) // true
isNumber(NaN) // true
```


### API

#### Arguments
[[[params isNumber
arg:待判断的入参
]]]
#### Returns
[[[returns isNumber

]]]