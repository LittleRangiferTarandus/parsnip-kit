# count
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Count the occurrences of values extracted via the optional `getter` parameter (or directly using the array elements themselves).

The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide a label for frequency statistics.

> Added in v0.0.1



### Usage

```ts
import { count } from 'parsnip-kit'

count([1, 2, 2, 3, 3, 3]) // Map { 1 => 1, 2 => 2, 3 => 3 }

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'alice' }
]
count(users, 'id') // Map { 1 => 2, 2 => 1 }

count(users, (user) => user.name.toLowerCase()) // Map { 'alice' => 2, 'bob' => 1 }
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
| `Map<any, number>`  |