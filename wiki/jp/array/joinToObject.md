# joinToObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an array of objects `fields`, and output a plain object formed by combining each item from the array.

The optional parameters `getKey` and `getValue` are used to convert child objects into keys and values. When they are not provided, the first field of the array element is extracted by default. `getKey` and `getValue` can be field paths similar to [getByPath](../object/getByPath) or callback functions.

> Added in v0.0.1



### Usage

```ts
import { joinToObject } from 'parsnip-kit'

const users = [{ Alex: 'vip' }, { Bob: 'viewer' }, { Carter: 'user' }, { Daniel: 'user' }]

joinToObject(users)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

const data = [
  { name: 'Alex', type: 'vip' },
  { name: 'Bob', type: 'viewer' },
  { name: 'Carter', type: 'user' },
  { name: 'Daniel', type: 'user' }
]
joinToObject(data, 'name', 'type')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

joinToObject(data, pair => pair.name, pair => pair.type)
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | `extends object` | Type of elements of array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `pairs` | `T[]` | `false` | `undefined` | The array of key-value object |
| `getKey` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Extract keys form sub-objects |
| `getValue` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Extract values form sub-objects |

#### Returns

| Type |
| ---  |
| `ObjectLike`  |

#### Reference

[ObjectLike](../common/types#objectlike)