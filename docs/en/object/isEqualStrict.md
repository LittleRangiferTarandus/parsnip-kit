# isEqualStrict
[[[desc isEqualStrict
]]]

[[[version isEqualStrict
  
]]]
### Usage

```ts
import { isEqualStrict } from 'parsnip-kit'

isEqualStrict(1, 1) // true
isEqualStrict(+0, -0) // false
isEqualStrict(NaN, NaN) // true
isEqualStrict({ a: 1 }, { a: 1 }) // false
```


### API

#### Arguments
[[[params isEqualStrict

]]]
#### Returns
[[[returns isEqualStrict

]]]