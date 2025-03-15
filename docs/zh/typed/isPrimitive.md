# isPrimitive
[[[desc isPrimitive
判断入参是否为基本类型，基本类型包括数字、字符串、布尔值、`null`、`undefined`、`symbol`、`bigint`。
]]]
[[[version isPrimitive
  
]]]
### Usage

```ts
import { isPrimitive } from 'parsnip-kit'

isPrimitive(1) // true
isPrimitive('test') // true
isPrimitive(true) // true
isPrimitive(null) // true
isPrimitive(undefined) // true
isPrimitive(Symbol()) // true
isPrimitive(BigInt(1)) // true

isPrimitive(new Number(1)) // false
isPrimitive(new String('test')) // false
isPrimitive(new Boolean(true)) // false
isPrimitive({}) // false
isPrimitive(new Date()) // false
```


### API

#### Arguments
[[[params isPrimitive
arg:待判断的入参
]]]
#### Returns
[[[returns isPrimitive

]]]