# isInt
[[[desc isInt
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
]]]
#### Returns
[[[returns isInt

]]]