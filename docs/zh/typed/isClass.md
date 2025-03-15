# isClass
[[[desc isClass
判断入参是否为类。
]]]
[[[version isClass
  
]]]
### Usage

```ts
import { isClass } from 'parsnip-kit'

isClass({}) // false
isClass(() => {}) // false
isClass(class {}) // true
```


### API

[[[params isClass
arg:待判断的入参
]]]
#### Returns
[[[returns isClass

]]]