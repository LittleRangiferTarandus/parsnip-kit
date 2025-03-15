# isNanValue
[[[desc isNanValue
]]]
[[[version isNanValue
  
]]]
### Usage

```ts
import { isNanValue } from 'parsnip-kit'

isNanValue(123) // false
isNanValue('123') // false
isNanValue(Infinity) // false
isNanValue(NaN) // true
isNanValue(new Number(NaN)) // true
```


### API

#### Arguments
[[[params isNanValue
]]]
#### Returns
[[[returns isNanValue

]]]