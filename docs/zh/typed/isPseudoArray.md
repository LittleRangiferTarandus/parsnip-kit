# isPseudoArray
[[[desc isPseudoArray
判断入参是否为伪数组，即可以通过数字索引访问（一般的 JS 对象都满足这一点），拥有数字`length`的对象。
]]]
[[[version isPseudoArray
  
]]]
### Usage

```ts
import { isPseudoArray } from 'parsnip-kit'

isPseudoArray({}) // false
isPseudoArray({ length: 1 }) // true
isPseudoArray([]) // true

function test () {
 isPseudoArray(arguments) // true
}
test()

// in browser
isPseudoArray(document.querySelectorAll('div')) // true
```


### API

#### Arguments
[[[params isPseudoArray
arg:待判断的入参
]]]
#### Returns
[[[returns isPseudoArray

]]]