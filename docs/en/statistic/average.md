# average
[[[desc average

]]]
[[[version average
  
]]]
### Usage

```ts
import { average } from 'parsnip-kit'

average([1, 2, 3, 4]) // 2.5

average([{ value: 10 }, { value: 20 }], item => item.value) // 15

average([{ score: 85 }, { score: 95 }], 'score') // 90
```


### API

#### Type Parameter
[[[template average

]]]
#### Arguments
[[[params average

]]]
#### Returns
[[[returns average

]]]