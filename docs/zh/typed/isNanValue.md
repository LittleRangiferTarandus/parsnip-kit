# isNanValue
[[[desc isNanValue
判断入参是否为`NaN`或`NaN`值的`Number`对象。
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
arg:待判断的入参
]]]
#### Returns
[[[returns isNanValue

]]]