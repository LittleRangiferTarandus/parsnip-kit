# isBigInt
[[[desc isBigInt
判断入参是否为`bigint`。
]]]
[[[version isBigInt
  
]]]
### Usage

```ts
import { isBigInt } from 'parsnip-kit'

isBigInt(BigInt(123)) // true
isBigInt(123) // false
isBigInt(NaN) // false
isBigInt(Infinity) // false
```


### API

#### Arguments

#### Arguments
[[[params isBigInt
arg:待判断的入参
]]]
#### Returns
[[[returns isBigInt

]]]