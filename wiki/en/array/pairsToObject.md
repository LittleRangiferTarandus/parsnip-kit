# pairsToObject
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input a object array `pairs`, and output a plain object composed of key-value pairs extracted from each sub-array. Optional parameters `getKey` and `getValue` can be provided to transform the array elements into keys and values. If not provided, the first element of each sub-array (index 0) will be used as the key, and the second element (index 1) will be used as the value. `getKey` and `getValue` can be field paths similar to [getByPath](../object/getByPath) or callback functions.

> Added in v0.0.1



### Usage

```ts
import { pairsToObject } from 'parsnip-kit'

const users = [['Alex', 16, 'vip'], ['Bob', 659, 'viewer'], ['Carter', 155, 'user'], ['Daniel', 825, 'user']]

pairsToObject(users)
// { Alex: 16, Bob: 659, Carter: 155, Daniel: 825 }

pairsToObject(users, '[0]', '[2]')
// { Alex: 'vip', Bob: 'viewer', Carter: 'user', Daniel: 'user' }

pairsToObject(users, pair => pair[0], pair => `${pair[1]} replies`)
// { Alex: '16 replies', Bob: '659 replies', Carter: '155 replies', Daniel: '825 replies' }
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
| `getKey` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Extract keys form sub-arrays |
| `getValue` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Extract values form sub-arrays |

#### Returns

| Type |
| ---  |
| `ObjectLike`  |

#### Reference

[ObjectLike](../common/types#objectlike)