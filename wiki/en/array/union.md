# union
      
Input two arrays `arr1` and `arr2`, and output their union. A `getter` is provided to distinguish the elements.

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `any[]` | `arr1` | `false` | `undefined` | Array for computing the union |
| `path` | `arr2` | `false` | `undefined` | Array for computing the union |
| `getter` | `string \| ((item: any, index: number, arr: any[]) => any)` | `false` | `undefined` | Provide an identifier to distinguish the elements |
      
### Returns

| Type |
| ---  |
| `any[]`  |