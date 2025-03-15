# isFunction
[[[desc isFunction
判断入参是否为函数，包括类（`class {}`）、生成器（`function*() {}`）、异步函数（`async function() {}`）。
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
arg:待判断的入参
]]]
#### Returns
[[[returns isFunction

]]]