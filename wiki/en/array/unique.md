# unique
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an array `arr` and return the elements that appear only once. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.

> Added in v0.0.1



### Usage

```ts
import { unique } from 'parsnip-kit'

unique([1, 2, 3, NaN, 1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]

unique(
  [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

unique(
  [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]

unique([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16, 5, 6]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Type of elements of array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `T[]` | `false` | `undefined` | Array that needs to be deduplicated |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Provide an identifier to distinguish the elements |

#### Returns

| Type |
| ---  |
| `T[]`  |