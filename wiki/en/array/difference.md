# difference
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input two arrays `arr1` and `arr2`, and output the difference set of `arr1` - `arr2`. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.

> Added in v0.0.1



### Usage

```ts
import { difference } from 'parsnip-kit'

difference([1, 2, 3, NaN], [1, 4, 8, NaN]) // [2, 3]

difference(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 2 }, { v: 3 }]

difference(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [2] }, { v: [3] }]

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // []

difference([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // []
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Type of elements of array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr1` | `T[]` | `false` | `undefined` | Array for computing the difference |
| `arr2` | `T[]` | `false` | `undefined` | Array for computing the difference |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => any)` | `true` | `undefined` | Provide an identifier to distinguish the elements |

#### Returns

| Type |
| ---  |
| `T[]`  |