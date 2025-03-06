# forEachFields
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
A function that takes an object `obj` and an `iterator` function, iterates over each field of the object, and executes the `iterator` for each field's value.

> Added in v0.0.1



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

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Object type  |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | Object to iterate |
| `iterator` | `(value: any, key: string, object: T) => any` | `false` | `undefined` | Iterator function |

#### Returns

| Type |
| ---  |
| `void`  |