# sortIndex
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Input an array `arr` and output an array representing the mapping from the indices of the original array to the indices of the sorted array. Note that the array `arr` itself will not be sorted. A custom comparator `comparator` can be provided; if not provided, the comparison logic will be the same as the native `sort`.

### Usage

```ts
import { sortIndex } from 'parsnip-kit'

sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]

sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
```

      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `any[]` | `false` | `undefined` | Array to be sorted |
| `comparator` | `(a: T, b: T) => number` | `true` | `undefined` | Comparator for sorting |
      
### Returns

| Type |
| ---  |
| `number[]`  |