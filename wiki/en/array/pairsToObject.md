# pairsToObject
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
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

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `pairs` | `any[]` | `false` | `undefined` | The array of key-value object |
| `getKey` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | Extract keys form sub-arrays |
| `getValue` | `string \| ((item: any[], index: number, arr: any[][]) => any)` | `true` | `undefined` | Extract values form sub-arrays |

#### Returns

| Type |
| ---  |
| `object`  |