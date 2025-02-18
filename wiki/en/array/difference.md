# difference
      
Input two arrays arr1 and arr2, and output the difference set of arr1 - arr2. A getter is provided to distinguish the elements.

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

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr1` | `any[]` | `false` | `undefined` | Array for computing the difference |
| `arr2` | `any[]` | `false` | `undefined` | Array for computing the difference |
| `getter` | `string \| ((item: any, index: number, arr: any[]) => any)` | `true` | `undefined` | Provide an identifier to distinguish the elements |
      
### Returns

| Type |
| ---  |
| `any[]`  |