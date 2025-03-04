# mode
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Extract key values using the optional `getter` parameter (or directly using the array elements themselves), and return the most frequently occurring value.

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.

> Added in v0.0.1



### Usage

```ts
import { mode } from 'parsnip-kit'

mode([1, 2, 2, 3, 3, 3]) // 3

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
mode(users, 'id') // 1

mode(users, (user) => user.name.toLowerCase()) // 'alice'
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
| `any`  |