# maxItem
[[[desc maxItem

]]]
[[[version maxItem
  
]]]
### Usage

```ts
import { maxItem } from 'parsnip-kit'

maxItem([1, 2, 3, 4]) // 4

maxItem([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], item => item.value)
// { value: 20 }

maxItem([{ value: 10 }, { value: 20 }, { value: 20, key: 'count' }], 'value')
// { value: 20 }
```


### API

#### Type Parameter
[[[template maxItem

]]]
#### Arguments
[[[params maxItem

]]]
#### Returns
[[[returns maxItem

]]]