# sortIndex

[[[desc sortIndex
  
]]]

[[[version sortIndex
  
]]]

### Usage

```ts
import { sortIndex } from 'parsnip-kit'

sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]

sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
```


### API

#### Type Parameter

[[[template sortIndex

]]]

#### Arguments

[[[params sortIndex

]]]

#### Returns

[[[returns sortIndex

]]]