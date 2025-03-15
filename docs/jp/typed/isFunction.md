# isFunction
[[[desc isFunction
]]]
[[[version isFunction
  
]]]
### Usage

```ts
import { isFunction } from 'parsnip-kit'

isFunction({}) // false
isFunction(() => {}) // true
isFunction(class {}) // true
isFunction(function*() {}) // true
isFunction(async () => {}) // true
```


### API

#### Arguments
[[[params isFunction
]]]
#### Returns
[[[returns isFunction

]]]