# isFloat
[[[desc isFloat
判断入参是否为浮点数或浮点数值的`Number`对象。
]]]
[[[version isFloat
  
]]]
### Usage

```ts
import { isFloat } from 'parsnip-kit'

isFloat(123.1) // true
isFloat(new Number(123.1)) // true
isFloat(123) // false
isFloat(BigInt(123)) // false
isFloat(NaN) // false
isFloat(Infinity) // false
```


### API

#### Arguments
[[[params isFloat
arg:待判断的入参
]]]
#### Returns
[[[returns isFloat

]]]