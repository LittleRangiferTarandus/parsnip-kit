# splitToArrays
[[[desc splitToArrays
]]]

[[[version splitToArrays
  
]]]
### Usage

```ts
import { splitToArrays } from 'parsnip-kit'

const obj = {
  Alex: 16,
  Bob: 659,
  Carter: 155,
  Daniel: 825
}
splitToArrays(obj)
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]

splitToArrays(obj, (value, key) => [key, value])
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]
```


### API

#### Type Parameter
[[[template splitToArrays

]]]
#### Arguments
[[[params splitToArrays

]]]
#### Returns
[[[returns splitToArrays

]]]