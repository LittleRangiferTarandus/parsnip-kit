# isInt
[[[desc isInt
判断入参是否为整数或整数值的`Number`对象。
]]]
[[[version isInt
  
]]]
### Usage

```ts
import { isInt } from 'parsnip-kit'

isInt(123) // true
isInt(new Number(123)) // true
isInt(123.1) // false
isInt(BigInt(123)) // false
isInt(NaN) // false
isInt(Infinity) // false
```


### API

#### Arguments
[[[params isInt
arg:待判断的入参
]]]
#### Returns
[[[returns isInt

]]]