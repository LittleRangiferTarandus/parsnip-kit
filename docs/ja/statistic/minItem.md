# minItem
[[[desc minItem

]]]
[[[version minItem
  
]]]
### Usage

```ts
import { minItem } from 'parsnip-kit'

minItem([1, 2, 3, 4]) // 1

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], item => item.value)
// { value: 10 }

minItem([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], 'value')
// { value: 10 }
```


### API

#### Type Parameter
[[[template minItem

]]]
#### Arguments
[[[params minItem

]]]
#### Returns
[[[returns minItem

]]]