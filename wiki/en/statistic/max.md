# max
![Static Badge](https://img.shields.io/badge/Coverage-100.00%-FF8C00)
      
Calculates the maximum of the input array, supporting the extraction of numeric values via an optional parameter `getter` (or directly using the numeric values of the array elements). The `getter` is a field path similar to [getByPath](../object/getByPath) or a callback function, for extracting numerical values.

> Added in v0.0.1



### Usage

```ts
import { max } from 'parsnip-kit'

max([1, 2, 3, 4]) // 4

max([{ value: 10 }, { value: 20 }], item => item.value) // 20

max([{ score: 85 }, { score: 95 }], 'score') // 95
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
| `number`  |