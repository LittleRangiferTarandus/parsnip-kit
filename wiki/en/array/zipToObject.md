# zipToObject
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input two arrays `keys` and `values`, and output a plain object where elements of `keys` serve as keys and elements of `values` serve as values. Optional parameters `getKey` and `getValue` can be provided to transform elements of the objects into keys and values, respectively. These can be field paths similar to [getByPath](../object/getByPath) or callback functions.

### Usage

```ts
import { zipToObject } from 'parsnip-kit'

zipToObject(['id', 'name', 'skill'], [1, 'Alex', ['Javascript']])
// { id: 1, name: 'Alex', skill: ['Javascript'] }

const users = [{ id: 0, user: 'IAmBot' }, { id: 2, user: 'Alice' }, { id: 5, user: 'Tom' }]
const record = [
  { system: 'Linux', count: 99999, userId: 0 },
  { system: 'Mac OS', count: 10, userId: 2 },
  { system: 'Window', count: 2, userId: 5 },
]
zipToObject(
  users, record, 'user', 'count'
) // { IAmBot: 99999, Alice: 10, Tom: 2 }

zipToObject(
  users, record, item => item.user, item => item.count
) // { IAmBot: 99999, Alice: 10, Tom: 2 }
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `keys` | `any[]` | `false` | `undefined` | The array serving as keys |
| `values` | `any[]` | `false` | `undefined` | The array serving as values |
| `getKey` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | Transform array elements into keys |
| `getValue` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | Transform array elements into values |

#### Returns

| Type |
| ---  |
| `{}`  |