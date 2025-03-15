# modeItem
[[[desc modeItem

]]]
[[[version modeItem
  
]]]
### Usage

```ts
import { modeItem } from 'parsnip-kit'

modeItem([1, 2, 2, 3, 3, 3]) // 3

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
modeItem(users, 'id') // { id: 1, name: 'Alice' }

modeItem(users, (user) => user.name.toLowerCase()) // { id: 1, name: 'Alice' }
```


### API

#### Type Parameter
[[[template modeItem

]]]
#### Arguments
[[[params modeItem

]]]
#### Returns
[[[returns modeItem

]]]