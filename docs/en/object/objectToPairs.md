# objectToPairs
[[[desc objectToPairs
]]]

[[[version objectToPairs
  
]]]
### Usage

```ts
import { objectToPairs } from 'parsnip-kit'

const obj = {
 Alex: 16,
 Bob: 659,
 Carter: 155,
 Daniel: 825
}
objectToPairs(obj)
// [['Alex', 16], ['Bob', 659], ['Carter', 155], ['Daniel', 825]]

objectToPairs(obj, (value, key) => ({ [key]: value }))
// [{ Alex: 16 }, { Bob: 659 }, { Carter: 155 }, { Daniel: 825 }]
```


### API

#### Type Parameter
[[[template objectToPairs

]]]
#### Arguments
[[[params objectToPairs

]]]
#### Returns
[[[returns objectToPairs

]]]