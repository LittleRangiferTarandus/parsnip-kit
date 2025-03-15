# forEachFields
[[[desc forEachFields
オブジェクト `obj` とイテレータ関数 `iterator` を受け取り、オブジェクトの各フィールドをイテレートし、各フィールドの値に対してイテレータ関数 `iterator` を実行する関数です。
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
T:イテレートするオブジェクトの型
]]]
#### Arguments
[[[params forEachFields
obj :イテレートするオブジェクト
iterator :イテレータ関数
]]]
#### Returns
[[[returns forEachFields

]]]