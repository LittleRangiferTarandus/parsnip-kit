# forEachFields
[[[desc forEachFields
]]]

[[[version forEachFields
  
]]]
### Usage

```ts
import { forEachFields } from 'parsnip-kit'

const user = { name: 'John', age: 30 }
forEachFields(user, (value, key, obj) => {
  console.log(`Key: ${key}, Value: ${value}`)
})
// Key: name, Value: John
// Key: age, Value: 30
```


### API

#### Type Parameter
[[[template forEachFields

]]]
#### Arguments
[[[params forEachFields

]]]
#### Returns
[[[returns forEachFields

]]]