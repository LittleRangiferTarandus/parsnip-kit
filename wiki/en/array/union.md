# union
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input two arrays `arr1` and `arr2`, and output their union. Accepts a `getter`, which can be a field path similar to [getByPath](../object/getByPath) or a callback function, used to provide an identifier to distinguish elements.

### Usage

```ts
import { union } from 'parsnip-kit'

union([1, 2, 3, NaN], [1, 4, 8, NaN]) // [1, 2, 3, NaN, 4, 8]

union(
  [{ v: 1 }, { v: 2 }, { v: 3 }],
  [{ v: 1 }, { v: 4 }, { v: 8 }],
  'v'
) // [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 8 }]

union(
  [{ v: [1] }, { v: [2] }, { v: [3] }],
  [{ v: [1] }, { v: [4] }, { v: [8] }],
  'v[0]'
) // [{ v: [1] }, { v: [2] }, { v: [3] }, { v: [4] }, { v: [8] }]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], Math.floor) // [1.1, 2.4, 3.9, 4.16, 5, 6]

union([1.1, 2.4, 3.9, 4.16], [1, 2, 3, 4, 5, 6], (item: number, index: number, arr: number[]) => {
  return Math.floor(item)
}) // [1.1, 2.4, 3.9, 4.16, 5, 6]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr1` | `any[]` | `false` | `undefined` | Array for computing the union |
| `arr2` | `any[]` | `false` | `undefined` | Array for computing the union |
| `getter` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | Provide an identifier to distinguish the elements |

#### Returns

| Type |
| ---  |
| `any[]`  |