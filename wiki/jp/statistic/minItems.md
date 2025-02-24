# minItems
![Static Badge](https://img.shields.io/badge/Statement%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Branch%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Function%20Coverage-100.00%-brightgreen) ![Static Badge](https://img.shields.io/badge/Line%20Coverage-100.00%-brightgreen)
      
Calculate the minimum value of the input array and return an array containing all elements that have the minimum value, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.

> Added in v0.0.1



### Usage

```ts
import { minItems } from 'parsnip-kit'

minItems([1, 2, 3, 4]) // [1]

minItems([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], item => item.value)
// [{ value: 10 }, { value: 10, key: 'count' }]

minItems([{ value: 10 }, { value: 10, key: 'count' }, { value: 20 }], 'value')
// [{ value: 10 }, { value: 10, key: 'count' }]
```


### API

#### Arguments

| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| `data` | `any[]` | `false` | `undefined` | Input array |
| `getter` | `string \| ((item: T, index: number, arr: T[]) => number)` | `true` | `undefined` | For extracting numerical values from array elements |

#### Returns

| Type |
| ---  |
| `any[]`  |