# filterFields
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an object `obj` and an iterator `iterator`, iterate over each field of the object, execute `iterator` for each field's value, remove the field if the return value `== false`, and return a new plain object or array.

> Added in v0.0.1



### Usage

```ts
import { filterFields } from 'parsnip-kit'

const obj = { a: 1, b: 2, c: 3 }
const iterator0 = (value: number) => value > 1
const result0 = filterFields(obj, iterator0)
// { b: 2, c: 3 }

const arr0 = [0, 1, 2, 3]
const iterator1 = (value: number) => value % 2 === 0
const result1 = filterFields(arr0, iterator1)
// [0, 2]

const arr1 = [0, 1, 2, 3]
arr1['test'] = 'test'
const iterator2 = (value, key) => typeof key === 'string'
const result2 = filterFields(arr1, iterator2)
// [test: 'test']
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Type of object to iterate |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `obj` | `T` | `false` | `undefined` | Object to iterate |
| `iterator` | `(value: any, key: string, object: T) => boolean` | `false` | `undefined` | Iterator function |

#### Returns

| Type |
| ---  |
| `object`  |