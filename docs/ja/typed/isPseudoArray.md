# isPseudoArray
[[[desc isPseudoArray
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
]]]
#### Returns
[[[returns isPseudoArray

]]]