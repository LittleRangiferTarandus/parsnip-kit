# isInfinity
[[[desc isInfinity
判断入参是否为正负无穷大或正负无穷大值的`Number`对象。
]]]
[[[version isInfinity
  
]]]
### Usage

```ts
import { isInfinity } from 'parsnip-kit'

isInfinity(123) // false
isInfinity('123') // false
isInfinity(NaN) // false
isInfinity(Infinity) // true
isInfinity(-Infinity) // true
isInfinity(new Number(Infinity)) // true
```


### API

#### Arguments
[[[params isInfinity
arg:待判断的入参
]]]
#### Returns
[[[returns isInfinity

]]]