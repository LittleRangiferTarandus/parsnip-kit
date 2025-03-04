# modeItem
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Extract key values using the optional `getter` parameter (or directly using the array elements themselves), and return the first element that have the most frequently occurring value.

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.

> Added in v0.0.1



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

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Type of input array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | `false` | `undefined` | Input array |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Provide an identifier to distinguish the elements |

#### Returns

| Type |
| ---  |
| `T`  |