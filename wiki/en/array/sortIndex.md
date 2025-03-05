# sortIndex
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Input an array `arr` and output an array representing the mapping from the indices of the original array to the indices of the sorted array. Note that the array `arr` itself will not be sorted. A custom comparator `comparator` can be provided; if not provided, the comparison logic will be the same as the native `sort`.

> Added in v0.0.1



### Usage

```ts
import { sortIndex } from 'parsnip-kit'

sort([1, 25, 4, 9, 16], (a, b) => a - b) // [1, 4, 9, 16, 25]
sortIndex([1, 25, 4, 9, 16], (a, b) => a - b) // [0, 4, 1, 2, 3]

sort([1, 25, 4, 9, 16]) // [1, 16, 25, 4, 9]
sortIndex([1, 25, 4, 9, 16]) // [0, 2, 3, 4, 1]
```


### API

#### Type Parameter

| Arg | Type | Description |
| --- | --- | --- |
| `T` | ` ` | Type of elements of array |

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `arr` | `T[]` | `false` | `undefined` | Array to be sorted |
| `comparator` | `(a: T, b: T) => number` | `true` | `undefined` | Comparator for sorting |

#### Returns

| Type |
| ---  |
| `number[]`  |