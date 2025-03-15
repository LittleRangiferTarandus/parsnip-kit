# isObject
[[[desc isObject
判断入参是否为对象，包括一般的对象（`{ key: 'value }`）、函数（`function() {}`）、基本类型的包装类实例（`new Number(1)`）等变量都会返回`true`。
]]]
[[[version isObject
  
]]]
### Usage

```ts
import { isObject } from 'parsnip-kit'

isObject(null) // false
isObject({}) // true
isObject(() => {}) // true
isObject(new Number()) // true
isObject(/test/) // true
isObject(new Date()) // true
```


### API

#### Arguments
[[[params isObject
arg:待判断的入参
]]]
#### Returns
[[[returns isObject

]]]